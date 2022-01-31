import PostsModels from "../../../lib/models/PostSchema";
import mongoDB from "../../../lib/mongodb";
import formidable from 'formidable';
import fs from 'fs';
import uniqid from 'uniqid';


export const config = {
    api: {
      bodyParser: true,
    },
  };

//all posts get

async function getPosts(req, res) {
    try {
        const getPosts = await PostsModels.find({}, null, {sort: {_id: -1}})
        res.status(201).json(getPosts)
    } catch (error) {
     res.status(400).json({ success: false })
    }
}

//this is handler
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
           postImage:captionJson.postImage,
           createdAt:new Date()
       }
       try {
           const sendPost = await PostsModels.create(capData);
           res.status(201).json(sendPost);
       } catch (error) {
           res.status(400).json({ success: false })
       }
   }
   else if(req.method==='GET'){
    return (getPosts(req, res))
   }
};

export default handler;
