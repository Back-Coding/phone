import connectDB from '../../../middleware/mongoose'
import CourseVideo from '../../../module/CourseVideo';

const handler =  async(req,res) => {
    console.log(req.body._id)
    if(req.method== 'DELETE'){

        let video = await CourseVideo.findById(req.body._id);
        if (!video) { return res.status(404).send("Not Found") }

        let c= await CourseVideo.findOneAndDelete(req.body._id,)
        res.status(200).json({seccse:"DELETE seccssfully "});

    }else{
        res.status(400).json({error:"This method is not allowed"});
    }
       
}

export default connectDB(handler)