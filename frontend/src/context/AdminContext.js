import { createContext, useState } from "react";

const AdminContext = createContext();

export const AdminProvider = ({children}) => {
  const [adminId, setAdminId] = useState("");

  return (
    <AdminContext.Provider value={[adminId, setAdminId]}>
        {children}
    </AdminContext.Provider>
  )
}

export default AdminContext;