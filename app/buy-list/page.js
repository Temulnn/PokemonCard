"use client";

import { useState } from "react";

export default function Home() {
  const [itemList, setItemList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const addList = () => {
    const newItem = {
      title: inputValue,
      amount: amount,
    };
    setItemList([...itemList, newItem]);
  };

  const deleteJob = (index) => {
    const updatedList = itemList.filter((job, i) => {
      return i !== index;
    });
    setItemList(updatedList);
  };

  return (
    <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
      <div className="w-100 h-100 bg-white rounded-xl flex flex-col gap-3 p-5">
        <div className="text-2xl font-[600] text-black">
          💰 Зардлын тэмдэглэл
        </div>
        <div className="w-full bg-blue-950 rounded-xl px-5 py-2 h-20 flex flex-col gap-1 ">
          <span className="text-gray-400">нийт</span>
          <span className="text-2xl text-white">0</span>
        </div>
        <input
          type="text"
          placeholder="Yund zartsuulsan be?"
          className="w-full h-10 pl-3 text-gray-700 border-gray-300 border-1 rounded-md"
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
        <input
          type="number"
          placeholder="Dun?"
          className="w-40 h-10 pl-3 text-gray-700 border-gray-300 border-1 rounded-md"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <button
          className="w-full bg-green-700 flex justify-center items-center rounded-xl text-white h-10"
          onClick={addList}
        >
          ADD
        </button>
        <div className="flex flex-col gap-3">
          {itemList.map((todo, index) => {
            return (
              <div className="w-full bg-gray-300 text-black h-15 flex justify-between items-center p-4 rounded-xl">
                <div className="flex gap-3">
                  {" "}
                  {todo.title} , {todo.amount}$
                </div>
                <button
                  onClick={() => {
                    deleteJob(index);
                  }}
                >
                  🗑️
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
