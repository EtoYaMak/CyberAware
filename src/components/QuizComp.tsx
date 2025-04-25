import { useState, useEffect } from "react";
import QuizQuestions from "../assets/QuizQuestions.json";
import { TfiReload } from "react-icons/tfi";
import { FiClock, FiAward } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

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
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds per question
  const [timerActive, setTimerActive] = useState(false);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [quizStarted, setQuizStarted] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Initialize quiz on load
  useEffect(() => {
    shuffleQuestions();
  }, []);

  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && timerActive) {
      // Time's up - move to next question
      handleNextAfterTimeout();
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [timeLeft, timerActive]);

  // Calculate level based on XP
  useEffect(() => {
    setLevel(Math.floor(xp / 100) + 1);
  }, [xp]);

  const shuffleQuestions = () => {
    const shuffled = [...QuizQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setShuffledQuestions(shuffled);
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setTimerActive(true);
    resetTimer();
  };

  const resetTimer = () => {
    setTimeLeft(60);
  };

  const handleNextAfterTimeout = () => {
    setTimerActive(false);

    // If no answer was selected, mark as incorrect
    if (selectedOptions[currentIndex] === null) {
      const updatedOptions = [...selectedOptions];
      updatedOptions[currentIndex] = 'x' as any; // Mark as timeout
      setSelectedOptions(updatedOptions);
      setStreak(0);
      setShowFeedback(true);
      setIsCorrect(false);
      setShowCorrectAnswer(true);
    }

    // Wait for feedback animation then proceed
    setTimeout(() => {
      if (currentIndex < shuffledQuestions.length - 1) {
        setCurrentIndex(currentIndex + 1);
        resetTimer();
        setTimerActive(true);
        setShowFeedback(false);
        setShowCorrectAnswer(false);
      } else {
        handleSubmit();
      }
    }, 3000);
  };

  const handleOptionSelect = (option: keyof AnswerOptions) => {
    // Only allow selection if no option is already selected
    if (selectedOptions[currentIndex] === null) {
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[currentIndex] = option;
      setSelectedOptions(updatedSelectedOptions);

      // Stop the timer
      setTimerActive(false);

      // Check if answer is correct
      const isAnswerCorrect = option === shuffledQuestions[currentIndex].correctAnswer;
      setIsCorrect(isAnswerCorrect);

      // Update streak and best streak
      if (isAnswerCorrect) {
        const newStreak = streak + 1;
        setStreak(newStreak);
        if (newStreak > bestStreak) {
          setBestStreak(newStreak);
        }

        // Award XP based on time left and streaks
        const timeBonus = Math.floor(timeLeft / 10);
        const streakBonus = Math.floor(newStreak / 2);
        const questionXp = 10 + timeBonus + streakBonus;
        setXp(xp + questionXp);
      } else {
        setStreak(0);
        setShowCorrectAnswer(true);
      }

      // Show feedback
      setShowFeedback(true);

      // Wait for feedback animation then proceed
      setTimeout(() => {
        if (currentIndex < shuffledQuestions.length - 1) {
          setCurrentIndex(currentIndex + 1);
          resetTimer();
          setTimerActive(true);
          setShowFeedback(false);
          setShowCorrectAnswer(false);
        } else {
          handleSubmit();
        }
      }, 2000);
    }
  };


  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOptions(new Array(Object.keys(QuizQuestions).length).fill(null));
    setShowResult(false);
    setScore(0);
    setStreak(0);
    setQuizStarted(false);
    setShowFeedback(false);
    setShowCorrectAnswer(false);
    setTimerActive(false);
    resetTimer();
    shuffleQuestions();
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
    setTimerActive(false);
  };

  // Calculate progress percentage
  const progressPercentage = ((currentIndex + 1) / shuffledQuestions.length) * 100;

  // Calculate timer percentage for progress bar
  const timerPercentage = (timeLeft / 60) * 100;

  // Render the welcome/start screen
  if (!quizStarted && !showResult) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Cybersecurity Challenge</h2>
          <div className="bg-indigo-800/50 p-6 rounded-xl mb-8">
            <p className="text-white/90 text-lg mb-4">Test your cybersecurity knowledge with this interactive quiz!</p>
            <ul className="text-left text-white/80 space-y-2 mb-6 mx-auto max-w-md">
              <li className="flex items-center gap-2"><FiClock className="text-cyan-400" /> 60 seconds per question</li>
              <li className="flex items-center gap-2"><FiAward className="text-yellow-400" /> Earn XP and level up</li>
              <li className="flex items-center gap-2"><span className="text-red-400 text-xl">🔥</span> Build streaks for bonus points</li>
            </ul>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={startQuiz}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-emerald-500/30 transition-all duration-300"
          >
            Start Challenge
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Render the results screen
  if (showResult) {
    // Calculate percentage
    const percentage = Math.round((score / shuffledQuestions.length) * 100);

    // Determine result message based on score
    let resultMessage = "";
    let resultColor = "";

    if (percentage >= 90) {
      resultMessage = "Cybersecurity Expert!";
      resultColor = "text-emerald-400";
    } else if (percentage >= 70) {
      resultMessage = "Security Savvy!";
      resultColor = "text-blue-400";
    } else if (percentage >= 50) {
      resultMessage = "Security Aware";
      resultColor = "text-yellow-400";
    } else {
      resultMessage = "Security Novice";
      resultColor = "text-rose-400";
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-7xl bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden"
      >
        <div className="text-center p-8 space-y-6">
          <h2 className="text-white text-3xl font-bold">
            Quiz Results
          </h2>

          <div className="relative w-48 h-48 mx-auto">
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                className="text-gray-700 stroke-current"
                strokeWidth="10"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
              ></circle>
              <circle
                className="text-blue-500 stroke-current"
                strokeWidth="10"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray={Math.PI * 80}
                strokeDashoffset={Math.PI * 80 * (1 - percentage / 100)}
              ></circle>
            </svg>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="text-5xl font-bold text-white">{percentage}%</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={`text-2xl font-bold ${resultColor}`}>{resultMessage}</h3>
            <p className="text-white text-xl">
              You scored <span className="font-bold text-yellow-300">{score}</span> out of <span className="font-bold text-blue-300">{shuffledQuestions.length}</span>
            </p>

            <div className="flex justify-center gap-4 items-center mt-4">
              <div className="bg-indigo-800/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/70">Best Streak</p>
                <p className="text-xl font-bold text-orange-400">{bestStreak} 🔥</p>
              </div>
              <div className="bg-indigo-800/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/70">XP Earned</p>
                <p className="text-xl font-bold text-cyan-400">{xp} XP</p>
              </div>
              <div className="bg-indigo-800/50 px-4 py-2 rounded-lg">
                <p className="text-sm text-white/70">Level</p>
                <p className="text-xl font-bold text-emerald-400">{level}</p>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRestartQuiz}
            className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-purple-500/30 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <TfiReload className="text-lg" /> Try Again
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Render the quiz questions
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl bg-gradient-to-br from-indigo-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden"
    >
      {/* Progress bar */}
      <div className="w-full bg-indigo-950/50 h-2">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Header with stats */}
      <div className="bg-indigo-950/30 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-800/80 rounded-lg px-3 py-1.5">
            <p className="text-white/90 text-xs">Question</p>
            <p className="text-white font-bold">{currentIndex + 1}/{shuffledQuestions.length}</p>
          </div>

          <div className="bg-indigo-800/80 rounded-lg px-3 py-1.5">
            <p className="text-white/90 text-xs">Streak</p>
            <p className="text-orange-400 font-bold flex items-center">{streak} 🔥</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-indigo-800/80 rounded-lg px-3 py-1.5">
            <p className="text-white/90 text-xs">Level</p>
            <p className="text-emerald-400 font-bold">{level}</p>
          </div>

          <div className="bg-indigo-800/80 rounded-lg px-3 py-1.5 flex items-center gap-1">
            <div>
              <p className="text-white/90 text-xs">Time</p>
              <p className="text-white font-bold">{timeLeft}s</p>
            </div>
            <div className="w-12 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-200 ${timeLeft > 20 ? 'bg-emerald-500' : timeLeft > 10 ? 'bg-yellow-500' : 'bg-red-500'}`}
                style={{ width: `${timerPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <AnimatePresence mode="wait">
          {showFeedback ? (
            <motion.div
              key="feedback"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`p-6 rounded-xl mb-4 text-center ${isCorrect ? 'bg-emerald-500/20' : 'bg-rose-500/20'}`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${isCorrect ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isCorrect ? 'Correct!' : 'Incorrect!'}
              </h3>

              {!isCorrect && showCorrectAnswer && (
                <p className="text-white">
                  The correct answer was: <span className="font-bold text-emerald-400">
                    {shuffledQuestions[currentIndex].answers[shuffledQuestions[currentIndex].correctAnswer as keyof AnswerOptions]}
                  </span>
                </p>
              )}

              {isCorrect && (
                <div className="mt-2 text-white/90">
                  <p>+10 XP base</p>
                  {Math.floor(timeLeft / 10) > 0 && <p>+{Math.floor(timeLeft / 10)} XP time bonus</p>}
                  {Math.floor(streak / 2) > 0 && <p>+{Math.floor(streak / 2)} XP streak bonus</p>}
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="question"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">
                {shuffledQuestions.length > 0 && shuffledQuestions[currentIndex].question}
              </h2>

              <div className="space-y-3">
                {shuffledQuestions[currentIndex] &&
                  Object.keys(shuffledQuestions[currentIndex].answers).map((option) => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handleOptionSelect(option as keyof AnswerOptions)}
                      className={`w-full p-4 rounded-lg text-left transition-all duration-200 focus:outline-none ${selectedOptions[currentIndex] === option
                        ? "bg-white text-indigo-900 font-bold border-2 border-white" // Selected
                        : "bg-indigo-800/50 text-white hover:bg-indigo-700/70 border-2 border-transparent" // Not selected
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedOptions[currentIndex] === option
                          ? "bg-indigo-600 text-white"
                          : "bg-indigo-600/30 text-white/80"
                          }`}>
                          {option.toUpperCase()}
                        </div>
                        <span className="text-lg">
                          {shuffledQuestions[currentIndex].answers[option as keyof AnswerOptions]}
                        </span>
                      </div>
                    </motion.button>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default QuizComp;
