import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const CreateSchedule = () => {
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
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit-schedule');
  };
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Create Schedule</h2>
          <form className="form w-50 mx-auto create-schedule-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Course Name"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Faculty Name"
              />
            </div>
            <div className="form-group">
              <select className="form-control">
                <option>select Lecture Type</option>
                <option>Theory</option>
                <option>Lab</option>
              </select>
            </div>
            <div className="form-group">
              <label for="date">Enter Date</label>
              <input
                type="date"
                id="date"
                className="form-control"
                placeholder="Enter Date"
              />
            </div>
            <div className="form-group">
              <label for="starttime">Enter Start Time</label>
              <input
                type="time"
                id="starttime"
                className="form-control"
                placeholder="Enter time"
              />
            </div>
            <div className="form-group">
              <label for="endtime">Enter End Time</label>
              <input
                type="time"
                id="endtime"
                className="form-control"
                placeholder="Enter time"
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Add
            </button>
          </form>
          <table className="table table-bordered mt-5">
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
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="button" class="btn btn-danger">
                        Delete
                      </button>
                    </td>
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

export default CreateSchedule;
