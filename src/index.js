// this file is the entry point file to our database or you can say the server.js file to start the server
import dotenv from "dotenv";
import {app} from "./app.js"; // import app to use in this file
// app contains all the functionality of the server so to write any code involving server we use app reference.
import connectDB from "./db/index.js"; // to import the functionality of the database 
dotenv.config({
    path: "./.env" // the file containing all the enviorment variables in the root directory.
})
const PORT = process.env.PORT || 8001;

//app.listen(PORT, () => {
   // console.log(`server is running on ${PORT}`);
//})
// we want the server to listen only when the databaase has been connected sucessfully not always.
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection error !! ", err);
})

