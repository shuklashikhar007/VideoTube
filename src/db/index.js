// two very important things in connecting a database.
// 1) there are very high chances of errors while connecting to a database so always use try and catch code blocks to handle any upcoming errors.
// 2) connecting to database mau take some good amount of time so always try to use async functions and await keyword.
// 3) ALways assume that database is in other continent.
import mongoose from "mongoose"; // mongoose is a plugin used to connect to a database
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`); // now pass the url using a backtick to connect to the database.
        // store the mongoDB url to .env file for privacy reasons. we cannot push the code to github containing acess to our MONGODB database.
        console.log(`\n MongoDB connected ! , DB host : ${connectionInstance.connection.host}\n`);
    }
    catch(err){
        console.log("MongoDB connection error !! ");
        process.exit(1); // to exit the connection to database on errors.
    }
}

export default connectDB;