import Head from 'next/head'
import React from 'react'

function userforgetpassword(props) {
  return (
    <>
    <Head>
        <title>BackCoding | Forget Password</title>
      </Head>
    <section className={`text-gray-${props.mode==='light'?900:100} my-24 mb-72 body-font`}>
  <div className="container px-5 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-3">Forget Password</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Email address associated with your account. Enter the email address you used to create the account.</p>
    </div>
    <div className="flex lg:w-1/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <div className="relative flex-grow w-full">
        <label htmlFor="email" className="leading-7 text-sm">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
      </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Email→</button>
    </div>
  </div>
</section>
    </>
  )
}

export default userforgetpassword