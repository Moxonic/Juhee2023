import React, { useState, useEffect } from 'react';

console.log('TOKEN', process.env.REACT_APP_FB_TOKEN);


function Gallery() {
   const [html, setHtml] = useState('');
 
   useEffect(() => {
     const url = 'https://www.instagram.com/p/{POSTID}/';
     const endpoint = `https://graph.facebook.com/v12.0/instagram_oembed?url=${encodeURIComponent(url)}&access_token={ACCESS_TOKEN}`;
     // replace {POST_ID} with the actual Instagram post ID, and replace {ACCESS_TOKEN} with a valid access token for the Facebook Graph API
    console.log( 'endpoint',endpoint); 
     fetch(endpoint)
       .then(response => response.json())
       .then(data => setHtml(data.html));
   }, []);
 

  return (
    <div className='scroll-item h-screen grid  bg-slate-500'>
        <div dangerouslySetInnerHTML={{__html: html}} />
    </div >
  )
}

export default Gallery