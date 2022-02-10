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
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast } from 'react-toastify';

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
    return (
        <div>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 1253 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell align="left">ID</StyledTableCell>
                            <StyledTableCell align="left">Data</StyledTableCell>
                            <StyledTableCell align="left">Subject</StyledTableCell>
                            <StyledTableCell align="left">Status</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {/* {serviceWithCategory &&
                        <TableBody className='tableBody'>
                            {serviceWithCategory?.map(row => (
                                <StyledTableRow key={row._id}>
                                    <StyledTableCell align="left">{row.ID}</StyledTableCell>
                                    <StyledTableCell component="th" scope="row">
                                        {row.title}
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#362682' }}>
                                            {row.rate_par_1k}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#362682' }}>
                                            {row.min_order}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">
                                        <span style={{ backgroundColor: '#fb1e1e' }}>
                                            {row.max_order}
                                        </span>
                                    </StyledTableCell>
                                    <StyledTableCell align="left">{row.average_time}</StyledTableCell>
                                    <StyledTableCell sx={{ display: 'flex', alignItems: 'center' }} align="left">
                                        <Link to={`/dashboard/newOrder/${row._id}`}>
                                            <button className='actionBtn'>
                                                Order
                                            </button>
                                        </Link>
                                        <button onClick={() => handleOpen(row.details, row.title, row._id)} className='detailsBtn'>
                                            <DehazeIcon />
                                        </button>
                                        {admin &&
                                            <DeleteIcon className='deleteBtn' onClick={() => handleDeleteService(row._id)} />
                                        }
                                    </StyledTableCell>
                                    <ServiceDetailsModal openModal={openModal} setOpenModal={setOpenModal} />
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    } */}

                </Table>
                {/* {!serviceWithCategory &&
                    <LinearProgress sx={{ height: '5px', backgroundColor: 'aqua' }} />
                } */}
            </TableContainer>
        </div>
    );
};

export default TicketsTable;