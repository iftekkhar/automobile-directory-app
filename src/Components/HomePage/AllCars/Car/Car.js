import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const Car = () => {
    const [currentCar, setCurrentCar] = useState({})
    const cars = useSelector(state => state.cars)
    let { id } = useParams();
    useEffect(() => {
        const filteredCar = cars.filter(car => car._id === id);
        setCurrentCar(filteredCar[0]);
    }, [id, cars])
    return (
        <div>
            <h1>{currentCar?.title}</h1>
            <p>{currentCar?.model}</p>
            <p>{currentCar?.details}</p>
            <img src={currentCar?.featuredImage} />
        </div>
    );
};

export default Car;