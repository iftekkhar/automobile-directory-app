import { Paper, TextField, Grid, Button, Typography, FormControl } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import FileBase from 'react-file-base64';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { updateCar } from '../../../ReduxState/Actions/CarActions';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};




const EditCar = ({ title, model, details, featuredImage, _id }) => {

    // const currentCarData = {
    //     title: title,
    //     model: model,
    //     details: details,
    //     featuredImage: featuredImage,
    //     _id: _id,
    // }
    const [newCarData, setNewCarData] = useState({});
    const parseNewData = async () => {
        return await setNewCarData({
            title: title,
            model: model,
            details: details,
            featuredImage: featuredImage,
            _id: _id,
        })
    }
    // useEffect(() => {
    //     parseNewData()
    // }, [])
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        parseNewData();
    }

    function closeModal() {
        setIsOpen(false);
    }


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCar(_id, newCarData));
        closeModal();
    }
    return (
        <div>
            <Button variant="contained" color="primary" onClick={openModal}>Edit Post</Button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2>Edit Post</h2>
                <div>
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" >
                            <TextField name="title" variant="outlined" label="Brand Name" value={newCarData.title} onChange={e => setNewCarData({ ...newCarData, title: e.target.value })} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField name="model" variant="outlined" label="Model Number" value={newCarData?.model} onChange={e => setNewCarData({ ...newCarData, model: e.target.value })} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField multiline rows={4} name="details" variant="outlined" label="Details" value={newCarData?.details} onChange={e => setNewCarData({ ...newCarData, details: e.target.value })} />
                        </FormControl>
                        <div id="upload_button"> <FileBase type='file' multiple={false} value={newCarData?.featuredImage} onDone={({ base64 }) => setNewCarData({ ...newCarData, featuredImage: base64 })} /></div>
                        <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default EditCar;