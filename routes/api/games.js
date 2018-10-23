const router=require("express").Router();
const gamesController=require("../../controllers/gamesController");

router.route("/") //matches with /api/games/week
  .get(gamesController.findAllGames);
  
router.route("/:week")//matches with /api/games/week
  .get(gamesController.findAllGames);




module.exports=router;