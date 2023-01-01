import './Homepage.css'
import Button from '@material-ui/core/Button';
import React, { useState } from 'react';

const Hompage = ({startRentOnClick, startReturnOnClick, startSearchOnClick}) => {

    const setRentOnClick = () => {
        startRentOnClick()
    }
    const setReturnOnClick = () => {
        startReturnOnClick()
    }
    const SearchOnClick = () => {
        startSearchOnClick()
    }

    return (
        <div className='HomePage'>
            <div className='Header'></div>
            <div className='Body'>
                <div className='HomepageImg'>to be pic</div>
                <div className='toRent'>
                    <Button color="primary" style={{fontSize: '25px', color: 'white'}} variant="contained" onClick={setRentOnClick}>租借座位</Button>
                </div>
                <div className='toReturn'>
                    <Button color="secondary" style={{fontSize: '25px', color: 'white'}} variant="contained" onClick={setReturnOnClick}>歸還座位</Button>
                </div>
                <div className='toSearch'>
                    <Button style={{fontSize: '25px', color: 'white'}} onClick={SearchOnClick}>查詢座位</Button>
                </div>
            </div>
            <div footer className='Footer'></div>
        </div>
    )
}
export default Hompage;