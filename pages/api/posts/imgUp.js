import formidable from 'formidable';
import fs from 'fs';
import uniqid from 'uniqid';
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler = async (req, res) => {
    if(req.method==='POST'){
        const form = new formidable.IncomingForm();
        form.uploadDir = "./uploads";
        form.keepExtensions = true;
        form.parse(req, (err, fields, files) => {
          console.log(files);
            var oldpath = "./uploads/invalid-name"
            var newpath = './public/uploads/' + files.file.size +files.file.originalFilename;
            console.log(newpath);
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                console.log("File rename successfully");
              });  
        });    
    }
 
};
