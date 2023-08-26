import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const Schedule = () => {
  const [schedule, setSchedule] = useState([
    {
      id: 1,
      type: "TH",
      date: "1/2/2023",
      module: "java",
      faculty: "john doe",
      time: "9:00 am to 12:00 pm",
    },
    {
      id: 2,
      type: "TH",
      date: "1/2/2023",
      module: "java",
      faculty: "john doe",
      time: "9:00 am to 12:00 pm",
    },
    {
      id: 3,
      type: "TH",
      date: "1/2/2023",
      module: "java",
      faculty: "john doe",
      time: "9:00 am to 12:00 pm",
    },
    {
      id: 4,
      type: "TH",
      date: "1/2/2023",
      module: "java",
      faculty: "john doe",
      time: "9:00 am to 12:00 pm",
    },
    {
      id: 5,
      type: "TH",
      date: "1/2/2023",
      module: "java",
      faculty: "john doe",
      time: "9:00 am to 12:00 pm",
    },
  ]);
  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="text-center mt-3 mb-5">Schedule</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Module</th>
                <th scope="col">Faculty</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule &&
                schedule.map((element) => (
                  <tr key={element.id}>
                    <td>{element.type}</td>
                    <td>{element.date}</td>
                    <td>{element.module}</td>
                    <td>{element.faculty}</td>
                    <td>{element.time}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
