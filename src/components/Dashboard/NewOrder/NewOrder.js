import React, { useState, useEffect } from 'react';
import './NewOrder.css';
import { Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import useAuth from '../../../Hooks/useAuth';
import { useParams } from 'react-router-dom';

const NewOrder = () => {
    const { _id } = useParams();
    const { categories } = useAuth();
    const [service, setService] = useState();
    const { title, category, details, average_time, max_order, min_order, rate_par_1k } = service || {};
    console.log(title);
    useEffect(() => {
        fetch(`http://localhost:4000/dashboard/newOrder/${_id}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [_id]);
    //==get category wise data
    const [serviceWithCategory, setServiceWithCategory] = useState();
    console.log(serviceWithCategory);
    useEffect(() => {
        fetch(`http://localhost:4000/allServices/${category}`)
            .then(res => res.json())
            .then(data => {
                setServiceWithCategory(data);
            })

    }, [category])
    return (
        <div className='newOrder'>
            <Grid container columnSpacing={4}>
                <Grid item md={8}>
                    <form action="" className="newOrderForm">
                        <h1 className="title titleBar">Order New Services...</h1>
                        <div className="mt-2">
                            <span>Category</span>
                            <select name="category" id='category'>
                                {service && <option value={category}>{category}</option>}
                                {service &&
                                    categories?.map(e => e.category !== category &&
                                        <option key={e._id} value={`${e.category}`}>{e.category}
                                        </option>

                                    )
                                }
                                {!service &&
                                    categories?.map(e =>
                                        <option
                                            key={e._id}
                                            value={`${e.category}`}>{e.category}
                                        </option>)
                                }
                            </select>
                        </div>
                        <div className="mt-2">
                            <span>Service</span>
                            <select name="category" id='category'>
                                {service && <option value={title}>{title}</option>}
                                {service &&
                                    serviceWithCategory?.map(e => e.title !== title &&
                                        <option key={e._id} value={`${e.title}`}>{e.title}
                                        </option>

                                    )
                                }
                                {!service &&
                                    categories?.map(e =>
                                        <option
                                            key={e._id}
                                            value={`${e._id}`}>{e.category}
                                        </option>)
                                }
                            </select>
                        </div>
                        <div className="mt-2">
                            <span>Link</span>
                            <input name="title" required type="text" />
                        </div>
                        <div className="mt-2">
                            <span>Quantity</span>
                            <input name="title" required type="text" />
                        </div>
                        <div className="mt-2">
                            <span>
                                <span>Average Time </span>
                                <span title='
                                The average time is based on 10 latest completed orders per 1000 quantity.'><InfoIcon sx={{ width: '17px', marginBottom: '-8px' }} />
                                </span>
                            </span>
                            <input name="title" required type="text" />
                        </div>
                        <div className="mt-2">
                            <span>Charge</span>
                            <input name="title" required type="text" />
                        </div>
                        <div className="mt-2" style={{ textItems: 'center' }}>
                            <button className='primaryBtn '>Place Order</button>
                        </div>
                    </form>
                </Grid>
                <Grid className="details" item md={4}>
                    <h4>Description</h4>
                    <p className="content">
                        Service Description | Read Before Order!<br /><br />
                        Average Start Time : Instant<br />
                        Average Speed : +5K/D<br />
                        Quality: Real High<br />
                        Drops : Non/ Very Less Drops<br />
                        Refill : Lifetime Refill<br />
                        SpeedUp : Possible ( in 24 hours)<br />
                        Cancel/Partial : Possible ( in 24 hours)<br /><br />

                        *If it drops more than average drop ratio which is mentioned, refill will be done only if there is refill option, if it's no refill service, we can't do refill when drops over the average drop ratio.
                        <br /><br />

                        *If there is duplicate orders on same link before the first one complete , we may not be able to refund! Please take care when you order.<br /><br />

                        *The information which is given above is average. It may be higher or lower in any case.
                    </p>
                </Grid>
            </Grid>
        </div >
    );
};

export default NewOrder;