import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

const PushNotification = () => {
  const [notification, setNotification] = useState([
    { id: 1, title: "demo", description: "This is test description." },
    { id: 2, title: "demo", description: "This is test description." },
    { id: 3, title: "demo", description: "This is test description." },
    { id: 4, title: "demo", description: "This is test description." },
  ]);
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Push Notification</h2>
          <form className="form w-50 mx-auto push-notification-form">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter Description"
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Post
            </button>
          </form>
          <table className="table table-bordered w-75 mx-auto mt-5">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {notification &&
                notification.map((element) => (
                  <tr key={element.id}>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td><button type="button" class="btn btn-success">Edit</button></td>
                    <td><button type="button" class="btn btn-danger">Delete</button></td>
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

export default PushNotification;
