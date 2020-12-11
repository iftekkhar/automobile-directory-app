import { CircularProgress, Grid, TextField, FormControl, Typography } from '@material-ui/core';
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
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <FormControl fullWidth >
                    <TextField id="outlined-basic" type="text" label="Search Vehicles by Brand Name" variant="outlined" onChange={(e) => setSearch(e.target.value)} />
                </FormControl >
                {(filteredResult.length && search.length) ?
                    filteredResult.map(car => (
                        <AllCars key={car._id} car={car} />
                    ))
                    :
                    <>
                        {
                            !search.length ? <Typography variant="h4" gutterBottom align="center"> Please Search Somthing</Typography> : <Typography variant="h4" gutterBottom align="center"> Nothing Is Found</Typography>
                        }
                    </>
                }

            </Grid>
        </Grid>
    );
};

export default HomePage;