const router = require("express").Router();

let User = require("../model/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((Ex) => {
      res.status(200).json(Ex);
    })
    .catch((err) => res.status(400).json("Error" + err));
});

// router.route("/:name").post((req, res) => {
//   console.log(req.body);
//   User.find({
//     name: req.body.name, 

// })
//     .then((Ex) => {
//       res.status(200).json(Ex);
//     })
//     .catch((err) => res.status(400).json("Error" + err));
// });

router.route("/getf").post((req, res) => {

  // console.log(req.body)

  User.aggregate([
    {
      $match: {
        name: req.body.name,
        pass:req.body.pass,
      },
    },
    {
      $lookup: {
        from: "insorg",
        localField: "org",
        foreignField: "orgname",
        as: "org_info",
      },
      
    },
  ])
    .then((Ex) => {
       if(Ex.length==0){
        res.status(200).json([{name:"error"}]);
       }else{
      res.status(200).json(Ex);
       }
    })
    .catch((err) => res.status(400).json("Error" + err));
});

module.exports = router;
