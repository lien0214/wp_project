import {QryEmpty, SeatReturn, QryPosition} from './ApiFunc'
const ShinGuan = 0, Lishin = 1;
const rent = 0, ret = 1, search = 2;
const seatHandling = (register, person) => {
    let seat = [];
    let columnSize, rowSize, size; // size for total count of seats including all kind of seats
    if(person.wheretosit === ShinGuan) {
        [columnSize, rowSize, size] = [20, 5, 96];
    }
    else if(person.wheretosit === Lishin) {
        [columnSize, rowSize, size] = [8, 5, 40];
    }
    // create seat
    for (let r = 0, id = 1; r < rowSize; r++) {
        let subCol = [];
        for (let c = 0; c < columnSize && id <= size; c++, id++) {
            subCol.push({
                id: id,          
                registered: false,      
                r: r, c: c,
                person: {},
                ifReturn: false
            });
        }
        seat.push(subCol);
    }
    
    // fill registered attribute
    for(let r = 0, id = 1; r < rowSize; r++) {
        for(let c = 0; c < columnSize && id <= size; c++, id++) {
            if(!QryEmpty(person.wheretosit, id)) {
                seat[r][c].registered = true;
            }
        }
    }
    // people.forEach(p => {
    //     for(let r = 0, id = 1; r < rowSize; r++) {
    //         for(let c = 0; c < columnSize && id <= size; c++, id++) {
    //             if(p.seatID === seat[r][c].id) {
    //                 seat[r][c].registered = true;
    //                 seat[r][c].person = p;
    //             }
    //         }
    //     }
    // });
    
    // set return person seat
    // if(register !== rent) {    //
    //     for(let r = 0, id = 1; r < rowSize; r++) {
    //         for(let c = 0; c < columnSize && id <= size; c++, id++) {
    //             if(person.seatID === seat[r][c].id) {
    //                 seat[r][c].ifReturn = true;
    //             }
    //         }
    //     }
    // }
    if(register !== rent) {
        const seatid = QryPosition(person.account, person.password);
        console.log(seatid);
        seat[seatid / columnSize][seatid % columnSize].ifReturn = true;
    }
    
    return { rowSize, columnSize, size, seat };
}
export default seatHandling;