import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const schema =  new mongoose.Schema({
    username:{type:String, required:true},
    profileImg:{type:String, required:true},
    email:{type:String},
    caption:String,
    postImage:String,
    likes:{
        count:{
            type:Number,
            default:0
        }
    },
    reactDetails:[{
        user:String,
        email:String
    }],
    
    dislikes:{
        count:{
            type:Number,
            default:0
        },
    },
    reactDetails:[{
        user:String,
        email:String
    }],
    createdAt:String
})

export default mongoose.models?.Posts || mongoose.model('Posts' , schema)