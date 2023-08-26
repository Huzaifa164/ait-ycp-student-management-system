import React from 'react'
import AdminHeader from '../../components/AdminHeader/AdminHeader'
import AdminNavBar from '../../components/AdminNavBar/AdminNavBar'
import Footer from '../../components/Footer/Footer'

const CreateSchedule = () => {
  return (
    <div className='dashboard'>
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">Create Schedule</div>
      </div>
      <Footer />
    </div>
  )
}

export default CreateSchedule
