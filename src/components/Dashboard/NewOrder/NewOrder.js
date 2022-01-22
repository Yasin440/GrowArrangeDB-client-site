import React from 'react';
import './NewOrder.css';
import { Grid } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const NewOrder = () => {
    return (
        <div className='newOrder'>
            <Grid container columnSpacing={4}>
                <Grid item md={8}>
                    <form action="" className="newOrderForm">
                        <h1 className="title titleBar">Order New Services...</h1>
                        <div className="mt-2">
                            <span>Category</span>
                            <select name="category" id='category'>
                                <option value="facebook">Facebook Like</option>
                                <option value="facebook">Instagram follows</option>
                                <option value="facebook">Web site Like</option>
                                <option value="facebook">Twitter twits</option>
                                <option value="facebook">LinkedIn connect</option>
                            </select>
                        </div>
                        <div className="mt-2">
                            <span>Service</span>
                            <select name="category" id='category'>
                                <option value="facebook">Facebook Like</option>
                                <option value="facebook">Instagram follows</option>
                                <option value="facebook">Web site Like</option>
                                <option value="facebook">Twitter twits</option>
                                <option value="facebook">LinkedIn connect</option>
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