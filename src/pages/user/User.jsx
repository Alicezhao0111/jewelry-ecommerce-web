import React from 'react'
import "./user.scss"
import Login from '../../components/login/Login'
import { useLocation} from 'react-router-dom';
import Password from '../../components/password/Password';


const User = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className='user'>
        <div className="background">
            <div className='shadow'>
            {pathname === '/user/password' ? <Password /> : <Login /> }
            </div>
        </div>
    </div>
  )
}

export default User