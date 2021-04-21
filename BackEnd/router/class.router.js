let express = require("express");
let router = express.Router();  //router reference. 
let ClassController = require("../controller/class.controller.js");

//mapping sub path with http methods. 
router.get("/allClassDetails",ClassController.getClassDetails);
router.get("/retrieveClassById/:pid",ClassController.getClassById)
router.post("/createClassDetails",ClassController.createClassDetails);
router.delete("/deleteById/:pid",ClassController.deleteClassById);
router.put("/updateClassDetails",ClassController.updateClassDetails);


module.exports=router;