import connectDB from '../../../middleware/mongoose'
import CourseVideo from '../../../module/CourseVideo';

const handler =  async(req,res) => {
    if(req.method== 'POST'){
        // console.log(req.body)
    for(let i=0;i<req.body.length;i++){
        let c=new CourseVideo({
            title : req.body[i].title,
            slug : req.body[i].slug, 
            category : req.body[i].category, 
            desc : req.body[i].desc, 
            url : req.body[i].url,
            })
        console.log(c)
        await c.save();
        }

        res.status(200).json({seccse:"Add couse seccssfully"});

    }else{
        res.status(400).json({error:"This method is not allowed"});
    }
       
}

export default connectDB(handler)