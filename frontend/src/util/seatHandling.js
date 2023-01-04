import {QryEmpty, SeatReturn, QryPosition} from './ApiFunc'
const ShinGuan = 0, Lishin = 1;
const rent = 0, ret = 1, search = 2;
const seatHandling = (register, people, person, wheretosit) => {
    let seat = [];
    let columnSize, rowSize, size; // size for total count of seats including all kind of seats
    

    if(wheretosit === ShinGuan) {
        [columnSize, rowSize, size] = [20, 5, 96];
    }
    else if(wheretosit === Lishin) {
        [columnSize, rowSize, size] = [8, 5, 40];
    }

    // create seat
    for (let r = 0, id = 1; r < rowSize; r++) {
        let subCol = [];
        for (let c = 0; c < columnSize && id <= size; c++, id++) {
            subCol.push({
                id: id - 1,          
                registered: false,      
                r: r, c: c,
                ifPersonSeat: false
            });
        }
        seat.push(subCol);
    }
    
    // fill registered attribute
    people.map(p => console.log(p));
    people.map(p => {
        let r = parseInt(p.seatID / columnSize)
        let c = p.seatID % columnSize;
        console.log('r: ' + r + ' c: ' + c);
        seat[r][c].registered = true;
        if(register === ret && person.account === p.person.account)
            seat[r][c].ifPersonSeat = true;
        console.log(seat[r][c])
    })
    return { rowSize, columnSize, size, seat };
}
export default seatHandling;