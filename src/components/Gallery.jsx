import React, { useState, useEffect } from 'react';

function Gallery() {
   const [data, setData] = useState('');
 
   const generatedToken = `IGQVJXRzk3NkR6LW50Q21zQUlDbm5OcjI0V3hBVHhBVktWNTJCTU12Vm1LMGpfZAVJkMWpoc3ItbmdaX0h0dUwxLXlUZA3pTRHE1V3N5dzVoMmVCeW04UzJ0enk0NUNZAZAnNuV1lGd1p4YWFzT2hWdzd6TgZDZD`

   useEffect(() => {

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${generatedToken}`;

    fetch(url).then(res => res.json()).then(data => {
      setData(data);
    })
   }, []);

   const getInstagramImages = (data, maxToShow) => {
    if (data) {
      return data.data.map((image, index) => {
        if (index < maxToShow) {
          return (
            <div className='w-1/3' key={index}>
              <img src={image.media_url} alt={image.caption} />
            </div>
          )
        }
      })
    }
   }

  return (
    <div className='scroll-item h-screen grid  bg-slate-500'>
      {getInstagramImages(data, 3)}
    </div >
  )
}

export default Gallery
