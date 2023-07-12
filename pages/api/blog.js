import * as fs from 'fs';

// watch youtube on video in codewithharry
//https://www.youtube.com/watch?v=T_aH6sRlj6A&list=PLu0W_9lII9agtWvR_TZdb_r0dNI8-lDwG&index=19

export default async function handler(req, res) {
  let myfile;
  let allBlogs=[];

  let data= await fs.promises.readdir("blogdates")
    for (let index = 0; index < data.length; index++) {
       const item = data[index];
         
         myfile= await fs.promises.readFile(`blogdates/${item}`,'utf-8')
        //  console.log("api blog fetch element")
         allBlogs.push(JSON.parse(myfile));

    }
  res.status(200).json(allBlogs)


    //  let data=fs.readdir("blogdates",(err,data)=>{

    //   console.log(data)
    //   data.forEach(item=>{
    //     console.log(item);
    //   })
    //    res.status(200).json(data)
    //  })
    
}
    