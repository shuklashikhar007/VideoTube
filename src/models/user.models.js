
import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
    
    {
     // this is a method in which we will write objects.
        username : { // a object to give more data and parameters about a field like username.
            type : String, // data type of username.
            required : true, // whether it's a mandatory field 
            unique : true, // whether it should be unique
            lowercase : true, // whether all of the characters should be lowercase.
            trim : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            lowercase : true,
            trim : true
        },
        fullname : {
            type : String,
            required : true,
            trim : true,
            index : true
        },
        avatar : {
            type : String,
            required : true,
        },
        coverImage : {
            type : String,
        },
        watchHistory : [
            {
                type : Schema.Types.ObjectId,
                ref : "Video",
            }
        ],
        password : {
            type : String,
            required : [true, "Password is required"],
            trim : true            
        },
        refreshToken : {
            type : String,
        },
    },
    { timestamps : true }
)
// creation of a schema or model is now complete.
export const User = mongoose.model("User", userSchema);
// this line tells the mongoose to create a collection called user in the database
// create document know as user and the structure that is followed will follow the given user Schema.
