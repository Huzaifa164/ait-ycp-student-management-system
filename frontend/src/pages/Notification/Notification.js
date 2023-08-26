import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const Notification = () => {
  const [notification, setNotification] = useState([
    { id: 1, title: "demo", description: "This is test description." },
    { id: 2, title: "demo", description: "This is test description." },
    { id: 3, title: "demo", description: "This is test description." },
    { id: 4, title: "demo", description: "This is test description." },
  ]);

  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Notification</h2>
          <table className="table table-bordered w-75 m-auto">
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

export default Notification;
