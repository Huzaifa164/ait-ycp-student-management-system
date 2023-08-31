import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import { Footer } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";

const EditSchedule = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/create-schedule");
  };

  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Edit Schedule</h2>
          <form
            className="form w-50 mx-auto create-schedule-form"
            onSubmit={handleSubmit}
          >
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
              Edit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditSchedule;
