import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AdminContext from '../../context/AdminContext'

const AdminHeader = () => {
  const [adminId, setAdminId] = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdminId("");
    navigate("/")
  }
  return (
    <div className='admin-header'>
      <h1>Welcome {adminId}</h1>
      <button type="button" class="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  )
}

export default AdminHeader
