import axios from '../api';

//POST
const QryEmpty = async (wheretosit, seatID) => {
    const ins = 1, account = -1, password = -1; //
    const {
      data: { message, whr, pos },
    } = await axios.post('/infor', {
      account,
      password,
      wheretosit, //
      seatID, //
      ins
    });

    return pos;
  };

  const SeatReturn = async (account, password) => {
    const ins = 0, wheretosit = -1, seatID = -1; //
    const {
      data: { message, whr, pos },
    } = await axios.post('/infor', {
      account, //
      password, //
      wheretosit,
      seatID, 
      ins
    });
    console.log(message);
    return message;
  };

  const SeatRent = async (account, password, wheretosit, seatID) => {
    const ins = 0; //
    const {
      data: { message, whr, pos },
    } = await axios.post('/infor', {
      account, //
      password, //
      wheretosit, //
      seatID, //
      ins
    });

    return message;
  };

  const QryPosition = async (account, password) => {
    const ins = 1, wheretosit = -1, seatID = -1; //
    const {
      data: { message, whr, pos },
    } = await axios.post('/infor', {
      account, //
      password, //
      wheretosit,
      seatID, 
      ins
    });

    return {message, whr, pos};
  };

  // call func when rent
const AcntRegister = async (account, password) => {
    const ins = 1; //
    const {
      data: { message, valid },
    } = await axios.get('/account', {
      params: {
        account, //
        password, //
        ins,
      },
    });

    return { message, valid };
  };
// call func when return or search
  const LogCheck = async (account, password) => {
    const ins = 0; //
    const {
      data: { message, valid }
    } = await axios.get('/account', {
      params: {
        account, //
        password, //
        ins,
      }
    });
    console.log(message, valid);
    return { message, valid };
  };

export {QryEmpty, SeatReturn, SeatRent, QryPosition, AcntRegister, LogCheck};