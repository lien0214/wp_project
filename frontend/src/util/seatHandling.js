const ShinGuan = 0, Lishin = 1;
const seatHandling = (register, people, person) => {
    let seat = [];
    let columnSize, rowSize, size; // size for total count of seats including all kind of seats
    if(person.wheretosit === Lishin) {
        [columnSize, rowSize, size] = [5, 20, 116];
    }
    else if(person.wheretosit === ShinGuan) {
        [columnSize, rowSize, size] = [5, 8, 40];
    }
    else {
        console.log("wrong wheretosit");
        return [];
    }

    // create seat
    for (let r = 0, id = 1; r < rowSize; r++) {
        let subCol = [];
        for (let c = 0; c < columnSize, id <= size; c++) {
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
    people.forEach(p => {
        for(let r = 0; r < rowSize; r++) {
            for(let c = 0; c < columnSize; c++) {
                if(p.seatID === seat[r][c].id) {
                    seat[r][c].registered = true;
                    seat[r][c].person = p;
                }
            }
        }
    });

    // set return person seat
    if(register === false) {
        for(let r = 0; r < rowSize; r++) {
            for(let c = 0; c < columnSize; c++) {
                if(person.seatID === seat[r][c].id) {
                    seat[r][c].ifReturn = true;
                }
            }
        }
    }

    return { rowSize, columnSize, size, seat };
}
export default seatHandling;