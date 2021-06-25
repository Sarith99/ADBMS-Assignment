import mongoose from 'mongoose';


const postSchema = mongoose.Schema({

    photo:String,
    registerNo:String,
    name:String,
    address:String,
    dob:{
    type: Date,
    default:new Date()
},

Phone_No:{
  type:Number,
  default:0,
},

email:String,
jobRole:String,

dos:{
        type:Date,
        default:new Date()
},

});

const PostTeacher= mongoose.model('PostTeacher', postSchema);

export default PostTeacher;