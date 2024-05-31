import React, { useState } from "react";
import withi from "../../assets/png/withi.png";
import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";
import LoadingModal from "./LoadingModal";

export type NavBarProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string; // className을 optional prop으로 명시합니다.
};

const NavBar = ({ className }: NavBarProps) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    navigate("/"); // /select 경로로 이동합니다.
  };

  const handleShowModal = () => {
    setShowModal(true); // 모달 표시
  };

  const combinedClassName = `flex items-center w-full h-[65px] bg-[#EAFAFF] ${
    className || ""
  }`;

  return (
    <div className={combinedClassName}>
      <div className="flex flex-row cursor-pointer" onClick={handleClick}>
        <img
          src={withi}
          alt="withi"
          style={{ height: "28px", width: "auto" }}
          className="ml-5"
        />
        <span className="ml-2 font-semibold text-xl text-[#12C6FF]">WITHI</span>
      </div>
      {/* 로딩 모달 토글 버튼 */}
      <button
        onClick={handleShowModal}
        className="ml-auto mr-5 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Show Loading
      </button>
      {showModal && <LoadingModal />}
    </div>
  );
};
export default NavBar;
