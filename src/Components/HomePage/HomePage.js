import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import AllCars from './AllCars/AllCars';

const HomePage = () => {
    const cars = useSelector(state => state.cars)
    console.log(cars)
    return (
        <div>
            {cars.map(car => (
                <AllCars key={car._id} car={car} />
            ))}

        </div>
    );
};

export default HomePage;