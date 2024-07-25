import React from 'react'
import { Route, Routes } from 'react-router-dom'
 
import { AdminGlobalContextProvider } from '../Client/Contexts/AdminGlobalContext'

function ClientRoutes() {
  return (
    <AdminGlobalContextProvider >
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AdminGlobalContextProvider>
  )
}

export default ClientRoutes