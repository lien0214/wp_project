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
            <button className='toRent' onClick={setRentOnClick}>租借座位</button>
            <button className='toReturn' onClick={setReturnOnClick}>歸還座位</button>
            {/* 
                todo: start rent or return on click
                todo: further outfit
            */}
        </div>
    )
}
export default Hompage;