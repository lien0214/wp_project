import './Selecting.css';
import seatHandling from '../../util/seatHandling';
import Cell from './Cell';
import Cover from './Cover';
import React, { useState } from 'react';

const ShinGuan = 0, Lishin = 1;
const Selecting = ({ register, setPerson, person, setState, endOnClick }) => {

    const [cover, setCover] = useState(false);
    const [coverPerson, setCoverPerson] = useState({});
    const [people, setpeople] = useState([]);
    //then get data from backend, maybe list of objects with accounts' information

    const appendPersonOnClick = () => {
        setRegisteredSeat([...people, person]);
    }
    const coverOnclick = (newCoverPerson) => {
        setCover(true);
        setCoverPerson(newCoverPerson);
    }
    const noCoverOnClick = () => {
        setCover(false);
        setCoverPerson({});
    }


    const { rowSize, columnSize, size, seat } = seatHandling(register, people, person);
    /* seat is 2-D list of {
        id: id,
        registered: false,      
        r: r, c: c,
        person: {},
        ifReturn: false
    }*/

    return (
        <div className='Selecting'>
            {cover && <Cover
                coverPerson={coverPerson}
                noCoverOnClick={noCoverOnClick}
            />}
            {person.wheretosit === ShinGuan && (
                <div className='ShinGuan'>
                    {seat.map((row, r) => {
                        <div id={'row' + r.toString()} key={'row' + r.toString()}>
                            {row.map((cell, c) =>
                                <Cell
                                    cellInfo={cell}
                                    coverOnClick={coverOnclick}
                                    key={r + '-' + c}
                                />
                            )}
                        </div>
                    })}
                </div>
            )}
            {person.wheretosit === Lishin && (
                <div className='LiShin'>
                    {seat.map((row, r) => {
                        <div id={'row' + r.toString()} key={'row' + r.toString()}>
                            {row.map((cell, c) =>
                                <Cell
                                    cellInfo={cell}
                                    coverOnClick={coverOnclick}
                                    key={r + '-' + c}
                                />
                            )}
                        </div>
                    })}
                </div>
            )}
            <></>
        </div>
    )

}
export default Selecting;

// const handleRent = async () => {
//     const {
//       data: { message,  },
//     } = await axios.rent('/infor', {
//       account,
//       password,
//       position,
//     });
// }
