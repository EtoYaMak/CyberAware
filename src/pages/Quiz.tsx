import React from "react";
import QuizComp from "../components/QuizComp";

const Quiz: React.FC = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-14">
      <h1 className="text-white font-Jost text-4xl font-medium ">
        Boost Your Cybersecurity IQ: Take Our Quick Quiz!
      </h1>
      <QuizComp />
    </div>
  );
};

export default Quiz;
