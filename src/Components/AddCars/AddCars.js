import { Paper, TextField, Button, Grid, FormControl, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addNewCar } from '../ReduxState/Actions/CarActions';
import './AddCar.css';
const AddCars = () => {
    const [carData, setCarData] = useState({
        title: '',
        model: '',
        details: '',
        featuredImage: ''
    })
    const dispatch = useDispatch();
    let history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewCar(carData));
        history.push('/');

    }
    return (

        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3} className="vehicle-details-single" m={2}>
                    <Typography variant="h4" gutterBottom align="center">Add a New Vehicle </Typography>
                    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal" >
                            <TextField name="title" variant="outlined" label="Brand Name" value={carData.title} onChange={e => setCarData({ ...carData, title: e.target.value })} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField name="model" variant="outlined" label="Model Number" value={carData.model} onChange={e => setCarData({ ...carData, model: e.target.value })} />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField multiline rows={4} name="details" variant="outlined" label="Details" value={carData.details} onChange={e => setCarData({ ...carData, details: e.target.value })} />
                        </FormControl>
                        <div id="upload_button"> <FileBase type='file' multiple={false} value={carData.featuredImage} onDone={({ base64 }) => setCarData({ ...carData, featuredImage: base64 })} /></div>
                        <Button variant="contained" color="primary" size="large" type="submit">Submit</Button>
                    </form>
                </Paper>
            </Grid>
        </Grid >

    );
};

export default AddCars;