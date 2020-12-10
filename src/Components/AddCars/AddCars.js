import { Paper, TextField, Button } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { addNewCar } from '../ReduxState/Actions/CarActions';
const AddCars = () => {
    const [carData, setCarData] = useState({
        title: '',
        model: '',
        details: '',
        featuredImage: ''
    })
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCar(carData));
        setCarData({
            title: '',
            model: '',
            details: '',
            featuredImage: ''
        })
    }
    return (
        <Paper>
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <TextField name="title" variant="outlined" label="Brand Name" value={carData.title} onChange={e => setCarData({ ...carData, title: e.target.value })} />
                <TextField name="model" variant="outlined" label="Model Number" value={carData.model} onChange={e => setCarData({ ...carData, model: e.target.value })} />
                <TextField name="details" variant="outlined" label="Details" value={carData.details} onChange={e => setCarData({ ...carData, details: e.target.value })} />
                <div> <FileBase type='file' multiple={false} value={carData.details} onDone={({ base64 }) => setCarData({ ...carData, featuredImage: base64 })} /></div>
                <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
            </form>
        </Paper>

    );
};

export default AddCars;