import React from "react";
import NavBar from "./components/NavBar";
import Cloud from "./../assets/svg/Cloud.svg";
import Phone from "./../assets/svg/Phone.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <img src={Cloud} alt="Cloud" width={1048} height={667} />
      <img src={Phone} alt="Phone" width={320} height={320} />
    </div>
  );
}
