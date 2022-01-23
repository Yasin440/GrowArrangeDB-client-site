import { Container, Grid } from '@mui/material';
import './AddServices.css';
import React from 'react';
import ServiceDetailsModal from '../../../shared/ServiceDetailsModal/ServiceDetailsModal';

const AddServices = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const [addServices, setAddServices] = React.useState(false);
    const handleOpen = () => {
        setOpenModal(true);
        setAddServices(true);
    }
    return (
        <div>
            <div className="addService">
                <Container>
                    {/* service category added modal */}
                    <ServiceDetailsModal
                        openModal={openModal}
                        setOpenModal={setOpenModal}
                        addServices={addServices}
                    />

                    <Grid md={6} sx={{ margin: 'auto' }}>
                        <form action="" className="addServicesForm">
                            <h1 className="title titleBar">Add New Services...</h1>
                            <div className="mt-2">
                                <input name="title" required placeholder='Services Title' type="text" />
                            </div>
                            <div className="mt-2">
                                <span style={{ marginLeft: '1rem' }}>Select services category</span>
                                <select name="category" id='category' placeholder='Services Category'>
                                    <option value="facebook">Facebook Like</option>
                                    <option value="facebook">Instagram follows</option>
                                    <option value="facebook">Web site Like</option>
                                    <option value="facebook">Twitter twits</option>
                                    <option value="facebook">LinkedIn connect</option>
                                </select>
                                <span className='addCategory' onClick={handleOpen}>+ New Category.!</span>
                            </div>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input name="rate_par_1k" required placeholder='Rate per 1000*' type="number" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input name="min_order" required placeholder='Minium order*' type="number" />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input name="max_order" required placeholder='Maximum order*' type="number" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input name="average_time" required placeholder='Average time*' type="text" />
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="mt-2">
                                <textarea required placeholder='Full services Details*(use <br/> for line break)' type="text" />
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button className='primaryBtn '>Add service</button>
                            </div>
                        </form>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AddServices;