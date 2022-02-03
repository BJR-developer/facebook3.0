import mongoose from 'mongoose'
mongoose.Promise = global.Promise

const schema = new mongoose.Schema({
    reactions:{
        likes:{
            count:Number,
            user:String,
            email:String
        }
    }
});

export default mongoose.models?.reactions || mongoose.model('reactions' , schema)