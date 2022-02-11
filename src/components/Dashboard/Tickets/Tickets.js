import React, { useState } from 'react';
import AddTicketModal from './AddTicketModal';
import './Tickets.css';
import TicketsTable from './TicketsTable';

const Tickets = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <div className="addTickets">
                <button onClick={() => setOpen(true)} className='primaryBtn'>Add Tickets</button>
            </div>
            <TicketsTable loading={loading} />
            <AddTicketModal props={{ setOpen, open, setLoading, loading }} />
        </div>
    );
};

export default Tickets;