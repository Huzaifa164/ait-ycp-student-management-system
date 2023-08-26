import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { DatePicker } from "antd";

const GenerateAttendenceReport = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Generate Attendence Report</h2>
          <form className="form w-50 m-auto">
            <RangePicker />
            <button type="submit" className="btn btn-primary mt-3">
              Generate
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerateAttendenceReport;
