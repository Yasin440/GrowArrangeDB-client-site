import React, { useState, useEffect } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    overflowY: 'auto',
    height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddTicketModal = ({ props }) => {
    const { setOpen, open, setLoading, loading } = props;
    const { user } = useAuth();
    const handleClose = () => setOpen(false);
    const [lastTickets, setLastTickets] = useState([]);
    const [subject, setSubject] = useState('payment');
    const date = new Date().toLocaleString();
    const ticket_id = lastTickets[0]?.ticket_id + 1 || 1;

    useEffect(() => {
        fetch("http://localhost:4000/tickets/lastTickets")
            .then(res => res.json())
            .then(data => setLastTickets(data))
    }, []);
    console.log(ticket_id);

    const initialPayment = {
        subject: 'payment',
        payment_type: 'bkash',
        transaction_id: '',
        amount: '',
        money_sender_number: '',
        payment_message: '',
        date: date,
        status: 'pending',
        user: user.displayName,
        email: user.email
    }
    const initialOrder = {
        subject: 'order',
        order_id: '',
        request: 'refill',
        order_message: '',
        date: date,
        status: 'pending',
        user: user.displayName,
        email: user.email
    }
    const [paymentEsau, setPaymentEsau] = useState(initialPayment);
    const [orderEsau, setOrderEsau] = useState(initialOrder);
    console.log(orderEsau);
    //handleOnBlur
    const onBlurPayment = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const orderData = { ...paymentEsau };
        orderData[field] = value;
        setPaymentEsau(orderData);
    }
    const onBlurOrder = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const orderData = { ...orderEsau };
        orderData[field] = value;
        setOrderEsau(orderData);
    }

    const addTicketsPayment = e => {
        e.preventDefault();
        paymentEsau.ticket_id = ticket_id;
        const confirm = window.confirm('Are you sure to Add Tickets');
        if (confirm) {
            setLoading(true);
            fetch("http://localhost:4000/tickets/addTickets", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentEsau)
            })
                .then(res => res.json())
                .then(event => {
                    if (event.insertedId) {
                        toast.success('Ticket added successfully..!', {
                            theme: "colored"
                        });
                        setLoading(false);
                        setOpen(false);
                    }
                })
        }

        console.log(paymentEsau);
    }
    const addTicketsOrder = e => {
        e.preventDefault();
        orderEsau.ticket_id = ticket_id;
        const confirm = window.confirm('Are you sure to Add Tickets');
        if (confirm) {
            setLoading(true);
            fetch("http://localhost:4000/tickets/addTickets", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderEsau)
            })
                .then(res => res.json())
                .then(event => {
                    if (event.insertedId) {
                        toast.success('Ticket added successfully..!', {
                            theme: "colored"
                        });
                        setLoading(false);
                        setOpen(false);
                    }
                })
            console.log(orderEsau);
        }

    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px', fontSize: '18px', color: 'red', fontWeight: 'bold' }} />
                        <Container sx={{ marginBottom: '4rem' }}>
                            <h1 className="title titleBar">Add Tickets...</h1>
                            <form className="addTicket">
                                <div className="mt-2">
                                    <span>Subject<span style={{ color: 'red' }}> *</span></span>
                                    <select
                                        onChange={e => setSubject(e.target.value)}>
                                        <option value='payment'>Payment</option>
                                        <option value='order'>Order</option>
                                    </select>
                                </div>
                            </form>
                            {
                                subject === 'payment' &&
                                <>
                                    <form
                                        className='addTicket'
                                        onSubmit={addTicketsPayment}>
                                        <div className="mt-2">
                                            <span>Payment Type<span style={{ color: 'red' }}> *</span></span>
                                            <select
                                                onBlur={onBlurPayment}
                                                name="payment_type">
                                                <option value='bkash'>bKash</option>
                                                <option value='nagad'>Nagad</option>
                                                <option value='rocket'>Rocket</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <span>Transaction ID<span style={{ color: 'red' }}> *</span></span>
                                            <input
                                                onBlur={onBlurPayment} name="transaction_id"
                                                type="text" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Money Sender Number<span style={{ color: 'red' }}> *</span></span>
                                            <input
                                                onBlur={onBlurPayment} name="money_sender_number"
                                                type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Amount<span style={{ color: 'red' }}> *</span></span>
                                            <input
                                                onBlur={onBlurPayment}
                                                name="amount"
                                                type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>message</span>
                                            <textarea
                                                onBlur={onBlurPayment} name="payment_message"
                                                style={{ height: '150px' }}
                                                type='text' />
                                        </div>
                                        <div className="mt-2" style={{ textItems: 'center' }}>
                                            {
                                                loading ?
                                                    <button
                                                        disabled
                                                        type='submit'
                                                        className='primaryBtn '>
                                                        <CircularProgress
                                                            style={{ width: '25px', height: '25px', color: '#fff' }} />
                                                    </button>
                                                    :
                                                    <button
                                                        type='submit'
                                                        className='primaryBtn '>
                                                        Send
                                                    </button>
                                            }
                                        </div>
                                    </form>
                                </>
                            }
                            {
                                subject === 'order' &&
                                <>
                                    <form className='addTicket' onSubmit={addTicketsOrder}>
                                        <div className="mt-2">
                                            <span>Order ID<span style={{ color: 'red' }}> *</span></span>
                                            <input
                                                onBlur={onBlurOrder}
                                                name="order_id"
                                                type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Request<span style={{ color: 'red' }}> *</span></span>
                                            <select
                                                onBlur={onBlurOrder}
                                                name="request">
                                                <option value='refill'>Refill</option>
                                                <option value='speed up'>Speed Up</option>
                                                <option value='cancel'>Cancel</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <span>message</span>
                                            <textarea
                                                onBlur={onBlurOrder}
                                                name="order_message"
                                                style={{ height: '150px' }}
                                                type='text' />
                                        </div>
                                        <div className="mt-2" style={{ textItems: 'center' }}>
                                            {
                                                loading ?
                                                    <button
                                                        disabled
                                                        type='submit'
                                                        className='primaryBtn '>
                                                        <CircularProgress
                                                            style={{ width: '25px', height: '25px', color: '#fff' }} />
                                                    </button>
                                                    :
                                                    <button
                                                        type='submit'
                                                        className='primaryBtn '>
                                                        Send
                                                    </button>
                                            }
                                        </div>
                                    </form>
                                </>
                            }

                        </Container>
                    </Box>
                </Fade>
            </Modal >
        </div >
    );
};
export default AddTicketModal;