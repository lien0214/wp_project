import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const SeatSchema = new Schema({
 account: String, 
 password: String, 
 position: Number
});
const SeatInfor = mongoose.model('Seat', SeatSchema);
export default SeatInfor;