let ClassModel = require("../model/class.model.js");

//Retrieve all product details 
let getClassDetails =(req,res)=> {

    ClassModel.find({},(err,result)=> {
        if(!err){
            res.json(result);
        }
    })
}

let getClassById = (req,res)=> {
    
    let pid = req.params.pid;       //passing id through path param 
    
    ClassModel.find({_id:pid},(err,data)=> {
        if(!err){
            res.json(data);         // return array 
            //res.json(data[0])     // return only one object 
        }
    })
}

let createClassDetails = (req,res)=> {
   
    let clas = new ClassModel({
        _id:req.body.pid,
        pname:req.body.pname,
        desc:req.body.desc,
        price:req.body.price
    });

    clas.save((err,result)=> {
        if(!err){
            res.send("Record stored successfully ")
            //res.json({"msg":"Record stored successfully"})
        }else {
            res.send("Record didn't store ");
        }
    })

}

let deleteClassById= (req,res)=> {
    let pid = req.params.pid;
    ClassModel.deleteOne({_id:pid},(err,result)=> {
        if(!err){
                if(result.deletedCount>0){
                    res.send("Record deleted successfully")
                }else {
                    res.send("Record not present");
                }
        }else {
            res.send("Error generated "+err);
        }
    })

}

let updateClassDetails= (req,res)=> {
    let pid = req.body.pid;
    let updatedName = req.body.pname;
    let updatedDescription = req.body.desc;
    let updatedPrice = req.body.price;
    ClassModel.updateMany({_id:pid},{$set:{pname:updatedName, desc:updatedDescription, price:updatedPrice}},{multi:true},(err,result)=> {
        if(!err){
            if(result.nModified>0){
                    res.send("Success!!!")
            }else {
                    res.send("Record(s) not available");
            }
        }else {
            res.send("Error generated "+err);
        }
    })
    
}

module.exports={getClassDetails,getClassById,createClassDetails,deleteClassById,updateClassDetails}