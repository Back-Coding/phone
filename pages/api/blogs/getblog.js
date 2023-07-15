// http://localhost:3000/api/getblog?slug=how-to-lean-flask
import * as fs from 'fs';

export default function handler(req, res) {

  fs.readFile(`blogdates/${req.query.slug}.json`,"utf-8",(err,data)=>{
    if(err){
      res.status(500).json({error:"some error occurred"})  
    }else{
      console.log("-file getblogs",req.query.slug)
      res.status(200).json(JSON.parse(data))
    }
  })


}
