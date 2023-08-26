import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";

const RegisterStudent = () => {
  const handleUpload = (e) => {
    e.preventDefault();
  }

  const handleAdd = (e) => {
    e.preventDefault();
  }

  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center">Register Student</h2>
          <h5 className="text-center mt-3 mb-3">Upload CSV</h5>
          <form className="w-50 m-auto d-flex justify-content-center form" onSubmit={handleUpload}>
            <input type="file" required />
            <button type="submit" className="btn btn-primary">
              Upload
            </button>
          </form>
          <p className="text-center font-weight-bold mt-3">OR</p>
          <h5 className="text-center mt-3 mb-3">Add Details Separately</h5>
          <form className="w-75 m-auto form register-student-form" onSubmit={handleAdd}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
                required
              />
            </div>
            <div className="row form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputDOB">Enter DOB</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputDOB"
                placeholder="Enter DOB"
                required
              />
            </div>
            <div className="form-group">
              <select class="form-control" required>
                <option>Enter Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone number"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputMonth">
                Enter Joining Month and Year
              </label>
              <input
                type="month"
                className="form-control"
                id="exampleInputMonth"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 10th Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 12th Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Diploma Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Graduation Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Post Graduation Percentage or CGPA"
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Work Experience (In years)"
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Add
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterStudent;
