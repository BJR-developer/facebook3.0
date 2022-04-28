import PostModels from '../../../lib/models/PostSchema';
import mongoDB from "../../../lib/mongodb";
const handler = async (req, res) => {

    await mongoDB();

    if (req.method === 'GET') {
        const { _id, user, email } = req.body;
        await PostModels.find({ _id });
    }
    if (req.method === 'POST') {
        const data = req.body
        const { _id, user, email } = data
        const preuser = user;
        //here is likes post method
        if (data.islikes === true) {
            let likes = data.likes
            if (likes == undefined) likes = 0
            try {

                const res = await PostModels.updateOne({ _id }, { likes: { count: likes + 1 }, $push: { reactDetails: { user, email } } });

            } catch (error) {
                console.log(error);
            }
        }
        // //here is dislikes
        else if (data.isdislikes === true) {
            let dislikes = data.dislikes
            if (data.dislikes === undefined) dislikes = 0

            try {
                const res = await PostModels.updateOne({ _id }, { dislikes: { count: dislikes + 1 }, $push: { reactDetailsInverse: { user, email } } });
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        }
    }
    if (req.method === "DELETE") {
        const { _id, user, email, islikes, isdislikes } = req.body;
        if (islikes) {
            try {
                const res = await PostModels.updateMany({ _id }, { $pull: { reactDetails: { user, email } } });
            } catch (error) {
                console.log(error);
            }
        }
        if (isdislikes) {
            try {
                const res = await PostModels.updateMany({ _id }, { $pull: { reactDetailsInverse: { user, email } } });
            } catch (error) {
                console.log(error);
            }
        }
    }
}
export default handler;