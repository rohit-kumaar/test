import React from "react";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Router>
        <div className="mt-5">
          <Routes>
            <Route path="/" element={<AddEmployee />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
