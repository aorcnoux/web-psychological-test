import { useParams, useNavigate } from "react-router-dom";
import { useTest } from "@/contexts/TestContext";
import { questions } from "@/data/questions";
import { useState, useEffect } from "react";

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { setAnswer, getAnswer } = useTest();

  const questionId = parseInt(id || "1", 10);
  const question = questions[questionId - 1];

  // 防止 question 為 undefined 時頁面出錯
  useEffect(() => {
    if (!question) {
      navigate("/question/1");
    }
  }, [question, navigate]);

  if (!question) return null;

  const [selectedOption, setSelectedOption] = useState<number | null>(
    getAnswer(questionId)
  );

  useEffect(() => {
    setSelectedOption(getAnswer(questionId));
  }, [questionId, getAnswer]);

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswer(questionId, selectedOption);
      if (questionId < questions.length) {
        navigate(`/question/${questionId + 1}`);
      } else {
        navigate("/results");
      }
    }
  };

  const handlePrev = () => {
    if (questionId > 1) {
      navigate(`/question/${questionId - 1}`);
    }
  };

      return (
        <div
          className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
          style={{ backgroundImage: "url(/qbg.jpeg)" }}
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl w-full max-w-md text-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">
              Question {questionId} of {questions.length}
            </h2>
            <p className="text-lg text-gray-700 mb-6">{question.question}</p>

            <div className="flex flex-col gap-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  className={`py-3 px-6 rounded-xl border text-gray-700 font-medium transition-all ${
                    selectedOption === index
                      ? "bg-purple-500 text-white border-purple-500"
                      : "bg-white hover:bg-gray-100 border-gray-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className={`flex ${questionId > 1 ? "justify-between" : "justify-end"}`}>
      {questionId > 1 && (
        <button
          onClick={handlePrev}
          className="px-4 py-2 rounded-lg bg-gray-300 text-gray-700 font-semibold hover:bg-gray-400 transition"
        >
          ← Previous
        </button>
      )}

      <button
        onClick={handleNext}
        disabled={selectedOption === null}
        className={`px-4 py-2 rounded-lg font-semibold transition ${
          selectedOption !== null
            ? "bg-purple-600 text-white hover:bg-purple-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {questionId === questions.length ? "Submit" : "Next →"}
      </button>
    </div>
      </div>
    </div>
  );
};

export default Question;
