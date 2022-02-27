import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './RegistrationNow.css';

const RegistrationNow = () => {
    const { user, setIsLogin, clients } = useAuth();
    return (
        <div className='registrationNow'>
            <img src='https://i.ibb.co/jWXcjSt/logo2.png' alt="logo" />
            <div className="content">
                <h1>Users Over {450 + parseFloat(`${clients?.length}`)}+</h1>
                <h2>Happy User being with us Still they Love our Panel</h2>
                {user.email ? '' :
                    <Link to='/register'>
                        <button onClick={() => setIsLogin(false)} className='primaryBtn'>Register</button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default RegistrationNow;