const router=require("express").Router();
const gamesController=require("../../controllers/gamesController");

router.route("/") //matches with /api/picks/week
  .get(gamesController.findAllPicks);
  
router.route("/")//matches with /api/games/week
  .post(gamesController.createPick);




module.exports=router;