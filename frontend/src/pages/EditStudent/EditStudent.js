import React from 'react'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar'
import Footer from '../../components/Footer/Footer'
import { useNavigate } from 'react-router-dom'

const EditStudent = () => {
    const navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
        navigate('/generate-student-report');
    }
  return (
    <div className='dashboard'>
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
            <h2 className='mt-3 text-center mb-5'>Edit Student</h2>
            <form
            className="w-75 mx-auto form register-student-form my-5"
            onSubmit={handleEdit}
          >
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
              />
            </div>
            <div className="row form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
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
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone number"
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
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
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
              Edit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default EditStudent
