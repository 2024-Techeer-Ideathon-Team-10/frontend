import React, { useState } from "react";
import NavBar from "./components/NavBar";

interface QuestionResponse {
  id: number;
  base64Image: string;
  answer: string; // 직접 화면에 출력할 문자열
  solution: string; // 직접 화면에 출력할 문자열
}

export default function SelectPage() {
  const [file, setFile] = useState<File | null>(null);
  const [response, setResponse] = useState<QuestionResponse | null>(null);

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

    const formData = new FormData();
    formData.append("file", file);

    try {
      const postResponse = await fetch("http://localhost:8000/questions", {
        method: "POST",
        body: formData,
      });
      if (!postResponse.ok) {
        throw new Error(`HTTP error! status: ${postResponse.status}`);
      }
      const result = await postResponse.json(); // 서버로부터 JSON 형식의 응답 받음
      console.log("Server Response:", result); // 로그에 서버 응답 출력

      if (result.status === 200 && result.response) {
        // 서버 응답을 직접 상태에 저장
        setResponse(result.response);
      } else {
        throw new Error("Invalid server response");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      setResponse(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <NavBar className="fixed top-0 w-full z-20 h-[51px]" />

      <div className="pt-16 flex flex-col items-center">
        <h1 className="text-2xl font-bold my-4">Answer pages</h1>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
        />
        {file && (
          <div>
            <img
              src={URL.createObjectURL(file)}
              alt="Uploaded"
              className="max-w-full h-auto rounded-md"
            />
            <button
              onClick={handleSolveQuestions}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Solve Questions
            </button>
          </div>
        )}
        {response && (
          <div className="mt-4">
            <h2 className="text-lg font-bold">Responses:</h2>
            <div>
              <p>
                <strong>Answer:</strong> {response.answer}
              </p>
              <p>
                <strong>Solution:</strong> {response.solution}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
