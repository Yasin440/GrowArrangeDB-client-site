import React, { useState, useEffect } from 'react';
import './ServicesTable.css';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DehazeIcon from '@mui/icons-material/Dehaze';
import ServiceDetailsModal from '../../shared/ServiceDetailsModal/ServiceDetailsModal';

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
const ServicesTable = (props) => {
    const { category } = props;
    const [openModal, setOpenModal] = useState(false);
    const handleOpen = (details, title) => {
        setOpenModal({ open: true, details: details, title: title });
    }
    //==get category wise data
    const [serviceWithCategory, setServiceWithCategory] = useState();
    useEffect(() => {
        fetch(`http://localhost:4000/allServices/${category}`)
            .then(res => res.json())
            .then(data => {
                setServiceWithCategory(data);
            })

    }, [category])
    return (
        <div>
            <h1 className='title titleBar'>{category}</h1>
            <TableContainer component={Paper}>
                <Table className='table' sx={{ minWidth: 1253 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell align="left">Service Title</StyledTableCell>
                            <StyledTableCell align="left">Rate per 1000</StyledTableCell>
                            <StyledTableCell align="left">Min order</StyledTableCell>
                            <StyledTableCell align="left">Max order</StyledTableCell>
                            <StyledTableCell align="left">Average time</StyledTableCell>
                            <StyledTableCell align="left">Details</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className='tableBody'>
                        {serviceWithCategory?.map(row => (
                            <StyledTableRow key={row._id}>
                                <StyledTableCell align="left">01</StyledTableCell>
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
                                <StyledTableCell align="left">
                                    <button onClick={() => handleOpen(row.details, row.title)} className='detailsBtn'>
                                        <DehazeIcon />
                                    </button>
                                </StyledTableCell>
                                <ServiceDetailsModal openModal={openModal} setOpenModal={setOpenModal} />
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ServicesTable;