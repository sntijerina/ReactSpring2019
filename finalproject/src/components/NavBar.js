import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from '../logo.svg';

const NavBar = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <img src={logo} className="App-logo" alt="logo" />
                <Typography variant="title" color="inherit">
                  Magenic Masters React Final Project 
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}

export default NavBar;