import React from 'react'
import {Outlet} from 'react-router-dom'

function AuthPage() {
  return (
    <>
      <div>AuthPage</div>
      <Outlet />
    </>
  
  )
}

export default AuthPage