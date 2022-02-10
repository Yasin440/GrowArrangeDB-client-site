import React, { useState, useEffect } from 'react';
import './NewOrderHome.css';
import { Grid, Container } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

const NewOrderHome = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [price, setPrice] = useState();
    const [balance, setBalance] = useState(0);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(null);
    const [service, setService] = useState({});
    const navigate = useNavigate();
    const { ID, title, category, details, average_time, max_order, min_order, rate_par_1k } = service || {};
    const { register, handleSubmit, reset } = useForm();

    const handleOnChange = e => {
        const quantity = e.target.value;
        const singlePrice = rate_par_1k / 1000;
        const needToPay = quantity * singlePrice;
        setError(false);
        setPrice(Math.ceil(needToPay));
        setQuantity(quantity)
    }
    //order place add services to DB
    const placeOrder = data => {
        data.ID = ID;
        data.start_count = '';
        data.remains = '';
        data.email = user.email;
        data.displayName = user.displayName;
        data.average_time = average_time;
        data.title = title;
        data.category = category;
        data.date = new Date().toLocaleString();
        data.details = details;
        data.price = price;
        data.currency = 'taka';
        data.status = 'pending';
        data.payment = 'unpaid';
        if (quantity <= service.min_order - 1 || service.max_order - 1 <= quantity) {
            setError(true);
            return;
        } else if (!error) {
            if (balance < price) {
                toast.error('Insufficient Balance..!', {
                    theme: "colored"
                });
                return;
            }
            const confirm = window.confirm('Sure to Order this services..?');
            setLoading(true);
            if (confirm) {
                fetch('https://agile-coast-57726.herokuapp.com/order/addOrder', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(event => {
                        if (event.insertedId) {
                            toast.success('Order placed successfully..!', {
                                theme: "colored"
                            });
                            reset();
                            setLoading(false);
                            navigate('/dashboard/myOrders');
                        }
                    })
            }
        }
    }
    //get service with id
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/dashboard/newOrder/${id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [id]);
    return (
        <div className='newOrder'>
            <Container sx={{ marginBottom: '4rem' }}>
                <Grid container columnSpacing={4}>
                    <Grid item md={8}>
                        <form onSubmit={handleSubmit(placeOrder)} className="newOrderForm">
                            <h1 className="title titleBar">Order New Services...</h1>
                            <div className="mt-2">
                                <span>Category</span>
                                <select id='category'>
                                    <option value={category}>{category}</option>
                                </select>
                            </div>
                            <div className="mt-2">
                                <span>Service</span>
                                <select id='category'>
                                    <option value={title}>{title}</option>
                                </select>
                            </div>
                            <div className="mt-2">
                                <span>Link</span>
                                <input {...register("link")} required type="text" />
                            </div>
                            <div className="mt-2">
                                <span>Quantity</span>
                                <input
                                    {...register("orderQuantity")}
                                    required type="number"
                                    onChange={handleOnChange}
                                />
                                {
                                    error ?
                                        <p className='inputErrorInfo'>Order between{min_order} to {max_order} is required</p>
                                        :
                                        <p className='inputInfo'>Min: {min_order}- Max: {max_order}</p>
                                }
                            </div>
                            <div className="mt-2">
                                <span>
                                    <span>Average Time </span>
                                    <span title='
                                The average time is based on 10 latest completed orders per 1000 quantity.'><InfoIcon sx={{ width: '17px', marginBottom: '-8px' }} />
                                    </span>
                                </span>
                                <input readOnly value={average_time} type="text" />
                            </div>
                            <div className="mt-2">
                                <span>Charge</span>
                                <input readOnly value={`৳ ${price || 0}`} type="text" />
                                <p className='inputInfo'>Rate pre 1k={rate_par_1k}</p>
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                {loading ?
                                    <button disabled className='primaryBtn '><CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} /></button>
                                    :
                                    <button type='submit' className='primaryBtn '>Place Order</button>
                                }
                            </div>
                        </form>
                    </Grid>
                    <Grid className="details" item md={4}>
                        <h4>Description</h4>
                        <p className="content">
                            {details}
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default NewOrderHome;