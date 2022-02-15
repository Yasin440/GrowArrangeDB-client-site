import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import CircularProgress from '@material-ui/core/CircularProgress';

const EditOrder = () => {
    const [loading, setLoading] = useState(false)
    const { id } = useParams();
    const [dataForEdit, setDataForEdit] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { _id, service_id, order_id, displayName, email, category, orderQuantity, title, start_count, status, date, price, remains, average_time, payment } = dataForEdit;

    const statusOption = [
        { id: '01', status: 'pending' },
        { id: '02', status: 'processing' },
        { id: '03', status: 'canceled' },
        { id: '04', status: 'completed' }
    ];
    const paymentOption = [
        { id: '01', payment: 'paid' },
        { id: '02', payment: 'unpaid' }
    ];
    //get ordered data with id
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/order/getOrder_forEdit/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataForEdit(data);
            })
    }, [id])
    //handle update order
    const updateOrder = data => {
        data._id = _id;
        setLoading(true)
        fetch('https://agile-coast-57726.herokuapp.com/order/getOrder_forEdit/update', {
            method: 'UPDATE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount >= 1)
                    toast.success('Order Edited Successfully..!', {
                        theme: "colored"
                    });
                setLoading(false);
                reset();
            })
    }
    return (
        <div className='editOrder'>
            <div className='title-section'>
                <h1>edit<span>order</span></h1>
                <span className='title-bg'>as admin</span>
            </div>
            <Container sx={{ marginBottom: '4rem' }}>
                <Grid container columnSpacing={4}>
                    <Grid item md={8}>
                        <form onSubmit={handleSubmit(updateOrder)} className="editOrderForm">
                            <h1 className="title titleBar">Edit this order...</h1>
                            <div className="mt-2">
                                <span>User</span>
                                <input readOnly type="text" value={displayName || email} />
                            </div>
                            <div className="mt-2">
                                <span>ID - Title</span>
                                <input readOnly type="text" value={`${order_id} - ${title}`} />
                            </div>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Start Count</span>
                                        <input onWheel={(e) => e.target.blur()} required type="number" {...register("start_count")} />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Remain</span>
                                        <input required onWheel={(e) => e.target.blur()} type="number" {...register("remains")} />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Quantity</span>
                                        <input
                                            readOnly
                                            onWheel={(e) => e.target.blur()}
                                            value={orderQuantity}
                                            type="number" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Status</span>
                                        <select {...register("status")}>
                                            <option value={status}>{status}</option>
                                            {
                                                statusOption.map(option => option.status !== status &&
                                                    <option key={option.id}>{option.status}</option>)
                                            }
                                        </select>
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="mt-2">
                                <span>Status</span>
                                <select {...register("payment")}>
                                    <option value={payment}>{payment}</option>
                                    {
                                        paymentOption.map(option => option.payment !== payment &&
                                            <option key={option.id}>{option.payment}</option>)
                                    }
                                </select>
                            </div>
                            <div className="mt-2">
                                <span>Average Time </span>
                                <input readOnly value={average_time} type="text" />
                            </div>
                            <div className="mt-2">
                                <span>Charge</span>
                                <input readOnly value={`৳ ${price}`} type="text" />
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button type='submit' className='primaryBtn '>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} disableShrink /> : "Update Order"}</button>
                            </div>
                        </form>
                    </Grid>
                    <Grid className="details" item md={4}>
                        <h4>Order Description</h4>
                        <p className="content">
                            👉<span>Service ID:</span> {service_id} <br />
                            👉<span>Order ID:</span> {order_id} <br />
                            👉<span>User:</span> {displayName} <br />
                            👉<span>User Email:</span> {email} <br />
                            👉<span>Category:</span> {category} <br />
                            👉<span>Title:</span> {title} <br />
                            👉<span>Date:</span> {date} <br />
                            👉<span>Start Count:</span> {start_count} <br />
                            👉<span>Order Quantity:</span> {orderQuantity} <br />
                            👉<span>Remains:</span> {remains} <br />
                            👉<span>Price:</span>&#2547;{price}<br />
                            👉<span>Payment:</span><span className={`status ${payment}`}> {payment}</span><br />
                            👉<span>Status:</span ><span className={`status ${status}`}> {status}</span><br />
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default EditOrder;