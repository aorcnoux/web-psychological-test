import { useNavigate } from "react-router-dom";
import { useTest } from "@/contexts/TestContext";
import { calculateResult } from "@/data/albums";
import { useState, useEffect } from "react";

const Results = () => {
  const navigate = useNavigate();
  const { answers, resetTest } = useTest();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (answers.length !== 10) {
      navigate('/');
      return;
    }

    // Simulate loading
    const timer = setTimeout(() => {
      const albumResult = calculateResult(answers);
      setResult(albumResult);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [answers, navigate]);

  const handleRetakeTest = () => {
    resetTest();
    navigate('/');
  };

  const handleShare = async () => {
    if (!result) return;

    const shareText = `I just took the Taylor Swift Album personality test and got ${result.name}! ${result.description}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Taylor Swift Album Personality Test',
          text: shareText,
          url: window.location.origin
        });
      } catch (error) {
        await navigator.clipboard.writeText(shareText);
        alert("Copied to clipboard! Share your result with friends!");
      }
    } else {
      await navigator.clipboard.writeText(shareText);
      alert("Copied to clipboard! Share your result with friends!");
    }
  };

  if (isLoading) {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url(/bg.jpg)" }} // 你的背景圖片放 public/loading_bg.jpg
      >  
        <div className="text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-md mx-auto">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-pink-500 border-t-transparent mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
            正在分析你的個性...
            </h2>
            <p className="text-gray-600">
            尋找最符合你的 Taylor Swift 專輯！
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!result) {
    navigate('/');
    return null;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br ${result.color} flex items-center justify-center p-4`}>
      <div className="max-w-lg w-full text-center">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className={`p-4 bg-gradient-to-r ${result.color} rounded-full text-white text-2xl`}>
              ✨💿
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            You Are...
          </h1>

          <h2 className={`text-4xl font-extrabold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-6`}>
            {result.name}
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-8 whitespace-pre-wrap">
          {result.description}
           </p>


           <div className="space-y-4">
  <div className="flex space-x-4">
    <button
      onClick={handleShare}
      className={`w-1/2 py-4 text-lg font-semibold bg-gradient-to-r ${result.color} text-white rounded-2xl transform transition-all duration-200 hover:scale-105 shadow-lg`}
    >
      📤 分享結果
    </button>

    <a
      href={result.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-1/2 py-4 text-lg font-semibold rounded-2xl border border-gray-300 rounded-2xl hover:border-gray-400 flex items-center justify-center transition-all duration-200 shadow`}
    >
      🎧 立即聆聽
    </a>
      </div>

  <button
    onClick={handleRetakeTest}
    className="w-full py-4 text-lg font-semibold rounded-2xl border border-gray-300 hover:border-gray-400"
  >
    🔄 再測一次
  </button>
</div>


          <p className="text-xs text-gray-500 mt-6">
          分享這個測驗給你的朋友，一起看看他們屬於哪張專輯吧！🎧
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
