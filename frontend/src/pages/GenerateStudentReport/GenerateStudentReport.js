import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const GenerateStudentReport = () => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate('/edit-student');
  };
  
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Generate Student Report</h2>
          <form className="form w-50 m-auto">
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Generate
            </button>
          </form>
          <div className="student-details mt-5 w-50 mx-auto d-block p-5">
            <h5>PRN: 230343420027</h5>
            <h5>First Name: Huzaifa</h5>
            <h5>Last Name: Ansari</h5>
            <h5>DOB: 05/09/2000</h5>
            <h5>Gender: Male</h5>
            <h5>Email: huzaifa@gmail.com</h5>
            <h5>PRN: 230343420027</h5>
            <h5>Phone No.: 7506115458</h5>
            <h5>Joining Month & Year: 2023-March</h5>
            <h5>PRN: 230343420027</h5>
            <h5>City: Mumbai</h5>
            <h5>10th (% or CGPA): 92</h5>
            <h5>12th (% or CGPA): NA</h5>
            <h5>Diploma (% or CGPA): 77</h5>
            <h5>Graduation (% or CGPA): 8</h5>
            <h5>Post Graduation (% or CGPA): NA</h5>
            <h5>Work Experience: NA</h5>
            <div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  className="btn btn-success mr-3"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button type="button" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerateStudentReport;
