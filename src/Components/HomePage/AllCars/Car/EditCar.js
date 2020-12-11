import { Paper, TextField, Grid, Button, Typography, FormControl } from '@material-ui/core';
import React, { useState } from 'react';
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
    const [editTitle, setEditTitle] = useState('title');
    const handleEditTitle = (e) => setEditTitle(e.target.value);

    const [editDetails, setEditDetails] = useState(details);
    const handleEditDescription = (e) => setEditDetails(e.target.value);

    const [selectedModel, setSelectedModel] = useState(model);
    const handleModelChange = (e) => setSelectedModel(e.target.value);
    const [selectedFeaturedImage, setSelectedFeaturedImage] = useState(model);
    const handleImageChange = (e) => setSelectedFeaturedImage(e.target.value);

    const currentCarData = {
        title: title,
        model: model,
        details: `${details}`,
        featuredImage: `${featuredImage}`,
        _id: _id,
    }
    const [newCarData, setNewCarData] = useState({ ...currentCarData })
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }


    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateCar(_id, newCarData));
        setNewCarData({
            title: '',
            model: '',
            details: '',
            featuredImage: ''
        })
    }
    console.log(title, model, details, featuredImage, _id)
    console.log(currentCarData)
    console.log(newCarData)
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
                            <TextField name="title" variant="outlined" label="Brand Name" Value={editTitle} onChange={handleEditTitle} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField name="model" variant="outlined" label="Model Number" dafaultValue={currentCarData?.model} onChange={e => setNewCarData({ ...newCarData, model: e.target.value })} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField multiline rows={4} name="details" variant="outlined" label="Details" dafaultValue={currentCarData?.details} onChange={e => setNewCarData({ ...newCarData, details: e.target.value })} />
                        </FormControl>
                        <div id="upload_button"> <FileBase type='file' multiple={false} dafaultValue={currentCarData?.featuredImage} onDone={({ base64 }) => setNewCarData({ ...newCarData, featuredImage: base64 })} /></div>
                        <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default EditCar;