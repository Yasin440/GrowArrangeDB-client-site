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
    const { _id, displayName, email, ID, category, orderQuantity, title, start_count, status, date, price, remains, average_time, currency } = dataForEdit;
    console.log(dataForEdit);

    const statusOption = [{ id: '01', status: 'pending' }, { id: '02', status: 'processing' }, { id: '03', status: 'canceled' }, { id: '04', status: 'completed' }];
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
            method: 'PUT',
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
            <Container sx={{ marginBottom: '4rem' }}>
                <Grid container columnSpacing={4}>
                    <Grid item md={8}>
                        <form onSubmit={handleSubmit(updateOrder)} className="editOrderForm">
                            <h1 className="title titleBar">Order New Services...</h1>
                            <div className="mt-2">
                                <span>User</span>
                                <input readOnly type="text" value={displayName || email} />
                            </div>
                            <div className="mt-2">
                                <span>ID - Title</span>
                                <input readOnly type="text" value={`${ID} - ${title}`} />
                            </div>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Start Count</span>
                                        <input required type="number" {...register("start_count")} />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Remain</span>
                                        <input required type="number" {...register("remains")} />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <span>Quantity</span>
                                        <input readOnly value={orderQuantity} type="number" />
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
                                <span>Average Time </span>
                                <input readOnly value={average_time} type="text" />
                            </div>
                            <div className="mt-2">
                                <span>Charge</span>
                                <input readOnly value={`${price} ${currency}`} type="text" />
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button type='submit' className='primaryBtn '>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} disableShrink /> : "Update Order"}</button>
                            </div>
                        </form>
                    </Grid>
                    <Grid className="details" item md={4}>
                        <h4>Order Description</h4>
                        <p className="content">
                            👉<span>Service ID:</span> {ID} <br />
                            👉<span>User:</span> {displayName} <br />
                            👉<span>Category:</span> {category} <br />
                            👉<span>Title:</span> {title} <br />
                            👉<span>Date:</span> {date} <br />
                            👉<span>Start Count:</span> {start_count} <br />
                            👉<span>Order Quantity:</span> {orderQuantity} <br />
                            👉<span>Remains:</span> {remains} <br />
                            👉<span>Price:</span> {price} taka <br />
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default EditOrder;