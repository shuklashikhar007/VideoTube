import mongoose  from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const commentSchema = new Schema(
    {
        content : {
            type : String,
            required : true,
        },
        video : {
            type : Schema.Types.ObjectId,
            ref : "Video",
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "user"
        }
    },
    {timestamps : true}
)
// concept of plugins in not that much clear to me right not
commentSchema.plugin(mongooseAggregatePaginate);
export const Comment = mongoose.model("Comment" , commentSchema)