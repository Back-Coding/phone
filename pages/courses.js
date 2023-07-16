import React from 'react'
import Head from 'next/head'
import {  useState } from 'react';

const courses = (props) => {
  const [course, setCourse] = useState(props.allcourse);
  if(!course){
    return<div> Loding...</div>
  }
  return (
    <>
    <Head>
        <title>BackCoding| Courses</title>
    </Head>
    <main className="mx-20">

    <section className={`text-gray-${props.mode==='light'?900:100} body-font`}>
  <div className="container px-5 py-20 mx-auto">
    <div className="flex flex-wrap -m-4">
      
      {  course  &&course['course'].map((courseItme) => {
      // {  course  &&course['course'].map((courseItme) => {
        return(
        <div className="p-4 md:w-1/3" key={courseItme._id}>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 className="title-font text-lg font-medium mb-3">The Catalyzer</h1>
            <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div className="flex items-center flex-wrap ">
              <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
     ) })}

    </div>
  </div>
</section>

    </main>
    </>
  )
}
export async function getServerSideProps() {
  const API_KEY = 'YOUR_YOUTUBE_API_KEY';
  const channelId = 'YOUR_CHANNEL_ID';
  const maxResults = 50;

  try {
    // Step 1: Get the playlist IDs associated with the channel
    const channelResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists`,
      {
        params: {
          part: 'id',
          channelId,
          key: API_KEY,
          maxResults,
        },
      }
    );

    const playlistIds = channelResponse.data.items.map((item) => item.id);

    // Step 2: Get the details of each playlist
    const playlistDetailsResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists`,
      {
        params: {
          part: 'snippet',
          id: playlistIds.join(','),
          key: API_KEY,
          maxResults,
        },
      }
    );

    const playlists = playlistDetailsResponse.data.items;

    return {
      props: { playlists },
    };
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return {
      props: { playlists: [] },
    };
  }
}

export default courses
