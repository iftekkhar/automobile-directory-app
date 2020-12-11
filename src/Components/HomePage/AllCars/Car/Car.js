import { Button, Grid, Paper, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteCar } from '../../../ReduxState/Actions/CarActions';
import { useHistory } from "react-router-dom";
import './Car.css';
import EditCar from './EditCar';

const Car = () => {
    const [currentCar, setCurrentCar] = useState({})
    const cars = useSelector(state => state.cars)
    let { id } = useParams();
    useEffect(() => {
        const filteredCar = cars.find(car => car._id === id);
        setCurrentCar(filteredCar);
    }, [id, cars]);

    let history = useHistory();
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteCar(currentCar._id))
        history.push('/');
    }
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper elevation={3} className="vehicle-details-single" m={2}>
                    <div className="vehicle-details-single-img">
                        <img src={currentCar?.featuredImage} alt={currentCar?.title} width="100%" />
                    </div>
                    <div>
                        <Typography variant="h2" gutterBottom align="center"> {currentCar?.title}</Typography>
                        <Typography variant="h5" gutterBottom align="center"> {currentCar?.model}</Typography>
                        <Typography variant="h6" gutterBottom align="center"> {currentCar?.details}</Typography>
                    </div>
                    <div className="vehicle-details-single-button-position">
                        <Button variant="contained" color="secondary" onClick={handleDelete}>Delete</Button>
                        <EditCar title={currentCar?.title} model={currentCar?.model} details={currentCar?.details} featuredImage={currentCar?.featuredImage} _id={currentCar?._id}></EditCar>


                    </div>


                </Paper>
            </Grid>
        </Grid>
    );
};

export default Car;