// const router = require("express").Router();
// const booksController = require("../../controllers/booksController");

// // Matches with "/api/books"
// router.route("/")
//   .get(booksController.findAll)
//   .post(booksController.create);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

// module.exports = router;

const router=require("express").Router();
const usersController=require("../../controllers/usersController");

router.route("/")//matches with /api/users
  .get(usersController.findAll);//sends all faction data
  // app.get("/api/hello",(req,res)=>{
  //   res.send({express:"hello from express"})
  // });
  router.route("/")//matches with /api/users
    .post(usersController.create);//sends all faction data

  router.route("/api/hello")
    .get((req,res)=>res.send({express:"hello from express"}))
  //router.route("/:")

module.exports=router;