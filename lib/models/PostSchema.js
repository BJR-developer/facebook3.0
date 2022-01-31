import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const schema =  new mongoose.Schema({
    username:{type:String, required:true},
    profileImg:{type:String, required:true},
    email:{type:String, required:true},
    caption:String,
    postImage:String,
    createdAt:String
})

export default mongoose.models?.Posts || mongoose.model('Posts' , schema)