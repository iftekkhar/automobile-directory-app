import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AllCars from './AllCars/AllCars';

const HomePage = () => {
    const cars = useSelector(state => state.cars)
    const [filteredResult, setFilteredResult] = useState([])
    const [search, setSearch] = useState("");
    useEffect(() => {
        setFilteredResult(
            cars.filter(car =>
                car.title.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, cars]);

    return !cars.length ? <CircularProgress /> : (
        <div>
            <input
                type="text"
                placeholder="Search Vehicles"
                onChange={(e) => setSearch(e.target.value)}
            />
            { filteredResult.length ?
                filteredResult.map(car => (
                    <AllCars key={car._id} car={car} />
                ))
                :
                <h2>Nothing Found</h2>
            }

        </div>
    );
};

export default HomePage;