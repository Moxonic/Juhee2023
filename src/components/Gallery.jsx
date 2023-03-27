import React, { useState, useEffect } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


function Gallery() {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };  
  const [data, setData] = useState('');


  const generatedToken = process.env.REACT_APP_TIMECONSTRAINED_TOKEN;


  useEffect(() => {
    const url = `https://graph.instagram.com/me/media?fields=id,media_url,media_type,permalink&access_token=${generatedToken}`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data);
      })
  }, []);

  const getInstagramImages = (data, maxToShow) => {
    let imageArray = data.data;
    if (data) {
      let onlyPics = imageArray.filter(imageArray => imageArray.media_type === 'IMAGE');

      return onlyPics.map((image, index) => {
        if (index < maxToShow) {
          return (
          
                <img className='min-h-full min-w-full w-auto h-auto rounded  aspect-square object-cover ' src={image.media_url} alt='pictures from the instagram feed of soprano juhee kang'/>
           
          )
        }
        return null;
      })
    }
  }

  return (
    <div className="galleryContainer justify-center flex z-50 h-fit md:px-36 lg:px-72  max-h-screen lg:h-1/2  bg-gradient-to-b  from-slate-100  to-slate-50">
      <div className="flex justify-center h-auto p-5">
      <LightGallery
                  onInit={onInit}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  download={false}
                  thumbnail={false}
                  elementClassNames="relative aspect-square overflow-hidden grid grid-cols-3 grid-rows-3 gap-2 "
              >
              
          {getInstagramImages(data, 9)}
      </LightGallery>
      </div>
    </div>
  )
}






export default Gallery
