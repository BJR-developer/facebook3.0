import PostsModels from "../../../lib/models/PostSchema";
import mongoDB from "../../../lib/mongodb";

export const config = {
    api: {
        bodyParser: true,
    },
};

//all posts get

async function getPosts(req, res) {
    try {
        const data = await PostsModels.find({}, null, { sort: { _id: -1 } })
        res.status(201).json(data)
    } catch (error) {
        res.status(400).json({ success: false })
    }
}

//this is handler
const handler = async (req, res) => {
    await mongoDB();
    if (req.method === 'POST') {
        const data = req.body
        const captionJson = JSON.parse(data)
        if (captionJson.postImage === '/uploads/undefinedundefined') captionJson.postImage = "";
        const capData = {
            username: captionJson.username,
            profileImg: captionJson.profileImg,
            email: captionJson.email,
            caption: captionJson.caption,
            postImage: captionJson.postImage,
            createdAt: new Date()
        }
        try {
            const sendPost = await PostsModels.create(capData);
            res.status(201).json(sendPost);
        } catch (error) {
            res.status(400).json({ success: false })
        }
    }
    else if (req.method === 'GET') {
        return (getPosts(req, res))
    }
    else if (req.method === 'DELETE') {
        const _id = req.body
        const deletePost = await PostsModels.deleteOne({ _id });
        res.status(201).json({ delete: true, deletePost })
        console.log({ message: "post deleted", postDetails: deletePost });
        console.log(_id);
    }
    else if (req.method === 'PUT') {
        const data = req.body
        const _id = data._id
        const newcaption = data.newcaption
        const updatePost = await PostsModels.updateOne({ _id }, { caption: newcaption });
        console.log(updatePost);
    }
};

export default handler;
