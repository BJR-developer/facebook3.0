import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const schema =  new mongoose.Schema({
    username:String,
    profileImg:String,
    email:String,
    caption:String,
    createdAt:String
})

export default mongoose.models?.Posts || mongoose.model('Posts' , schema)