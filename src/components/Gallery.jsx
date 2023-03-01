import React, { useState, useEffect } from 'react';
import {AiOutlineInstagram} from 'react-icons/ai'

function Gallery() {
  const [data, setData] = useState('');
  const [zoomIndex, setZoomIndex] = useState(-1);

  const generatedToken = process.env.REACT_APP_TIMECONSTRAINED_TOKEN;

  function zoomSet(index) {
    setZoomIndex(index === zoomIndex ? -1 : index);
  };

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
            <button
              className='btn'
              onClick={() => zoomSet(index)}
              key={index}
            >
              <div
                className={`returnedImg overflow-hidden aspect-square transition-transform duration-500 transform 
                  ${zoomIndex === index ? 'scale-10 absolute z-20 left-0 top-0 max-w-screen max-h-screen ' : 'scale-100'}
                  hover:scale-110 hover:z-20 hover: translate-x-1/8 hover:translate-y-1/8`}
              >
                <img className='min-w-full min-h-full object-cover' src={image.media_url} alt='pictures from the instagram feed of soprano juhee kang'/>
              </div>
            </button>
          )
        }
      })
    }
  }

  return (
    <div
      className='gallery  scroll-item relative flex flex-col  justify-center items-center 
        bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50'
    >
      <div className='max-h-4/6 max-w-5/6 min--mb-px relative grid grid-cols-3 aspect-square grid-rows-3 gap-3 m-auto min-m-1'>
        {getInstagramImages(data, 9)}
      </div>
    </div>
  )
}






export default Gallery
