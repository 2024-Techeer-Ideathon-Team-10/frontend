import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import Answer from "./pages/AnswerPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/answer" element={<Answer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
