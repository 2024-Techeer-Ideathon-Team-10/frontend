import React from "react";

interface ProblemBoxProps {
  problem: {
    image: string;
    comment: string;
  };
}

const ProblemBox: React.FC<ProblemBoxProps> = ({ problem }) => {
  return (
    <div className="w-[300px] h-[250px] bg-slate-600 rounded-md p-4 flex flex-col items-center justify-center m-2">
      <img
        src={problem.image}
        alt="Problem"
        className="w-full h-3/4 object-cover mb-2"
      />
      <p className="text-white">{problem.comment}</p>
    </div>
  );
};

export default ProblemBox;
