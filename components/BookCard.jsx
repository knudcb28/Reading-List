import React from "react";
import Image from "next/image";
import { League_Spartan } from "next/font/google";
import { AiOutlineEdit } from "react-icons/ai";

import { TiDeleteOutline } from "react-icons/ti";

const spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
});

function BookCard(props) {
  return (
    <div className="flex flex-col relative text-center rounded-xl hover:shadow-xl p-5 hover:transition-transform hover:ease-in duration-[.25s]">
      <div className="flex justify-end cursor-pointer">
        <AiOutlineEdit size={30} className="mr-5 hover:scale-125 ease-in" />
        <TiDeleteOutline size={30} className="hover:scale-125 ease-in" />
      </div>
      <div className="flex sm:h-[80px] h-[50px] flex-nowrap overflow-hidden">
        <div className="flex flex-col justify-center bg-black h-[45px] w-[45px] rounded ml-2">
          <p className="text-white z-10">{props.id}</p>
        </div>
        <div className="flex flex-col text-left justify-start pl-3">
          <h1 className="">{props.title}</h1>
          <p className="text-xs">By: {props.author}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="border-yellow-400 border-2 " />
      </div>
      <div className={spartan.className}>
        <div className="flex justify-center pt-3 mt-4">
          <Image
            src={props.img}
            alt="book cover"
            className="rounded-3xl object-cover"
            height={200}
            width={200}
          />
        </div>
        <div className="mt-10 grid text-center p-3">
          <p className="text-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
