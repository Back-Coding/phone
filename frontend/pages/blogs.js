import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Blogs = (props) => {
  
  // const [isLoading, setLoading] = useState(false)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(()=>{
  //   console.log("It is Runing");
  //   fetch('http://localhost:3000/api/blog').then((a)=>{
  //     return a.json()}).then((parsd)=>{
  //       setBlogs(parsd)
  //     })
  //   },[])

  // the below comment the pat the parectice below uncoment this is fun
  return (
    <>
      <Head>
        <title>BackCoding | Blogs</title>
      </Head>
      <main>
        <div className={`container flex justify-between mx-auto  text-gray-${props.mode==='light'?900:100}`}>
          <div className="w-full lg:w-8/12 ">
            <h1 className="text-2xl font-bold md:text-3xl text-center md:text-left md:ml-11 ">Blogs</h1>
             { blogs &&blogs.map((blogItme) => {
              return <div className="mt-6" key={blogItme.slug}>
                <div className={`max-w-4xl px-10 py-6 mx-auto  ${props.mode==='light'?"shadow-blue-500/50":"shadow-indigo-500/50"} rounded-lg shadow-xl `}>
                  <div className="flex items-center justify-between">
                    <span className="font-light ">2022-07-01</span>
                  </div>
                  <div className="mt-2">
                    <span className="text-2xl font-bold">
                      <Link href={`/blogpost/${blogItme.slug}`}>{blogItme.title}</Link>
                    </span>
                    <p className="mt-2 ">{blogItme.metadesc.substr(0, 500)} </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 text-purple-500 dark:text-purple-600">
                    <Link href={`/blogpost/${blogItme.slug}`}>Read more</Link>
                  </div>
                </div>
              </div>
            })}
          </div>
        </div>

      </main>
    </>
  )
}
export async function getServerSideProps(context) {
  let data = await fetch('http://localhost:3000/api/blog')
  let allBlogs = await data.json()
  return {
    props: { allBlogs }, // will be passed to the page component as props
  }

  // the parectice the  below comment  this real parectice
  //   let data =fetch('http://localhost:3000/api/blog')
  //   console.log('show -',data)
  //   console.log("typeof ->",typeof data)
  // useEffect(()=>{
    //   return new Promise((res,rej)={
        
    //   })
    // })
  // return{
  //   props:{},
  // }
}

export default Blogs
