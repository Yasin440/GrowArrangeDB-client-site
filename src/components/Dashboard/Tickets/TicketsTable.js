import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DehazeIcon from '@mui/icons-material/Dehaze';
import LinearProgress from '@mui/material/LinearProgress';
import { toast } from 'react-toastify';
// import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import useAuth from '../../../Hooks/useAuth';
import ManageTicketsModal from './ManageTicketsModal';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#4747F3',
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
const TicketsTable = () => {
    const { user, admin, isLoading } = useAuth();
    const [myTickets, setMyTickets] = useState();
    const [openManageTicketModal, setOpenManageTicketModal] = useState(false);
    //handle ticket modal
    const handleTicketModal = (ticket) => {
        setOpenManageTicketModal({ open: true, ticket: ticket });
    }
    //==get all tickets with email.
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/tickets/allTickets/${admin ? 'all' : user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTickets(data);
            })

    }, [admin, user?.email, isLoading])
    //delete tickets
    const handleDelete = (id) => {
        const confirm = window.confirm('Are you sure to DELETE..?');
        if (confirm) {
            fetch(`https://agile-coast-57726.herokuapp.com/allTickets/delete/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        toast.success('Tickets DELETE successfully..!', {
                            theme: "colored"
                        });
                        const remain = myTickets.filter(data => data._id !== id);
                        setMyTickets(remain);
                    }
                })
        }
    }
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 1253 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="left">Ticket ID</StyledTableCell>
                            <StyledTableCell align="left">Data</StyledTableCell>
                            <StyledTableCell align="left">Subject</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                            {admin &&
                                <>
                                    <StyledTableCell align="left">User</StyledTableCell>
                                    <StyledTableCell align="left">Action</StyledTableCell>
                                </>
                            }
                        </TableRow>
                    </TableHead>
                    {myTickets &&
                        <TableBody className='tableBody'>
                            {myTickets?.map(row => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell align="left">{row.ticket_id}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.date}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.subject}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span className={`${row.status} status`}>
                                            {row.status}
                                        </span>
                                    </StyledTableCell>
                                    {
                                        admin &&
                                        <>
                                            <StyledTableCell>{row.displayName}<br />{row.email}</StyledTableCell>
                                            <StyledTableCell align="left">
                                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                                    <button
                                                        onClick={() => { handleTicketModal(row) }}
                                                        className='detailsBtn'>
                                                        <DehazeIcon />
                                                    </button>
                                                    <DeleteIcon
                                                        onClick={() => handleDelete(row._id)}
                                                        className='deleteBtn' /></div>
                                            </StyledTableCell>
                                        </>
                                    }
                                </StyledTableRow>
                            ))
                            }
                            <ManageTicketsModal
                                props={{ openManageTicketModal, setOpenManageTicketModal }} />
                        </TableBody>
                    }

                </Table>
                {!myTickets &&
                    <LinearProgress sx={{ height: '5px', backgroundColor: 'aqua' }} />
                }
            </TableContainer>
        </div>
    );
};

export default TicketsTable;