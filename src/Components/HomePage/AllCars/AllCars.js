import { Paper } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './AllCars.css';

const AllCars = ({ car }) => {
    return (
        <Link to={`vehicle/${car._id}`}>
            <Paper elevation={3} className="vehicle-list" m={2}>
                <div className="vehicle-list-img"><img src={car.featuredImage} alt={car.title} width="100%" /></div>
                <div className="vehicle-list-text">
                    <h1>{car.title}</h1>
                    <p>{car.model}</p>
                </div>


            </Paper >
        </Link>
    );
};

export default AllCars;