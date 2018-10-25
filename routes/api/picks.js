const router=require("express").Router();
const gamesController=require("../../controllers/gamesController");

router.route("/") //matches with /api/picks/week
  .get(gamesController.findAllPicks);
  
router.route("/")
  .post(gamesController.createPick);




module.exports=router;