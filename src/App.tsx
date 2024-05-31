import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../src/pages/Home";
import Select from "./pages/SelectPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
