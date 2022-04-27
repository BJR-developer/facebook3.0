import React from 'react'
import SimpleReactFileUpload from '../components/mainbar/TestUp'

 const test = () => {
   const [ selectFile , setSelect ] = React.useState([]);
   console.log(selectFile);

   const submitData = async() =>{
     const formData = new FormData();
     formData.append("file" , selectFile);

     formData.append('upload_preset', 'fb-upload-management');

     const dataSend = await fetch("https://api.cloudinary.com/v1_1/dxtnn1awt/image/upload" , 
      {
        method:"post",
        body:formData,
      }
     ).then(res=>res.json())
      console.log("dataSend" , dataSend);
   }
  return (
    <div className=' min-h-screen flex items-center justify-center'>
        <input type="file" onChange={(e)=>setSelect(e.target.files[0])}/>
        <button onClick={submitData}>Submit Data</button>
    </div>
  )
}
export default test