import React, { useState, useEffect } from 'react';
import pic1 from '../assets/curtain.jpg';


function Gallery() {
  const [data, setData] = useState('');
  
  const generatedToken = 'IGQVJVNWtWbkZAHVHN1N0RIU2pUYWg5bHVhMmdsRFpJVVhRLUZAyd0c0SUZAJR1AtUllaNkk3Ul9HU0F5V0FSSzM2ZAmNzSlFSaGRoRnlBSHpQNk1IRjVfVEVZAMUJqMmZAoR3BjMHM5eTFhTC1PQUNfNkpXNwZDZD';
 
  useEffect(() => {

    const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${generatedToken}`;
    
    fetch(url).then(res => res.json()).then(data => {
      setData(data);
    })
  }, []);

  const getInstagramImages = (data, maxToShow) => {
    
    let imageArray = data.data; 
    
    
    /* let{media_url}=imageArray[0]; */
    
    

    if (data) {
      let onlyPics = imageArray.filter(imageArray=>imageArray.media_type==='IMAGE');
      console.log('onlyPics', onlyPics)
      return onlyPics.map((image, index) => {            
        if (index < maxToShow ) {
          return (
            <div className='returnedImg overflow-hidden aspect-square bg-cyan-400 
            transition-transform duration-500 transform scale-100
            hover:scale-110 hover:z-20 hover: hover:translate-x-1/8 hover:translate-y-1/8
              ' key={index}>
            {/*  <img src='pic1'></img> */}
              <img className=' min-bg-w-full min-h-full object-cover'src={image.media_url} />
            </div>
          )
        }
      })
    }
  }

  return (
    <div className='scroll-item relative gallery scroll-item  h-fit flex justify-center items-center bg-slate-900'>
     <div className='max-h-full max-w-full grid grid-cols-3 aspect-square grid-rows-3 gap-3 m-auto bg-slate-400
    '>
          {getInstagramImages(data, 9)}
        </div>
    </div>



  )
}

export default Gallery
