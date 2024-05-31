import React from "react";
import NavBar from "./components/NavBar";
import ProblemBox from "./components/ProblemBox";
import problem1 from "./../assets/svg/problem/문제1.png";
import problem2 from "./../assets/svg/problem/문제2.png";
import problem3 from "./../assets/svg/problem/문제3.png";
import problem4 from "./../assets/svg/problem/문제4.png";
import problem5 from "./../assets/svg/problem/문제5.png";
import problem6 from "./../assets/svg/problem/문제6.png";
import problem7 from "./../assets/svg/problem/문제7.png";
import problem8 from "./../assets/svg/problem/문제8.png";

interface Problem {
  image: string;
  comment: string;
}

const mockData: Problem[] = [
  {
    image: problem1,
    comment: "This is problem 1",
  },
  {
    image: problem2,
    comment: "This is problem 2",
  },
  {
    image: problem3,
    comment: "This is problem 3",
  },
  {
    image: problem4,
    comment: "This is problem 4",
  },
  {
    image: problem5,
    comment: "This is problem 5",
  },
  {
    image: problem6,
    comment: "This is problem 6",
  },
  {
    image: problem7,
    comment: "This is problem 7",
  },
  {
    image: problem8,
    comment: "This is problem 8",
  },
];

const HistoryPage: React.FC = () => {
  return (
    <div>
      <NavBar className="fixed top-0 w-full z-20 h-[51px]" />
      <div className="pt-16 mt-24 flex flex-wrap justify-center">
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
