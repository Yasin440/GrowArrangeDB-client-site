// import React, { useState, useEffect } from 'react';
// import './NewOrder.css';
// import { Grid } from '@mui/material';
// import InfoIcon from '@mui/icons-material/Info';
// import useAuth from '../../../Hooks/useAuth';
// import { useForm } from "react-hook-form";

// const NewOrder = () => {
//     const { categories } = useAuth();
//     const [order, setOrder] = useState();
//     const [select, setSelect] = useState();
//     // const { title, category, details, average_time, max_order, min_order, rate_par_1k } = service || {};
//     const { register, handleSubmit, reset } = useForm();
//     //handleOnBlur
//     const handleOnChange = (e) => {
//         const field = e.target.name;
//         const value = e.target.value;
//         const orderData = { ...select };
//         orderData[field] = value;
//         setSelect(orderData);
//     }
//     //order place add services to DB
//     const placeOrder = data => {
//         reset();
//     }
//     //==get category wise data
//     const [serviceWithCategory, setServiceWithCategory] = useState();
//     useEffect(() => {
//         fetch(`https://agile-coast-57726.herokuapp.com/allServices/${select?.category}`)
//             .then(res => res.json())
//             .then(data => {
//                 setServiceWithCategory(data);
//             })

//     }, [select?.category])
//     //==get services with title
//     useEffect(() => {
//         fetch(`https://agile-coast-57726.herokuapp.com/allServices/${select?.title}`)
//             .then(res => res.json())
//             .then(data => {
//                 setOrder(data);
//             })

//     }, [select?.title])
//     return (
//         <div className='newOrder'>
//             <Grid container columnSpacing={4}>
//                 <Grid item md={8}>
//                     <form onSubmit={handleSubmit(placeOrder)} className="newOrderForm">
//                         <h1 className="title titleBar">Order New Services...</h1>
//                         <div className="mt-2">
//                             <span>Category</span>
//                             <select onChange={handleOnChange} name="category" id='category'>
//                                 {
//                                     categories?.map(e =>
//                                         <option
//                                             key={e._id}
//                                             value={`${e.category}`}>{e.category}
//                                         </option>)
//                                 }
//                             </select>
//                         </div>
//                         <div className="mt-2">
//                             <span>Service</span>
//                             <select onChange={handleOnChange} name="title" id='category'>
//                                 {
//                                     serviceWithCategory?.map(e =>
//                                         <option key={e._id} value={`${e.title}`}>{e.title}
//                                         </option>

//                                     )
//                                 }
//                             </select>
//                         </div>
//                         <div className="mt-2">
//                             <span>Link</span>
//                             <input {...register("link")} required type="text" />
//                         </div>
//                         <div className="mt-2">
//                             <span>Quantity</span>
//                             <input {...register("quantity")} required type="text" />
//                         </div>
//                         <div className="mt-2">
//                             <span>
//                                 <span>Average Time </span>
//                                 <span title='
//                                 The average time is based on 10 latest completed orders per 1000 quantity.'><InfoIcon sx={{ width: '17px', marginBottom: '-8px' }} />
//                                 </span>
//                             </span>
//                             <input {...register("average_time")} required type="text" />
//                         </div>
//                         <div className="mt-2">
//                             <span>Charge</span>
//                             <input {...register("charge")} readOnly required type="text" />
//                         </div>
//                         <div className="mt-2" style={{ textItems: 'center' }}>
//                             <button className='primaryBtn '>Place Order</button>
//                         </div>
//                     </form>
//                 </Grid>
//                 <Grid className="details" item md={4}>
//                     <h4>Description</h4>
//                     <p className="content">
//                         {setOrder?.details}
//                     </p>
//                 </Grid>
//             </Grid>
//         </div >
//     );
// };

// export default NewOrder;