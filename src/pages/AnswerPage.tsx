import React, { useState } from "react";
import NavBar from "./components/NavBar";

interface QuestionResponse {
  id: number;
  base64Image: string;
  answer: string;
  solution: string;
}

export default function SelectPage() {
  const [file, setFile] = useState<File | null>(null); // 파일 객체를 저장할 상태
  const [response, setResponse] = useState<QuestionResponse[] | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file && file.type.substr(0, 5) === "image") {
      setFile(file); // 파일 객체를 상태에 저장
    } else {
      setFile(null);
    }
  };

  const handleSolveQuestions = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file); // 'file' 키로 파일 객체 추가

    try {
      const response = await fetch("http://localhost:8000/questions", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setResponse(data);
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
            {response.map((res) => (
              <div key={res.id}>
                <p>{res.answer}</p>
                <p>{res.solution}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
