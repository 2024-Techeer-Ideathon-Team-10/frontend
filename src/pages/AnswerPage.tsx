import React, { useState } from "react";
import NavBar from "./components/NavBar";
import LoadingModal from "./components/LoadingModal";

interface QuestionResponse {
  problemExplanation: number[];
  solutionProcess: string[];
  answer: string[];
}

export default function AnswerPage() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<QuestionResponse[] | null>(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type.substr(0, 5) === "image") {
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const handleSolveQuestions = async () => {
    if (!file) return;

    setLoading(true); // 로딩 상태 설정

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:8000/questions", {
        method: "POST",
        body: formData,
      });
      let data = await response.json();
      data = data.response;
      data = JSON.parse(data);
      console.log(typeof data);
      console.log("Received data:", data); // 데이터 로깅

      console.log("Received data:", data!.problemExplanation[0]); // 데이터 로깅
      console.log("Received data:", data!.solutionProcess[0]); // 데이터 로깅
      console.log("Received data:", data!.answer[0]); // 데이터 로깅
      setResponse([data]);
    } catch (error) {
      console.error("Error fetching questions:", error);
      setResponse(null);
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar className="fixed top-0 w-full z-20 h-[51px]" />
      <div className="pt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold my-4">WITHI에게 물어봐요</h1>
        <div className="w-3/4 bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                       file:rounded-full file:border-0 file:text-sm file:font-semibold
                       file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
          {file && (
            <div className="flex flex-col items-center">
              <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                <img
                  src={URL.createObjectURL(file)}
                  alt="Uploaded"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <button
                onClick={handleSolveQuestions}
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Solve Questions
              </button>
            </div>
          )}
          {loading && <LoadingModal />}
          {response &&
            Array.isArray(response) && ( // Array.isArray를 사용하여 배열 확인
              <div className="mt-4">
                <h2 className="text-lg font-bold">Responses:</h2>
                {
                  <div key={0}>
                    <br />
                    <div className="font-semibold text-lg">정답</div>
                    <p>{response[0].answer}</p>

                    <br />
                    <div className="font-semibold text-lg">풀이</div>
                    <p>{response[0].problemExplanation}</p>

                    <br />
                    <div className="font-semibold text-lg">풀이 과정</div>
                    <p>{response[0].solutionProcess}</p>
                  </div>
                }
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
