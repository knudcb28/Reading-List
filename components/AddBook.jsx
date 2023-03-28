import React from "react";
import { Lora } from "next/font/google";
import backgroundImage from "../public/bookshelf.avif";
import { useState } from "react";

const lora = Lora({ subsets: ["latin"] });

function AddBook({setNewBook, onSubmit, onChange, inputText}) {

  return (
    <div className=" flex flex-col bg-white justify-center items-center mt-[10rem] sm:mt-0">
      <form onSubmit={onSubmit}>
        <div className="flex justify-center items-center">
          <label className="relative hover:cursor-text flex justify-center items-center">
            <input
              type="text"
              className="h-[64px] w-[300px] lg:w-[400px] rounded-xl text-xl md:text-4xl border-2 border-gray-300 border-opacity-50 outline-none bg-white focus:border-blue-500 focus:text-black transition duration-200 px-6"
              value={inputText}
              name="add book to reading list"
              onChange={onChange}
            />
            <span className="text-xl text-gray-700 text-opacity-80 absolute left-0 top-4 mx-6 px-2 transition duration-200 input-text">
              Add Book
            </span>
          </label>
        </div>
        <div className="flex justify-center mt-2">
          <div className=" w-[10rem] md:w-[50rem] h-[4rem] flex justify-center items-center">
            <button
              type="submit"
              className="rounded-md px-3.5 py-3 overflow-hidden relative group cursor-pointer border-[1px] border-black text-white w-[8rem] bg-black hover:border-black"
            >
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-blue-500 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-white transition duration-300 group-hover:text-white ease">
                Submit
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddBook;
