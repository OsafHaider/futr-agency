import React from "react";
import Dialouge from "./Dialouge";
import { askedQuestions } from "@/JSON/AskedQuestion";

const AskedQuestions = () => {
  return (
    <section className="w-full ">
      <Dialouge data={askedQuestions} />
    </section>
  );
};

export default AskedQuestions;
