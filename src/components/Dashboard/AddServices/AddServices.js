import { Container, Grid } from '@mui/material';
import './AddServices.css';
import React, { useEffect, useState } from 'react';
import ServiceDetailsModal from '../../../shared/ServiceDetailsModal/ServiceDetailsModal';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const [openModal, setOpenModal] = useState(false);
    const [addServices, setAddServices] = useState(false);
    const [categories, setCategories] = useState();
    const { register, handleSubmit, reset } = useForm();
    const handleOpen = () => {
        setOpenModal(true);
        setAddServices(true);
    }
    //get category
    useEffect(() => {
        fetch('https://agile-coast-57726.herokuapp.com/getCategory')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [openModal])
    //add services to DB
    const addService = data => {
        const confirm = window.confirm('Are you sure to add this services..?')
        if (confirm) {
            fetch('https://agile-coast-57726.herokuapp.com/addServices', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(event => {
                    if (event.insertedId) {
                        toast.success('New service added successfully..!', {
                            theme: "colored"
                        });
                        reset();
                    }
                })
        }
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

                    <Grid md={8} sx={{ margin: 'auto' }}>
                        <form onSubmit={handleSubmit(addService)} className="addServicesForm">
                            <div className='title-section'>
                                <h1>add new<span>service</span></h1>
                                <span className='title-bg'>services</span>
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("ID")}
                                    required
                                    placeholder='Use an unique ID'
                                    type="text" />
                            </div>
                            <div className="mt-2">
                                <input
                                    {...register("title")}
                                    required
                                    placeholder='Services Title'
                                    type="text" />
                            </div>
                            <div className="mt-2">
                                <span style={{ marginLeft: '1rem' }}>Select services category</span>
                                <select
                                    {...register("category")}
                                    id='category'
                                    placeholder='Services Category'>
                                    {
                                        categories?.map(e =>
                                            <option
                                                key={e._id}
                                                value={`${e.category}`}>{e.category}
                                            </option>)
                                    }

                                </select>
                                <span className='addCategory' onClick={handleOpen}>+ New Category.!</span>
                            </div>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input
                                            {...register("rate_par_1k")}
                                            required
                                            placeholder='Rate per 1000*'
                                            type="number" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input
                                            {...register("min_order")}
                                            required
                                            placeholder='Minium order*'
                                            type="number" />
                                    </div>
                                </Grid>
                            </Grid>
                            <Grid container columnSpacing={2}>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input
                                            {...register("max_order")}
                                            required
                                            placeholder='Maximum order*'
                                            type="number" />
                                    </div>
                                </Grid>
                                <Grid item md={6} xs={12}>
                                    <div className="mt-2">
                                        <input
                                            {...register("average_time")}
                                            required
                                            placeholder='Average time*'
                                            type="text" />
                                    </div>
                                </Grid>
                            </Grid>
                            <div className="mt-2">
                                <textarea
                                    required
                                    {...register("details")}
                                    placeholder='Full services Details*(use <br/> for line break)'
                                    type="text" />
                            </div>
                            <div className="mt-2" style={{ textItems: 'center' }}>
                                <button className='primaryBtn' type='submit'>Add service</button>
                            </div>
                        </form>
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default AddServices;