import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import './NotFound.css';

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <div className="notFound py-5">
                <div className="errorImg">
                    <img width="25%" src="https://i.ibb.co/bXsLfzB/error.gif" alt="img" />
                </div>
                <div className='button'>
                    <h1>--ERROR--</h1>
                    <h2>Nothing to found</h2>
                    <button className='primaryBtn' onClick={() => navigate(-1)}>Go back</button>
                </div>
            </div>
            <Footer />
        </div>

    );
};

export default NotFound;