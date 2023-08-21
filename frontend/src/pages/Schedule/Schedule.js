import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const Schedule = () => {
  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <h1>This is Schedule Page</h1>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
