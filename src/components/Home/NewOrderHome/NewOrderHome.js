import React, { useState, useEffect } from 'react';
import { Grid, Container } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import '../../Dashboard/NewOrder/NewOrder.css';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';

const NewOrderHome = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const [price, setPrice] = useState();
    const [error, setError] = useState(false);
    const [quantity, setQuantity] = useState(null);
    const [service, setService] = useState({});
    const { title, category, details, average_time, max_order, min_order, rate_par_1k } = service || {};
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
        console.log(data);
        data.email = user.email;
        data.title = title;
        data.category = category;
        data.details = details;
        data.price = price;
        data.currency = 'taka';
        data.status = 'pending';
        if (quantity < service.min_order || quantity > service.max_order) {
            setError(true);
        } else if (!error) {
            const confirm = window.confirm('Sure to Order this services..?')
            if (confirm) {
                fetch('http://localhost:4000/order/addOrder', {
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
                        }
                    })
            }
        } else {
            console.log('sorry')
            console.log(error)
        }
    }
    //get service with id
    useEffect(() => {
        fetch(`http://localhost:4000/dashboard/newOrder/${id}`)
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
                                        <p className='inputErrorInfo'>Order {min_order} between {max_order} is required</p>
                                        :
                                        <p className='inputInfo'>Order between {min_order} to {max_order}</p>
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
                                <input readOnly value={price} type="text" />
                                <p className='inputInfo'>Rate pre 1k={rate_par_1k}</p>
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button className='primaryBtn '>Place Order</button>
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