import React, { useState } from 'react'
import SingleVideoComp from './SingleVideoComp'
import Carousel from 'nuka-carousel';
import {GiGClef} from 'react-icons/gi';


function Videos() {
  return (
    <div className='scroll-item relative flex flex-col justify-center h-screen align-middle bg-gradient-to-b from-slate-50 via-slate-300 to-slate-50'>
     {/*  <div className="clef1"><GiGClef/></div>
      <div className="clef2"><GiGClef/></div>
 */}
      <div className='videos videostripe pb-5 relative lg:top-10 bg-slate-black'>
        <div className=' carousel-container h-94 overflow-hidden'>
          <Carousel
            defaultControlsConfig={{
              nextButtonText: '>',
              prevButtonText: '<',
              nextButtonStyle: {
                height: '200px',
                left: '0rem',
                zIndex: '0'
              },
              prevButtonStyle: {
                height: '200px'
              },
              pagingDotsStyle: {
                position: 'relative',
                bottom: '-5px',
                padding: '15px',
                fill: 'gray'
              }
            }}
            animation={'slide'}
            wrapAround={true}
            slidesToShow={1}
            className=''>
              {/* /////NUMBER OF SLIDES TO ADAPT TO SCREEN WIDTH */}

            <SingleVideoComp
              url='https://www.youtube-nocookie.com/embed/TAXRUl6CxkA'
              title='Eccomi in lieta vesta'
              composer='Vincenzo Bellini (1801 - 1835)'
              opera='I Capuleti e i Montecchi'
              role='Giulietta'
            />
            <SingleVideoComp
              url='https://www.youtube-nocookie.com/embed/ot9EFjAd6ds'
              title='Strahlender Mond'
              composer='Eduard Künneke (1885-1953)'
              opera='Vetter aus Dingsda'
              role='Julia de Weert'
            />
            <SingleVideoComp

              url='https://www.youtube.com/embed/j-3itKaHtNs'
              title='Je suis encore tout étourdie'
              composer='Massenet Jules (1842 - 1912)'
              opera='Manon'
              role='Manon Lescaut'
            />
            <SingleVideoComp

              url='https://www.youtube-nocookie.com/embed/VYKR8u1wJ2Q'
              title='Adieu, notre petite table'
              composer='Massenet Jules (1842 - 1912)'
              opera='Manon'
              role='Manon Lescaut'
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Videos
