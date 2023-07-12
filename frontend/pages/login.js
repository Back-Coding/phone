import Head from 'next/head'
import React from 'react'
import Link from 'next/link';

function Login(props) {
  return (
   <>
    <Head>
        <title>BackCoding | Login</title>
  </Head>
   <section className={` text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container px-5 py-20   mx-auto flex flex-wrap items-center">
    <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
    <div className="rounded-lg h-96 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full"   src={`${props.mode==='light'?'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80':'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}`}  />
      </div>
    </div>
    <div className={`lg:w-2/6 md:w-1/2  rounded-lg shadow-xl ${props.mode==='light'?"shadow-blue-500/50":"shadow-indigo-500/50"} rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0`}>
      <h2 className="text-lg font-medium title-font mb-5">Login</h2>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm ">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="relative mb-4">
        <label htmlFor="Password" className="leading-7 text-sm ">Password</label>
        <input type="password" id="Password" name="Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <div className="flex justify-between py-3">
            <div className="flex">
                <label className={`ml-2 text-sm font-medium cursor-pointer`} id='click_show_hide' >Show</label>
            </div>
            <Link href="/userforgottenpassword"><span className="hover:underline dark:text-blue-500 text-red-800 cursor-pointer ">Forgotten Password?</span></Link>
        </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
      <div className={`text-sm font-medium text-blue-700 mt py-2`}>
            Not registered ? <Link href="/register"><span  className=" hover:underline dark:text-blue-500 cursor-pointer">Create new account</span></Link>
        </div>
    </div>
  </div>
</section>
   
   
   </>
  )
}

export default Login