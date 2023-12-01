import { useState } from "react";

export default function Add() {
  const [currentItem, setCurrentItem] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setCurrentItem(e.target.value);
    if (e.key === "Enter") {
      addToTheList();
    }
  };

  const addToTheList = () => {
    // check for empty
    if (currentItem.trim().length === 0) {
      return;
    }
    // check for duplicate
    if (list.includes(currentItem)) {
      return;
    }
    setList([...list, currentItem]);
    setCurrentItem("");
  };
  const handleDelete = (itemId) => {
    const newList = list.filter((item, i) => i !== itemId);
    setList(newList);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addToTheList();
  };

  return (
    <div>
      <div className="shadow-xl hover:shadow-2xl hover: duration-300 max-w-[30%] mx-auto mt-32">
        <h1 className="flex justify-center font-bold text-2xl pt-4">
          Grocery Bud
        </h1>
        <div className="">
          <form
            className="flex flex-col text-center py-5"
            onSubmit={handleSubmit}
            action=""
          >
            <div className="">
              <input
                type="text"
                value={currentItem}
                name=""
                id=""
                onChange={handleChange}
                className="w-[65%] p-2 rounded-l-md shadow-md"
              />
              <button
                type="button"
                className="py-2 px-4 rounded-r-md bg-gray-500 hover:bg-gray-800 duration-300 text-white"
                onClick={addToTheList}
              >
                Add List
              </button>
            </div>
          </form>
          <div className="flex flex-col max-w-[80%] mx-auto">
            {list.map((item, index) => (
              <div
                className="flex justify-between px-5 mb-4 rounded-md hover:-bg-primary-200 duration-200"
                key={index}
              >
                <h2 className="font-medium text-gray-700 py-2  cursor-default">
                  {item}
                </h2>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
