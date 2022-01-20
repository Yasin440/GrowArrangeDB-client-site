import React from 'react';
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

function createData(id, name, calories, fat, carbs, protein) {
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData(1, 'Instagram HQ Followers | NonDrop | Max 1M |⚡Speed: +20K/D | Start: Instant |♻️90 Days Refill', 159, 6.0, 24, 4.0),
    createData(2, 'Facebook Post Likes | Low Drop | Max 100K |⚡Speed: +500/D | Start: 0-1 Hours |❌No Refill', 237, 9.0, 37, 4.3),
    createData(3, 'Eclair', 262, 16.0, 24, 6.0),
    createData(4, 'Cupcake', 305, 3.7, 67, 4.3),
    createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
];
const ServicesTable = () => {
    return (
        <div>
            <h1 className='title titleBar'>🙆‍♂️ Suicide Services - Cheap</h1>
            <TableContainer sx={{ width: '96%', margin: 'auto' }} component={Paper}>
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
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell align="left">{row.id}</StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <span style={{ backgroundColor: '#362682' }}>
                                        {row.calories}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <span style={{ backgroundColor: '#362682' }}>
                                        {row.fat}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <span style={{ backgroundColor: '#fb1e1e' }}>
                                        {row.carbs}
                                    </span>
                                </StyledTableCell>
                                <StyledTableCell align="left">{row.protein}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <button className='detailsBtn'>
                                        <DehazeIcon />
                                    </button>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ServicesTable;