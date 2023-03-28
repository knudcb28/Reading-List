import React from "react";
import BookCard from "./BookCard";
import { Bebas_Neue } from "next/font/google";
import bookImage from "../public/book-cover.jpg";
import { useState } from "react";
import { readingList } from "@/constants";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

function ReadingList(props) {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="flex justify-center text-[80px] md:text-[100px] flex-col text-center items-center tracking-widest bg-yellow-400 w-[100%] overflow-hidden h-[15rem]">
        <h1 className={bebas.className}>Reading List</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-[2rem] justify-center mb-20 ">
        {props.readingList.map((card) => {
          return (
            <BookCard
              id={card.id}
              key={card.id}
              title={card.title}
              author={card.author}
              img={card.imgUrl}
              description={card.description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ReadingList;
