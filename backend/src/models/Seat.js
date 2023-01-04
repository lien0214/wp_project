import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const SeatSchema = new Schema({
    account: String,    // person account/student id
    password: String,   // person password
    wheretosit: Number, // shinguan or lishin
    seatID: Number,       // seat ID 
});
const SeatInfor = mongoose.model('Seat', SeatSchema);
export default SeatInfor;