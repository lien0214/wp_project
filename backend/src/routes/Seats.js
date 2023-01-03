import { Router } from "express";
import SeatInfor from "../models/Seat";
const router = Router();
router.get("/account", async function (req, res) {
    const { account, password, ins } = req.query;
    console.log(account, password, ins);
    if(ins == 0){
        const exist = await SeatInfor.findOne({ account, password });
        if (exist) {
          res.json({
            message: "Login success!",
            valid: true
          });
        } else {
          const ext = await SeatInfor.findOne({ account });
          if(ext){
            res.json({
              message: "Password incorrect, please try again.", 
              valid: false
            });
          }
          else {
            res.json({
              message: "Account not found!", 
              valid: false
            });
          }
        }
    }
    else {
      const exist = await SeatInfor.findOne({ account });
      if (exist) {
        console.log(exist);
        res.json({
          message: "Your account has been registered!",
          valid: false
        });
      } else {
        res.json({
          valid: true
        });
      }
    }
})
router.post("/infor", async function (req, res) {
    try {
        const { account, password, wheretosit, seatID, ins} = req.body;
        console.log(account, password, wheretosit, seatID, ins);
        if(seatID < 0){
          if(ins == 0){
            await SeatInfor.deleteOne({ account, password });
            res.json({
              message: "Your seat is returned successfully!"
            });
          }
          else {
            const infor = await SeatInfor.findOne({ account, password });
            res.json({
              message: "Seat found!",
              whr: infor.wheretosit, 
              pos: infor.seatID
            });
          }
        }
        else {
            if(ins == 0){
              const newSeat = new SeatInfor({ account, password, wheretosit, seatID });
              newSeat.save();
              res.json({
                message: `Seat is rent succesfully by Account [${account}] !`
              });
            }
            else {
              const exist = await SeatInfor.findOne({ wheretosit, seatID });
              if (exist) {
                res.json({
                  message: "The seat is rent!",
                  pos: 1
                });
              }
              else {
                res.json({
                  message: "The seat is empty.",
                  pos: -1
                });
              }
            }
        }
      } catch (e) {
        res.json({ message: "Error" });
    }  
})
// router.delete("/infor", async function (req, res) {
//     try {
//       const { account, password, ins } = req.query;
//       // await SeatInfor.deleteMany({});
//       const exist = await SeatInfor.findOne({ account, password });
//       if (exist) {
//         if(ins){
//             res.json({
//             message: `Find your seat at position ${exist.position}`,
//             infor: { account, password, score },
//             });
//         }
//         else {
//             await SeatInfor.deleteOne({ account, password});
//             res.json({
//             message: "Your seat is returned successfully!"
//             });
//         }
//       } else {
//         res.json({
//           message: "Account not found!",
//         });
//       }
//     } catch (e) {
//       res.json({ message: "Error" });
//     }
// });
export default router;
