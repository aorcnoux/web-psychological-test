import { useNavigate } from "react-router-dom";
import { useTest } from "@/contexts/TestContext";

const Landing = () => {
  const navigate = useNavigate();
  const { resetTest } = useTest();

  const handleStartTest = () => {
    resetTest();
    navigate("/question/1");
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center p-4"
      style={{ backgroundImage: "url(/bg.png)" }} // 這裡改你的圖片路徑
    >
      <div className="max-w-md w-full text-center">
        <div className="bg-black/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
          <div className="flex justify-center mb-6">
            <div className="text-2xl">
              💿💫

              
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white mb-4">
            Which Taylor Swift Album Are You? 🫵🏻
          </h1>

          <p className="text-lg text-gray-200 mb-8 leading-relaxed">
            Discover which Taylor Swift era matches your personality!<br />
            找出最符合你性格的 Taylor Swift 音樂專輯！
          </p>

          <div className="flex flex-col items-center justify-center gap-1 mb-6 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span>✨ 只要 2 分鐘，探索你的靈魂專輯 ✨</span>
            </div>
            <span>回答 10 題關於生活、愛情與夢想的小問題</span>
          </div>

          <button
            onClick={handleStartTest}
            className="w-full py-6 text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-2xl transform transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Start
          </button>

        </div>
      </div>
    </div>
  );
};

export default Landing;
