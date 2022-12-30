import './Homepage.css'
import React, { useState } from 'react';

const Hompage = ({startRentOnClick, startReturnOnClick}) => {

    const setRentOnClick = () => {
        startRentOnClick()
    }
    const setReturnOnClick = () => {
        startReturnOnClick()
    }

    return (
        <div className='HomePage'>
            <div className='Header'></div>
            <div className='Body'>
                <div className='HomepageImg'>to be pic</div>
                <button className='toRent' onClick={setRentOnClick}>租借座位</button>
                <button className='toReturn' onClick={setReturnOnClick}>歸還座位</button>
            </div>
            <div footer className='Footer'></div>
        </div>
    )
}
export default Hompage;