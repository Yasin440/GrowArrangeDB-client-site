import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import CircularProgress from '@material-ui/core/CircularProgress';
import useAuth from '../../../Hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const EditOrder = () => {
    const { isLoading, setIsLoading, updatedBalance } = useAuth();
    const { id } = useParams();
    const [currentOrdererBalance, setCurrentOrdererBalance] = useState();
    const [dataForEdit, setDataForEdit] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { _id, service_id, order_id, displayName, email, category, orderQuantity, title, start_count, status, date, price, remains, average_time, payment } = dataForEdit;
    const navigate = useNavigate();

    const statusOption = [
        { id: '01', status: 'pending' },
        { id: '02', status: 'processing' },
        { id: '03', status: 'canceled' },
        { id: '04', status: 'completed' }
    ];
    //user current balance who order this
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/user/allUsers/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.balance) {
                    setCurrentOrdererBalance(data.balance);
                    return;
                } else {
                    setCurrentOrdererBalance(parseFloat(0).toFixed(2));
                }
            });
    }, [email]);
    //get ordered data with id
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/order/getOrder_forEdit/${id}`)
            .then(res => res.json())
            .then(data => {
                setDataForEdit(data);
            })
    }, [id, isLoading]);
    //handle update order
    const updateOrder = data => {
        data._id = _id;
        const confirm = window.confirm(`Are you sure to ${data.status === "canceled" ? 'Cancel & Refund' : `${data.status}`} this order.!`);
        if (confirm) {
            setIsLoading(true);
            //if cancel then refund.
            if (data.status === "canceled") {

                data.payment = 'refund';
                //refund balance
                const beforeRefund = parseFloat(currentOrdererBalance) + parseFloat(price);
                const newBalance = parseFloat(beforeRefund).toFixed(2);
                updatedBalance(newBalance, email);
                console.log(data);
            };
            //update order info
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
                        toast.success(`Order Edited ${data.status === "canceled" && "& Refound"} Successfully..!`, {
                            theme: "colored"
                        });

                    navigate('/dashboard/manageOrder');
                    reset();
                    setIsLoading(false);
                })
        }
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
                                <input readOnly type="text" value={`${order_id} - ${title} `} />
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
                                <span>Average Time </span>
                                <input readOnly value={average_time} type="text" />
                            </div>
                            {
                                status === "canceled" ?
                                    <div className="mt-2" style={{ textItems: 'center' }}>
                                        <button disabled className='primaryBtn disabledBtn'>Already Canceled Order</button>
                                    </div>
                                    :
                                    <div className="mt-2" style={{ textItems: 'center' }}>
                                        <button type='submit' className='primaryBtn '>{isLoading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} disableShrink /> : "Update Order"}</button>
                                    </div>
                            }
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
                            👉<span>Charge:</span> &#2547; {price}<br />
                            👉<span>Payment:</span><span className={`status ${payment} `}> {payment}</span><br />
                            👉<span>Status:</span ><span className={`status ${status} `}> {status}</span><br />
                        </p>
                    </Grid>
                </Grid>
            </Container>
        </div >
    );
};

export default EditOrder;