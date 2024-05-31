import React from "react";
import NavBar from "./components/NavBar";
import ProblemBox from "./components/ProblemBox";

interface Problem {
  image: string;
  comment: string;
}

const mockData: Problem[] = [
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 1",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 2",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 3",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 4",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 5",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 6",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 7",
  },
  {
    image: "https://via.placeholder.com/300x200",
    comment: "This is problem 8",
  },
];

const HistoryPage: React.FC = () => {
  return (
    <div>
      <NavBar className="fixed top-0 w-full z-20 h-[51px]" />
      <div className="pt-16 mt-32 flex flex-wrap justify-center">
        {mockData.map((problem, index) => (
          <div key={index} className="flex-basis-1/3 max-w-[33.33%] ">
            <ProblemBox problem={problem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
