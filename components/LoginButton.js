import Link from 'next/link';

const LoginButton = () => (
  <Link href="/login">
    <button className="inline-flex items-center bg-blue-600 border-0 py-2 px-3 focus:outline-none hover:bg-blue-800 rounded text-base text-white mt-4 md:mt-0">
      Login
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </Link>
);

export default LoginButton;
