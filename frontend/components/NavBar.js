import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head';


const drackIcon = <> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd">
  </path>
</svg>
</>
const lightIcon = <> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7 transform -rotate-90">
  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
</>

export default function NavBar(props) {

  return (
   <>
   <Head>
   <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
   </Head>
   <header className={`text-gray-${props.mode==='light'?900:100}  body-font`}>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href="/" ><a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
    <Image src={props.logo} width={50} className="rounded-3xl" height={50} />
      <span className="ml-3 text-2xl font-bold text-blue-700">BackCoding</span>
    </a></Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <Link  href="/" ><a className={`mr-5 hover:text-blue-700 font-semibold text-xl focus:text-blue-400  ${props.isActiveHomePage==false?"":"text-rose-600"} ` }  >Home</a></Link>
    {/* The commnet courses page devloping the page and thinking about courses show  */}
    <Link  href="/courses"><a className={`mr-5 hover:text-blue-700 font-semibold text-xl focus:text-blue-400 }`}  >Courses</a></Link>
    <Link  href="/blogs"><a className={`mr-5 hover:text-blue-700 font-semibold text-xl focus:text-blue-400 }`} >Blogs</a></Link>
    <Link  href="/contact"><a className={`mr-5 hover:text-blue-700 font-semibold text-xl focus:text-blue-400 }`} >Contact</a></Link>
    </nav>
    <div className="cursor-pointer mx-10 " onClick={props.toggleMode}>{props.mode === 'light' ? drackIcon : lightIcon} </div>
    {/* this line Below comment code login page */}
    <Link href="/login">
    <button className="inline-flex items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-800 rounded text-base text-white mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
    </Link>
  </div>
</header>
   </>
  )
}
