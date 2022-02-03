import PostModels from '../../../lib/models/PostSchema';
import mongoDB from "../../../lib/mongodb";
const handler = async(req, res) =>{
    await mongoDB();
    if(req.method==='POST'){
        const data = req.body
        const {_id  , user , email } = data
    //here is likes post method
        if(data.islikes===true){
        let likes = data.likes
            if(likes==undefined) likes = 0
        try {
            // const res = await PostModels.updateOne({_id} , {reactions:{likes:{count:like+1,user}}});
            const res = await PostModels.updateOne({_id} , { likes:{count:likes+1 , user , email}});
            console.log(res);

        } catch (error) {
            console.log(error);
        }
    }
    // //here is dislikes
    else if(data.isdislikes===true){
        const {_id  , user , email } = data
        let dislikes = data.dislikes
        if(data.dislikes===undefined) dislikes=0

        try {
            const res = await PostModels.updateOne({_id} , {dislikes:{count:dislikes+1 , user, email}})
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }
    }
}
export default handler;