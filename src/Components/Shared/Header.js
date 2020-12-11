import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <AppBar position="static" className="appbar-section">

            <Toolbar className="appbar">
                <Typography variant="h6" className="">
                    <NavLink to="/">Automotive Directory</NavLink>
                </Typography>
                <div className="nav">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add-car">Add New Vehicle</NavLink>
                </div>
            </Toolbar>

        </AppBar>
    );
};

export default Header;