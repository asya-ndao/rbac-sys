import React from 'react'
import { useAuth } from '../contexts/authContext'

const AdminDashboard = () => {
  const {user} = useAuth()
  return (
    <div>
      Admin dashboard {user?.name}
    </div>
  )
}

export default AdminDashboard
