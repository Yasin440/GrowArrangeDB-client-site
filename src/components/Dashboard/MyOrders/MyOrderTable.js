import React, { useState, useEffect } from 'react';
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
    const [orderWithEmail, setOrderWithEmail] = useState();
    const { user } = useAuth();

    //==get order with user email wise data
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/order/myOrder/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderWithEmail(data);
            })

    }, [user.email])
    return (
        <div>
            <h1 className='title titleBar'>Orders</h1>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 1250 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Date</StyledTableCell>
                            <StyledTableCell align="left">Link</StyledTableCell>
                            <StyledTableCell align="left">Service</StyledTableCell>
                            <StyledTableCell align="left">Charge</StyledTableCell>
                            <StyledTableCell align="left">Start count</StyledTableCell>
                            <StyledTableCell align="left">Quantity</StyledTableCell>
                            <StyledTableCell align="left">Remains</StyledTableCell>
                            <StyledTableCell align="left">Payment</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {orderWithEmail &&
                        <TableBody className='tableBody'>
                            {orderWithEmail?.map(row => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell align="left">{row.order_id}</StyledTableCell>
                                    <StyledTableCell>
                                        {row.date}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <a target='_blank' rel='noreferrer' title={row.link} href={row.link}>🔗Link</a>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        &#2547; {row.price}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.start_count}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.orderQuantity}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        {row.remains}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span className={`${row.payment} status`}>
                                            {row.payment}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span className={`${row.status} status`}>
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