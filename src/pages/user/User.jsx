import React from 'react'
import "./user.scss"
import Login from '../../components/login/Login'

const User = () => {
  return (
    <div className='user'>
        <div className="background">
            <div className='shadow'>
              <Login />
            </div>
        </div>
    </div>
  )
}

export default User