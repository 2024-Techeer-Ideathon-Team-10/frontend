import withi from "../../assets/png/withi.png";
import { ButtonHTMLAttributes } from "react";

export type NavBarProps = ButtonHTMLAttributes<HTMLButtonElement>;

const NavBar = ({ children }: NavBarProps) => {
  return (
    <div className="flex items-center w-full h-[65px] bg-[#EAFAFF]">
      <img
        src={withi}
        alt="withi"
        style={{ height: "28px", width: "auto" }}
        className="ml-5"
      />
      <span className="ml-2 font-semibold text-xl text-[#12C6FF]">WITHI</span>
    </div>
  );
};

export default NavBar;
