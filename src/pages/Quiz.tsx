import QuizComp from "../components/QuizComp";
import "./pages.css";

const Quiz: React.FC = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="section-title">
          Cybersecurity Challenge
        </h1>
        <div className="quiz-container">
          <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 text-white">
              <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
                Put your cybersecurity knowledge to the test with our interactive quiz. Learn while you play and level up your security awareness!
              </p>
            </div>
            <QuizComp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
