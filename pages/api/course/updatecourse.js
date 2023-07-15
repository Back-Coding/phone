import connectDB from '../../../middleware/mongoose'
import CourseVideo from '../../../module/CourseVideo';

const handler =  async(req,res) => {
    if(req.method== 'POST'){
        for(let i=0;i<req.body.length; i++){
            let c= await CourseVideo.findByIdAndUpdate(req.body[i]._id,req.body[i])
       
        }

        res.status(200).json({seccse:"update seccssfully "});

    }else{
        res.status(400).json({error:"This method is not allowed"});
    }
       
}

export default connectDB(handler)