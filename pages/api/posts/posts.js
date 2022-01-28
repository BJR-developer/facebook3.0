import PostsModels from "../../../lib/models/PostSchema";
import mongoDB from "../../../lib/mongodb";

async function getPosts(req, res) {
    try {
        const getPosts = await PostsModels.find({});
        res.status(201).json(getPosts)
    } catch (error) {
     res.status(400).json({ success: false })
    }
}

const handler = async(req, res) => {
    await mongoDB();
   if(req.method==='POST'){
       const data = req.body
       const captionJson = JSON.parse(data)
       const capData = {
           username:captionJson.username,
           profileImg:captionJson.profileImg,
           email:captionJson.profileImg,
           caption:captionJson.caption,
           createdAt:new Date()
       }
       try {
           const sendPost = await PostsModels.create(capData);
           res.status(201).json(sendPost)
       } catch (error) {
           res.status(400).json({ success: false })
       }
   }
   else if(req.method==='GET'){
    return (getPosts(req, res))
   }
};

export default handler;
