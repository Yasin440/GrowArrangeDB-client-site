import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { Divider } from '@mui/material';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    heignt: "90%",
    backgroundColor: 'background.paper',
    border: '2px solid #362682',
    boxShadow: 5,
    p: 2,
};

const ServiceDetailsModal = ({ openModal, setOpenModal, addServices }) => {
    const handleClose = () => setOpenModal(false);
    const { register, handleSubmit, reset } = useForm();
    const { open, title, details, _id } = openModal || {};
    //add category
    const handleAddCategory = data => {
        fetch('https://agile-coast-57726.herokuapp.com/addCategory', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(event => {
                if (event.insertedId) {
                    toast.success("Category Added Successfully..!", {
                        theme: "colored"
                    });
                    reset();
                    setOpenModal(false);
                }
            })
    }
    return (
        <div>
            <Modal
                open={open || openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {addServices ?
                        <span>
                            <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '3px', right: '3px', fontSize: '15px', color: 'red', fontWeight: '900' }} />
                            <form onSubmit={handleSubmit(handleAddCategory)}>
                                <h3 className="title">Add new category</h3>
                                <div className="mt-2">
                                    <input
                                        style={{ borderRadius: "1rem", paddingLeft: '15px' }}
                                        {...register("category")}
                                        required
                                        placeholder='Add new category'
                                        type="text" />
                                </div>
                                <div className="mt-2" style={{ textItems: 'center' }}>
                                    <button type="submit" className='primaryBtn '>Add category</button>
                                </div>
                            </form>
                        </span>
                        :
                        <>
                            <CloseIcon onClick={handleClose} sx={{ position: 'absolute', top: '3px', right: '3px', fontSize: '18px', color: 'red', fontWeight: 'bold' }} />
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {title}
                                <div>
                                    <Link to={`/dashboard/newOrder/${_id}`}>
                                        <button className='actionBtn'>
                                            <span><AddTaskOutlinedIcon /> <span>Order</span></span>
                                        </button>
                                    </Link>
                                </div>
                            </Typography>
                            <Divider />
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {details}
                            </Typography>
                        </>
                    }
                </Box>
            </Modal>
        </div>
    );
}
export default ServiceDetailsModal;
