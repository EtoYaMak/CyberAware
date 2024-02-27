import React from "react";
import QuizComp from "../components/QuizComp";

const Quiz: React.FC = () => {
  return (
    <>
      <h1 className="text-white font-Jost text-4xl font-medium ">
        Boost Your Cybersecurity IQ: Take Our Quick Quiz!
      </h1>
      <QuizComp />
    </>
  );
};

export default Quiz;
