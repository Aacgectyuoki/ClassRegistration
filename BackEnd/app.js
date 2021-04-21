let app = require("express")();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");

//Database URL Details 
let url = "mongodb://localhost:27017/class";

//middleware enable data from post method.
app.use(bodyParser.urlencoded({extended:true}));    // enable body part data  
app.use(bodyParser.json());                         // json data. 
app.use(cors());           // enable cors policy 

//Database connection without warning 
const mongooseDbOption ={ 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(url,mongooseDbOption);   //ready to connect 

//Connect the data 
mongoose.connection

//link to router module 
var Class = require("./router/class.router.js");

//Middleware 

// http://localhost:9090/class/allClassDetails   Get App Product Details 
// http://localhost:9090/class/retrieveClassById   Get App Product Details by Id  
// http://localhost:9090/class/createClassDetails    rest client or post man {"pid":103,"pname":"Computer","price":43000}
// http://localhost:9090/class/deleteById
// http://localhost:9090/class/updateClassDetails  update price using pid {"pid":103,"price":48000}

app.use("/class",Class)

app.listen(4000,()=>console.log("Server running on port number 4000"));