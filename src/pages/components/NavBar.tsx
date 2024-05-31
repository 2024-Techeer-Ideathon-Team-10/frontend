import React from "react";
import withi from "../../assets/png/withi.png";
import { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router-dom";

export type NavBarProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string; // className을 optional prop으로 명시합니다.
};

const NavBar = ({ className }: NavBarProps) => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/"); // Home 경로로 이동합니다.
  };

  const handleHistoryClick = () => {
    navigate("/history"); // List 경로로 이동합니다.
  };

  const combinedClassName = `flex items-center justify-between w-full h-[65px] bg-[#EAFAFF] ${
    className || ""
  }`;

  return (
    <div className={combinedClassName}>
      <div className="flex flex-row cursor-pointer" onClick={handleHomeClick}>
        <img
          src={withi}
          alt="withi"
          style={{ height: "28px", width: "auto" }}
          className="ml-5"
        />
        <span className="ml-2 font-semibold text-xl text-[#12C6FF]">WITHI</span>
      </div>
      <button
        onClick={handleHistoryClick}
        className="mr-5 bg-[#12C6FF] text-white px-4 py-2 rounded-md"
      >
        History
      </button>
    </div>
  );
};

export default NavBar;
