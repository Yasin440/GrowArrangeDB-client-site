import React, { useState, useEffect } from 'react';
import '../../ServicesTable/ServicesTable.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import LinearProgress from '@mui/material/LinearProgress';
import useAuth from '../../../Hooks/useAuth';

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
const MyOrderTable = () => {
    const { user } = useAuth();
    //==get category wise data
    const [orderWithEmail, setOrderWithEmail] = useState();
    useEffect(() => {
        fetch(`http://localhost:4000/order/allOrder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderWithEmail(data);
            })

    }, [user.email])
    return (
        <div>
            <h1 className='title titleBar'>My all orders...%</h1>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 1253 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Service</StyledTableCell>
                            <StyledTableCell align="left">Link</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Charge</StyledTableCell>
                            <StyledTableCell align="left">Start count</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Remains</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {orderWithEmail &&
                        <TableBody className='tableBody'>
                            {orderWithEmail?.map(row => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell align="left">{row.ID}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.service}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#362682' }}>
                                            {row.link}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#362682' }}>
                                            {row.date}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.charge}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.start_count}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.quantity}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.remains}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.status}
                                        </span>
                                    </StyledTableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    }

                </Table>
                {!orderWithEmail &&
                    <LinearProgress sx={{ height: '5px', backgroundColor: 'aqua' }} />
                }
            </TableContainer>
        </div>
    );
};

export default MyOrderTable;