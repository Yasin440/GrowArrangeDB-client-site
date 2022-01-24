import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './RegistrationNow.css';
import logo from '../../media/logo2.png';

const RegistrationNow = () => {
    const { isLogin, setIsLogin } = useAuth();
    return (
        <div className='registrationNow'>
            <img src={logo} alt="logo" />
            <div className="content">
                <h1>❤️ Over 77265+ ❤️</h1>
                <h2>Happy User being with us Still thay Love our Panel</h2>
                {
                    isLogin ?
                        <Link to='/register'>
                            <button onClick={() => setIsLogin(false)} className='primaryBtn'>Register</button>
                        </Link>
                        : ''
                }
            </div>
        </div>
    );
};

export default RegistrationNow;