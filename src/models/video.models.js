import mongoose, {Schema, schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile : {
            type : String,
            required : true,
            trim :  true
        },
        thumbnail : {
            type : String, // cloudinary url mostly 
            required : true,
            trim : true
        },
        title : {
            type : String,
            required : true,
            trim : true
        },
        description : {
            type : String,
            required : true,
        },
        views : {
            type : Number,
            default : 0,
        },
        isPublished : {
            type : Boolean,
            default : true,
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User",
        }
    } , {timestamps : true}) // it is necessary to get the timestamps true in the end.

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema); // create a file named video user in the database following the 
//  structure given by the VideoSChema way of construction.
