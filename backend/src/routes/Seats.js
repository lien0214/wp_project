import { Router } from "express";
import SeatInfor from "../models/Seat";
const router = Router();
router.get("/account", async function (req, res) {
    try {
        const { account, password } = req.body;
        const exist = await SeatInfor.findOne({ account });
        if (exist) {
          res.json({
            message: `Your account has been registered!`,
            valid: false
          });
        } else {
          res.json({
            valid: true
          });
        }
      } catch (e) {
        res.json({ message: "Error" });
      }  
})
router.post("/infor", async function (req, res) {
    try {
        const { account, password, position} = req.body;
        const newSeat = new SeatInfor({ account, password, position });
        newSeat.save();
        res.json({
          message: `Seat is rent succesfully by Account [${account}] !`,
        });
      } catch (e) {
        res.json({ message: "Error" });
    }  
})
router.delete("/infor", async function (req, res) {
    try {
      const { account, password, ins } = req.body;
      const exist = await SeatInfor.findOne({ account, password });
      if (exist) {
        if(ins){
            res.json({
            message: `Find your seat at position ${exist.position}`,
            infor: { account, password, score },
            });
        }
        else {
            await SeatInfor.deleteOne({ account, password});
            res.json({
            message: "Your seat is returned successfully!"
            });
        }
      } else {
        res.json({
          message: "Sorry, we didn't find your account.",
        });
      }
    } catch (e) {
      res.json({ message: "Error" });
    }
});
export default router;