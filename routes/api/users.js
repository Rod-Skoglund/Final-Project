const router=require("express").Router();
const usersController=require("../../controllers/usersController");

router.route("/")//matches with /api/users
  .get(usersController.findAll);//sends all faction data
  // app.get("/api/hello",(req,res)=>{
  //   res.send({express:"hello from express"})
  // });
router.route("/")//matches with /api/users
    .post(usersController.create);//sends all faction data

// router.route("username")
//     .get(usersController.findByUsername)
  //router.route("/:")
router.route("/:username")
.get(usersController.findOne)
.put(usersController.update);
    // .delete(booksController.remove);
// router.route("/:_id")
// .put(usersController.update);
    

module.exports=router;