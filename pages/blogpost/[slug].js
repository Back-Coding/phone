import Head from 'next/head';
import {useRouter}  from 'next/router'
import { useEffect,useState } from 'react';

const Slug = (props) => {
  // the create html output show the user 
  const [blogs, setBlogs] = useState(props.myblog);
  function createMarkup(conten) {
    return {__html: conten};
  }


  return<>
  <Head>
    <title>{blogs && blogs.title}</title>
  </Head>
   <div className="snap-center">
    <h1 className="text-center"> {blogs && blogs.title}</h1>
    <div  className="text-center">
      {blogs && <div dangerouslySetInnerHTML={createMarkup(blogs.conten)}></div>}
      {/* {blogs && blogs.conten} */}
    </div>
  </div>
  </>
}

//// The below line is comment a severside is dynamic changing frast moving service like news and media use
  export async function getServerSideProps(context) {
  const { slug } = context.query;
  let data= await fetch(`http://localhost:3000/api/blogs/getblog?slug=${slug}`);
  // let data= fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myblog=await data.json()
  return {
      props: {myblog }, // will be passed to the page component as props
    } 
  }

  /***he static generete serv in clint and deploy one time and upgreate thei change file our system 

  export async function getStaticPaths() {
    return {
      paths: [
        { params: { slug :"how-to-lean-flack"} },
        { params: { slug :"how-to-lean-java"} }
      ],
      fallback: false, // can also be true or 'blocking'
    }
  }
  export async function getStaticProps(context) {
    // console.log(context.query)

  const { slug } = context.query
  let data= await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // let data= fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let myblog=await data.json()
  return {
      props: {myblog }, // will be passed to the page component as props
    } 
  }
  */

export default Slug