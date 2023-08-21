import React from "react";
import { Link, NavLink } from "react-router-dom";

const StudentsHeader = () => {
  return (
    <div className="student-header">
      <h1>Welcome YCP</h1>
      <NavLink to="/" type="button" class="btn btn-primary">
        Logout
      </NavLink>
    </div>
  );
};

export default StudentsHeader;
