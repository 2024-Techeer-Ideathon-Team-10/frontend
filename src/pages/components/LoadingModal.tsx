import React from "react";
import Mal from "./../../assets/svg/Mal.svg";
import mascot from "./../../assets/png/mascot.png";

const LoadingModal = () => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <style>{cloudAnimation}</style>
      <div
        className="bg-white p-10 rounded-lg shadow-lg flex items-center justify-center"
        style={{ width: "600px", height: "300px" }}
      >
        <img
          src={mascot}
          alt="mascot"
          className="w-24 h-auto ml-20"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />

        <div className="relative flex items-center justify-center mb-16">
          <img src={Mal} alt="Mal" className="w-72 h-auto" />
          <span
            className="absolute text-xl font-semibold text-black"
            style={{ zIndex: 10, whiteSpace: "nowrap" }}
          >
            정답을 생각하고 있어요...
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingModal;
