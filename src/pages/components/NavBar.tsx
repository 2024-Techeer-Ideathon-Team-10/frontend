import withi from "../../assets/png/withi.png";

export default function NavBar() {
  return (
    <div className="flex items-center w-full h-[70px] bg-[#EAFAFF]">
      <img
        src={withi}
        alt="withi"
        style={{ height: "28px", width: "auto" }}
        className="ml-5"
      />
      <span className="ml-2 font-semibold text-lg text-[#12C6FF]">WITHI</span>
    </div>
  );
}
