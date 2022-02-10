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
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

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
const ManageOrderTable = (props) => {
    const [allOrderWithCategory, setAllOrderWithCategory] = useState();
    const { category } = props;

    //==get all order with category wise.
    useEffect(() => {
        fetch(`https://agile-coast-57726.herokuapp.com/order/allOrder/${category}`)
            .then(res => res.json())
            .then(data => {
                setAllOrderWithCategory(data);
            })

    }, [category])
    return (
        <div>
            {
                !allOrderWithCategory?.length <= 0 && <>
                    <h1 className='title titleBar'>{category ? `${category}` : 'My all orders...%'}</h1>
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
                                    <StyledTableCell align="left">Edit</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            {/* show all category wise data */}
                            {allOrderWithCategory &&
                                <TableBody className='tableBody'>
                                    {allOrderWithCategory?.map(row => (
                                        <StyledTableRow key={row._id}>
                                            <StyledTableCell align="left">{row.ID}</StyledTableCell>
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
                                                {row.price}
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
                                            <StyledTableCell align="left">
                                                <Link to={`/dashboard/manageOrder/edit/${row._id}`}>
                                                    <button className='detailsBtn'>
                                                        <DehazeIcon />
                                                    </button>
                                                </Link>
                                            </StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            }

                        </Table>
                        {!allOrderWithCategory &&
                            <LinearProgress sx={{ height: '5px', backgroundColor: 'aqua' }} />
                        }
                    </TableContainer>
                </>
            }
        </div>
    );
};

export default ManageOrderTable;