import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const CreateWallet = () => {
  return (
    <div className='min-h-[90vh] mx-auto justify-center flex'>
       <Outlet />
    </div>
  )
}

export default CreateWallet