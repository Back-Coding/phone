import connectDB from '../../../middleware/mongoose'
import courseVideo from '../../../module/CourseVideo'

const handler =  async(req,res) => {
        let course= await courseVideo.find();
          res.status(200).json({course}) 
}

export default connectDB(handler)