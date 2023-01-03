import {QryEmpty, SeatReturn, QryPosition} from './ApiFunc'
const ShinGuan = 0, Lishin = 1;
const rent = 0, ret = 1, search = 2;
const seatHandling = async (register, person) => {
    let seat = [];
    let columnSize, rowSize, size; // size for total count of seats including all kind of seats
    
    if(register !== rent) {
        const positionRet = await QryPosition(person.account, person.password);
        console.log(positionRet);
        person.wheretosit = positionRet.whr;
        person.id = positionRet.pos;
    }

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
            if(!(await QryEmpty(person.wheretosit, id))) {
                seat[r][c].registered = true;
            }
        }
    }
    seat[person.id / columnSize][person.id % columnSize].ifReturn = true;
    
    return { rowSize, columnSize, size, seat };
}
export default seatHandling;