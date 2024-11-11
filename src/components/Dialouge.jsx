"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const Dialouge = ({ data }) => {
  const [open, setOpen] = useState(null);
  const handleOpen = (index) => {
    setOpen(open === index ? null : index);
  };
  return (
    <div className=" grid grid-cols-1 gap-10 max-w-2xl mx-auto px-4 lg:px-0">
      {data.map((v, i) => (
        <div
          key={i}
          className="bg-zinc-900 flex flex-col gap-4  rounded-md overflow-hidden"
        >
          <div
            className="flex py-2 px-4 items-center justify-start"
            onClick={() => handleOpen(i)}
          >
            <h1 className=" font-bold text-lg w-full   cursor-pointer">
              {v.question}
            </h1>
            <span className="ease-in-out duration-500">
              {open === i ? (
                <ChevronDown className="size-5" />
              ) : (
                <ChevronUp className="size-5" />
              )}
            </span>
          </div>
          <div
            className={` px-4 ease-in-out duration-500 ${
              open === i ? "max-h-96 pb-4" : "max-h-0"
            }`}
          >
            <p>{v.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dialouge;
