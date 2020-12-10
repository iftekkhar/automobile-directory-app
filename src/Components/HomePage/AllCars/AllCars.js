import React from 'react';
import { Link } from 'react-router-dom';

const AllCars = ({ car }) => {
    return (
        <Link to={`car/${car._id}`}>
            <div>
                <h1>{car.title}</h1>
                <p>{car.model}</p>
                <img src={car.featuredImage} />
            </div>
        </Link>
    );
};

export default AllCars;