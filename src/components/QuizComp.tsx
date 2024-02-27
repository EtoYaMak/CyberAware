import React, { useState, useEffect } from "react";
import QuizQuestions from "../assets/QuizQuestions.json";
import { TfiReload } from "react-icons/tfi";

interface AnswerOptions {
  a: string;
  b: string;
  c: string;
}

interface Question {
  question: string;
  answers: AnswerOptions;
  correctAnswer: string;
}

const QuizComp: React.FunctionComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<
    (keyof AnswerOptions | null)[]
  >(new Array(Object.keys(QuizQuestions).length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffleCounter] = useState(0);

  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);

  useEffect(() => {
    shuffleQuestions();
  }, [shuffleCounter]);

  const handleOptionSelect = (option: keyof AnswerOptions) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentIndex(currentIndex - 1);
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptions(new Array(Object.keys(QuizQuestions).length).fill(null));
    setShowResult(false);
    setScore(0);
    shuffleQuestions();
  };

  const shuffleQuestions = () => {
    const shuffled = [...QuizQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled);
  };

  const handleSubmit = () => {
    let correct = 0;
    selectedOptions.forEach((selectedOption, index) => {
      if (selectedOption === shuffledQuestions[index].correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setShowResult(true);
  };

  return (
    <div className="w-2/4 shadow-[5px_5px_0px_0px_rgba(255,255,255)] border-l border-t border-white/70 rounded-xl">
      {showResult ? (
        <div className="text-center py-5 space-y-10">
          <h2 className="text-white text-3xl py-5 font-Jost font-medium">
            Quiz Result
          </h2>
          <span className="text-white text-3xl py-5 flex justify-center gap-2 items-center font-Jost">
            <p>You scored</p>{" "}
            <p className="font-Cabin font-medium text-5xl text-yellow-500">
              {score}
            </p>
            <p>out of</p>
            <p className="font-Cabin font-medium text-5xl text-sky-500">
              {shuffledQuestions.length}
            </p>
          </span>
          <button
            onClick={handleRestartQuiz}
            className="text-black bg-white font-Jost text-xl font-medium h-fit px-[1.794rem] py-2 hover:bg-rose-600 hover:text-white hover:scale-[103%] ease-in-out duration-100"
          >
            Restart Quiz
          </button>
          <span className="text-white text-3xl flex justify-center items-center rotate">
            <TfiReload id="icon" />
          </span>
        </div>
      ) : (
        <div className="p-2">
          <h2 className="text-xl font-Jost px-2 pt-5 pb-1 text-white border-b w-3/4 ml-8">
            Question {currentIndex + 1}
          </h2>
          <p className="text-2xl font-semibold font-Jost px-8 py-3 text-white">
            {shuffledQuestions.length > 0 &&
              shuffledQuestions[currentIndex].question}
          </p>
          <div className="flex flex-col w-full items-start gap-10">
            {shuffledQuestions[currentIndex] &&
              Object.keys(shuffledQuestions[currentIndex].answers).map(
                (option) => (
                  <button
                    key={option}
                    className={`flex gap-4 p-2 px-8 w-full  ${
                      selectedOptions[currentIndex] === option
                        ? "bg-white text-black font-bold" // Apply this background color if the option is selected
                        : "bg-[#220081] text-white " // Otherwise, apply default background color
                    } hover:bg-white  hover:text-black hover:font-semibold font-Jost text-xl text-start`}
                    onClick={() =>
                      handleOptionSelect(option as keyof AnswerOptions)
                    }
                    //disabled={selectedOptions[currentIndex] !== null}
                  >
                    {
                      shuffledQuestions[currentIndex].answers[
                        option as keyof AnswerOptions
                      ]
                    }
                  </button>
                )
              )}
          </div>
          <div
            className={`flex w-full p-8 py-10 ${
              currentIndex > 0 ? "justify-between" : "justify-end items-end"
            }`}
          >
            {currentIndex > 0 && (
              <button
                onClick={handlePreviousQuestion}
                className="text-black bg-white h-fit px-3 py-2 font-Jost text-xl font-medium   hover:bg-rose-600 hover:text-white hover:scale-[103%] ease-in-out duration-100"
              >
                Previous
              </button>
            )}
            {currentIndex === shuffledQuestions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className="text-white bg-emerald-600  font-Jost text-xl font-semibold h-fit px-[1.794rem] py-2  hover:bg-green-600 hover:text-white hover:scale-[103%] ease-in-out duration-100"
              >
                Submit
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="text-black bg-white font-Jost text-xl font-medium h-fit px-[1.794rem] py-2 hover:bg-rose-600 hover:text-white hover:scale-[103%] ease-in-out duration-100"
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizComp;
