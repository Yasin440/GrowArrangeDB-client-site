import React, { useState, useEffect } from 'react';
import './Tickets.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Container } from '@mui/material';
import { toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Grid } from '@mui/material';
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

const ManageTicketsModal = ({ props }) => {
    const { isLoading, setIsLoading } = useAuth();
    const [currentBalance, setCurrentBalance] = useState();
    const [newBalance, setNewBalance] = useState({});
    const [addingBalance, setAddingBalance] = useState();
    const { openManageTicketModal, setOpenManageTicketModal } = props;
    const { ticket } = openManageTicketModal || {};
    const { _id, ticket_id, subject, email, displayName, request, order_message, order_id, amount, money_sender_number, payment_message, payment_type, transaction_id, status } = ticket || {};
    const handleClose = () => setOpenManageTicketModal({ open: false, ticket: openManageTicketModal.ticket });
    //user current balance
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/user/allUsers/${email}`)
            .then(res => res.json())
            .then(data => {
                if (data.balance) {
                    setCurrentBalance(data.balance);
                    return;
                } else {
                    setCurrentBalance(parseFloat(0).toFixed(2));
                }
            });
    }, [email, isLoading])

    const getBalance = e => {
        const balanceData = { ...newBalance };
        setAddingBalance(e.target.value);
        const amount = parseFloat(currentBalance) + parseFloat(e.target.value);
        balanceData[e.target.name] = parseFloat(amount).toFixed(2);
        balanceData.email = email;
        setNewBalance(balanceData);
    }
    const handleAddBalance = e => {
        e.preventDefault();
        if (addingBalance === amount) {
            const confirm = window.confirm('Are you sure to ADD Balance?');
            if (confirm) {
                setIsLoading(true);
                fetch('https://agile-coast-57726.herokuapp.com/clients/update/balance', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newBalance)
                })
                    .then(res => res.json())
                    .then(e => {
                        if (e.modifiedCount > 0) {
                            fetch(`https://agile-coast-57726.herokuapp.com/update/ticket/status/${_id}`, {
                                method: "PUT"
                            })
                                .then(res => res.json())
                                .then(e => {
                                    if (e.modifiedCount > 0 || e.matchedCount > 0) {
                                        toast.success("Balance added successfully.", {
                                            theme: "colored"
                                        });
                                        setIsLoading(false);
                                        handleClose();
                                    }
                                })
                        };
                    })
                return;
            }
        } else {
            toast.error(`Invalid input amount. Amount Will ৳ ${amount}`, {
                theme: "colored"
            });
        }
    }
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openManageTicketModal.open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openManageTicketModal.open}>
                    <Box sx={style}>
                        <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '10px', right: '10px', fontSize: '18px', color: 'red', fontWeight: 'bold' }} />
                        <Container sx={{ marginBottom: '4rem' }}>
                            <h1 className="title titleBar">Manage Tickets...</h1>
                            <div className='ticketDetails'>
                                {subject === 'payment' &&
                                    <Grid container columnSpacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <h3>Tickets information..</h3>
                                            <p>
                                                <span>Subject:</span> {subject}<br />
                                                <hr />
                                                <hr />
                                                <span>Ticket ID:</span> {ticket_id}<br />
                                                <span>User:</span> {displayName}<br />
                                                <span>Email:</span> {email}<br />
                                                <span>Current Balance:</span> &#2547; {currentBalance}<br />
                                                <hr />
                                                <hr />
                                                <span>Payment with:</span> {payment_type}<br />
                                                <span>Sender Number:</span> {money_sender_number}<br />
                                                <span>Transaction ID:</span> {transaction_id}<br />
                                                <span>Add Amount:</span> &#2547; {amount}<br />
                                                <span>Status:</span> <span className={`status ${status}`}>{status}</span><br />
                                                <span>Message:</span> {payment_message}
                                            </p>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <h3>Add Balance..</h3>
                                            <div className="balance">current balance: &#2547;{currentBalance}</div>
                                            {status === "completed" ?
                                                <div style={{ color: 'red' }} className="balance">Balance Already Added.</div>
                                                :
                                                <form onSubmit={handleAddBalance}>
                                                    <div className='mb-2'>
                                                        <span>Add balance</span>
                                                        <input
                                                            onBlur={getBalance}
                                                            name="balance"
                                                            required
                                                            onWheel={(e) => e.target.blur()} />
                                                    </div>
                                                    {isLoading ?
                                                        <button
                                                            type='submit'
                                                            disabled
                                                            className='primaryBtn'>
                                                            <CircularProgress style={{ width: '25px', height: '25px', color: '#fff' }}
                                                                disableShrink />
                                                        </button>
                                                        :
                                                        <button type='submit' className='primaryBtn'>Add</button>
                                                    }

                                                </form>
                                            }

                                        </Grid>
                                    </Grid>

                                }
                                {subject === 'order' &&
                                    <p>
                                        <span>Subject:</span> {subject}<br />
                                        <span>Ticket ID:</span> {ticket_id}<br />
                                        <span>User:</span> {displayName}<br />
                                        <span>Email:</span> {email}<br />
                                        <span>Order ID:</span> {order_id}<br />
                                        <span>Request For:</span> {request}<br />
                                        <span>Status:</span> <span className={`status ${status}`}>{status}</span><br />
                                        <span>Message:</span> {order_message}
                                    </p>
                                }
                            </div>

                        </Container>
                    </Box>
                </Fade>
            </Modal >
        </div >
    );
};
export default ManageTicketsModal;