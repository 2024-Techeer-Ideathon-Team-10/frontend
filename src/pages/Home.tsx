import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Cloud from "./../assets/svg/Cloud.svg";
import Phone from "./../assets/svg/Phone.svg";
import PlayBtn from "./../assets/svg/PlayBtn.svg";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/answer"); // /answer 경로로 이동합니다.
  };

  const cloudAnimation = `
    @keyframes float {
      0%, 100% {
        transform: translate(-50%, -10px);
      }
      25% {
        transform: translate(-50%, -30px);
      }
      50% {
        transform: translate(-50%, 10px);
      }
      75% {
        transform: translate(-50%, -20px);
      }
    }
  `;

  return (
    <div className="flex flex-col items-center w-full h-screen overflow-hidden">
      <style>{cloudAnimation}</style>
      <NavBar className="fixed top-0 w-full z-20" />

      <div className="text-4xl font-semibold mt-32">
        모르는 문제는 WITHI에게 질문하세요!
      </div>
      <div className="flex flex-col justify-end items-center w-full h-full">
        {/* 구름 이미지 */}
        <div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-0"
          style={{ animation: "float 8s ease-in-out infinite" }}
        >
          <img
            src={Cloud}
            alt="Cloud"
            style={{ width: "1048px", height: "667px" }}
          />
        </div>
        {/* 검은색 배경 div와 폰 이미지 */}
        <div className="relative z-10">
          <div
            style={{
              width: "420px",
              height: "520px",
              backgroundColor: "#000",
              position: "absolute",
              top: "15px",
              left: "15px",
              zIndex: 1, // Phone 뒤에 위치하도록 설정
            }}
          ></div>
          <img
            src={Phone}
            alt="Phone"
            className="relative z-20" // Phone을 배경 위로 올리기 위해 z-20 설정
            style={{
              width: "450px",
              height: "550px",
              objectFit: "contain",
            }}
          />
          {/* PlayBtn SVG */}
          <img
            src={PlayBtn}
            alt="Play Button"
            className="absolute z-30 cursor-pointer" // PlayBtn을 최상단으로 설정
            style={{
              width: "150px",
              height: "150px",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
