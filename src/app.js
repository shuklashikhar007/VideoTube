import express from "express";
import cors from "cors";

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true
    })
)
// common prerequisite middlewares 
app.use(express.json({limit : "16kb"})); // setting a middleware to allow 16kb of json data to come at once.
app.use(express.urlencoded({extended : true, limit : "16kb"})); // url encoded data (another form of data) 
app.use(express.static("public")); // refernce to static folder ( may contain static html pages or images to be used in the website later on during development )




export {app}; // another method other than module way to export a app 