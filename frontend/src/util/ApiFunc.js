import axios from '../api';

//POST

const GetAll = async () => {
  const ins = 2, account = -1, password = -1, wheretosit = 0, seatID = -1; //
  const {
    data: { message, whr, pos },
  } = await axios.post('/infor', {
    account,
    password,
    wheretosit, //
    seatID, //
    ins
  });
  return whr; // whr => all people's infor
};
const QryEmpty = async (wheretosit, seatID) => {
    console.log(wheretosit, seatID);
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
    // console.log(whr);
    return {whr, pos}; // whr => person's infor if rent, pos => 1 for rent and -1 for empty;
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


export {QryEmpty, SeatReturn, SeatRent, QryPosition, AcntRegister, LogCheck, GetAll};