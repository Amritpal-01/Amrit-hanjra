import mongoose, { model, Schema } from "mongoose";

const DMSchema = new Schema({
    name : {
        type : String,
        required : true
    } ,
    message : {
        type : String,
        required : true
    }
});


const DM = mongoose.models.DM || model("DM", DMSchema);

export default DM;