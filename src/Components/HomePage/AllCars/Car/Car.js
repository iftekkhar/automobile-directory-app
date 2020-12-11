import { Button } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { deleteCar } from '../../../ReduxState/Actions/CarActions';
import { useHistory } from "react-router-dom";

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
        <div>
            <h1>{currentCar?.title}</h1>
            <p>{currentCar?.model}</p>
            <p>{currentCar?.details}</p>
            <img src={currentCar?.featuredImage} alt={currentCar?.title} />
            <Button>Edit</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </div>
    );
};

export default Car;