import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminHeader = () => {
  return (
    <div className='admin-header'>
      <h1>Welcome Admin</h1>
      <NavLink to="/" type="button" class="btn btn-primary">
        Logout
      </NavLink>
    </div>
  )
}

export default AdminHeader
