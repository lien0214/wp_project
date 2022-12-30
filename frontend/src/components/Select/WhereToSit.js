import './WhereToSit.css';
import React from 'react';

const login = 0, wheretosit = 1, selecting = 2;
const ShinGuan = 0, Lishin = 1;
const WhereToSit = ({person, setPerson, setState}) => {
    const LiShinOnClick = () => {
        // console.log("LiShinOnClick")
        setPerson({
            acount: person.account,
            password: person.password,
            wheretosit: Lishin
        });
        setState(selecting);
        // console.log("wheretosit person: " + person)
    }
    const ShinGuanOnClick = () => {
        // console.log("ShinGuanOnClick")
        setPerson({
            acount: person.account,
            password: person.password,
            wheretosit: ShinGuan
        });
        setState(selecting);
    }
    return (
        <div className='WhereToSit'>
            {/* two photo and two button choosing outside or inside to sit */}
            <button className='Lishin' onClick={LiShinOnClick}>裡新</button>
            <button className='ShinGuan' onClick={ShinGuanOnClick}>新館</button>
        </div>
    )
}

export default WhereToSit;