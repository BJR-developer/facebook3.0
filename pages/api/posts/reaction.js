import PostModels from '../../../lib/models/PostSchema';
import mongoDB from "../../../lib/mongodb";
const handler = async(req, res) =>{
    await mongoDB();
    if(req.method==='POST'){
        const data = req.body
        const _id = data._id
    //here is likes post method
        if(data.islikes===true){
        let likes = data.likes
            if(likes==undefined) likes = 0
        try {
            const res = await PostModels.updateOne({_id} , {likes:likes+1});
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }
    // //here is dislikes
    else if(data.isdislikes===true){
        let dislikes = data.dislikes
        if(data.dislikes===undefined) dislikes=0

        try {
            const res = await PostModels.updateOne({_id} , {dislikes:dislikes+1})
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    }
}
export default handler;