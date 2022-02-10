import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import CircularProgress from '@material-ui/core/CircularProgress';

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

const AddTicketModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [subject, setSubject] = useState('payment');

    const addTicketsPayment = data => {
        console.log(data);
    }
    const addTicketsOrder = data => {
        console.log(data);
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
                                    <span>Subject<spin style={{ color: 'red' }}> *</spin></span>
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
                                    <form className='addTicket' onSubmit={handleSubmit(addTicketsPayment)}>
                                        <div className="mt-2">
                                            <span>Payment Type<spin style={{ color: 'red' }}> *</spin></span>
                                            <select {...register("payment_type")}>
                                                <option value='bkash'>bKash</option>
                                                <option value='nagad'>Nagad</option>
                                                <option value='rocket'>Rocket</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <span>Transaction ID<spin style={{ color: 'red' }}> *</spin></span>
                                            <input {...register("transaction_id")} type="text" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Money Sender Number<spin style={{ color: 'red' }}> *</spin></span>
                                            <input {...register("money_sender_number")} type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Amount<spin style={{ color: 'red' }}> *</spin></span>
                                            <input {...register("amount")} type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>message</span>
                                            <textarea {...register("payment_message")} style={{ height: '150px' }} type='text' />
                                        </div>
                                        <div className="mt-2" style={{ textItems: 'center' }}>
                                            <button className='primaryBtn '>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} /> : "Send"}</button>
                                        </div>
                                    </form>
                                </>
                            }
                            {
                                subject === 'order' &&
                                <>
                                    <form className='addTicket' onSubmit={handleSubmit(addTicketsOrder)}>
                                        <div className="mt-2">
                                            <span>Order ID<spin style={{ color: 'red' }}> *</spin></span>
                                            <input {...register("order_id")} type="number" />
                                        </div>
                                        <div className="mt-2">
                                            <span>Request<spin style={{ color: 'red' }}> *</spin></span>
                                            <select {...register("request")}>
                                                <option value='refill'>Refill</option>
                                                <option value='speed up'>Speed Up</option>
                                                <option value='cancel'>Cancel</option>
                                            </select>
                                        </div>
                                        <div className="mt-2">
                                            <span>message</span>
                                            <textarea {...register("order_message")} style={{ height: '150px' }} type='text' />
                                        </div>
                                        <div className="mt-2" style={{ textItems: 'center' }}>
                                            <button submit className='primaryBtn '>{loading ? <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }} /> : "Send"}</button>
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