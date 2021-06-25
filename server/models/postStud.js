import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    photo: String,
    name1: String,
    name2: String,
    email: {
        type: String,
        required: true    
    },
    dob: {
        type: Date,
        default: new Date()
    },
    doa:{
        type: Date,
        default: new Date()
    },
    admissionNo: String,
    classAdmitted: String,
    address: String,
    contactNo: String,
    race: String,
    religion: String,
    house: String,
    
    momName: String,
    momContact: String,
    dadName: String,
    dadContact: String
    

});

const PostStudent = mongoose.model('PostStudent', postSchema);

export default PostStudent;