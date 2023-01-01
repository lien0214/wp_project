import express from "express";
import cors from "cors";
import routes from "./routes/Seats";
import dotenv from "dotenv-defaults";
import mongoose from 'mongoose';
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
mongoose.connect(
    process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
   })
const port = process.env.PORT || 4000
app.listen(port, () => {
 console.log(`Server is up on port ${port}.`)
})