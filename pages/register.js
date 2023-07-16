import Head from 'next/head'
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

function Register(props) {
  const router = useRouter();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  
  const toggleButtonShowAndHide = () => {
    setShowPassword((prevState) =>!prevState);
  };



  const handleRegister = async (e) => {
    e.preventDefault();
    if(email==="" && password=== "" && confirmPassword==="" && name==="" ){
      toast.warn("Fill the form ")
    }else{
      if(name===""){
        toast.warn("Name is required")
      }else if(email===""){
        toast.warn("Email is required")
      }else if(password===""){
        toast.warn("Password is required")
      }else if(confirmPassword===""){
        toast.warn(" Confirrm Password is required")
      }else{
        if(password===confirmPassword){
          try {
            const response = await fetch(`/api/auth/user/register`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password,name }),
            });
            const json =await response.json();
            if (response.ok) {
              // Handle successful register
              toast.success('Register  successfully!');
              setName('');
              setPassword('');
              setConfirmPassword('');
              router.push('/login');

            } else {
              // Handle login error
              toast.error("User with this email already exist");
            }
          } catch (error) {
            console.error('An error occurred during login:', error);
            toast.error('Check internet you divice');
          }
        }else {
          toast.warn("Password not match ")
        }
      }

  }
  };
  
  return (
   <>
    <Head>
        <title>BackCoding | Register</title>
  </Head>
   <section className={` text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container px-5 py-4 mx-auto flex flex-wrap items-center">
  <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
    <div className="rounded-lg h-96 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={`${props.mode==='light'?'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80':'https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'}`}  loading="lazy"/>
      </div>
    </div>
    <div className={`lg:w-2/6 md:w-1/2  rounded-lg shadow-xl ${props.mode==='light'?"shadow-blue-500/50":"shadow-indigo-500/50"} rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0`}>
      <h2 className="text-lg font-medium title-font mb-5">Register</h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm ">Full Name</label>
        <input type="text" id="full-name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={name} onChange={e=>setName(e.target.value)} required  />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className="leading-7 text-sm ">Email</label>
        <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  value={email} onChange={e=>setEmail(e.target.value)} required/>
      </div>
      <div className="relative mb-4">
        <label htmlFor="Password" className="leading-7 text-sm ">Password</label>
        <input  type={showPassword ? 'text' : 'password'}  id="Password" name="Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={password} onChange={e=> setPassword(e.target.value)} />
      </div>
      <div className="relative mb-2">
        <label htmlFor="confirm-Password" className="leading-7 text-sm ">Confirm Password</label>
        <input  type={showPassword ? 'text' : 'password'}  id="confirm-Password" name="confirm-Password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
      </div>
      <div className="flex mb-4">
      <button className={`ml-2 text-sm font-medium cursor-pointer`} id='click_show_hide'  onClick={toggleButtonShowAndHide} > {showPassword ? 'Hide' : 'Show'}</button>
        </div>
      <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={handleRegister}>Register</button>
      <div className={`text-sm font-medium text-blue-700 mt py-2`}>
             registered <Link href="/login"><span  className=" hover:underline dark:text-blue-500 cursor-pointer">Login</span></Link>
        </div>
    </div>
  </div>
</section>
   
   
   </>
  )
}

export default Register