import React from 'react'
import SingleVideoComp from './SingleVideoComp'
import Carousel from 'nuka-carousel';
import curtain from '../assets/curtain.jpg'

function Videos() {
  return (
    <div className='h-screen bg-gradient-to-b from-slate-200 via-slate-800 to-slate-300 align-middle'>

    <div className='videos translate-y-1/2 h-94 overflow-y-clip pb-5 relative bg-slate-500'>     
        <img className='w-full h-94 min-h-full absolute' src={curtain}></img>
        
        <div className='carousel-container h-94 overflow-hidden'>

        <Carousel 
				defaultControlsConfig={{
					nextButtonText: '>',
					prevButtonText: '<',
					nextButtonStyle: {
					height:'200px',
					left:'0rem',
					zIndex:'0'},
					prevButtonStyle: {
					height:'200px'},
					pagingDotsStyle: {
            position:'absolute',
            top:'1cm',
            padding: '15px',
						fill: 'lightgray'
					}
				}}
				animation={'slide'} 
                wrapAround={true} 
                slidesToShow={1}> 
              {/*   /////NUMBER OF SLIDES TO ADAPT TO SCREEN WIDTH */}

            <SingleVideoComp 
                url='https://www.youtube-nocookie.com/embed/TAXRUl6CxkA'
                title= 'Eccomi in lieta vesta'
                composer= 'Vincenzo Bellini (1801 - 1835)'
                opera= 'I Capuleti e i Montecchi'
                role= 'Giulietta'
            />
            <SingleVideoComp 
                url='https://www.youtube-nocookie.com/embed/ot9EFjAd6ds'
                title= 'Strahlender Mond'
                composer= 'Eduard Künneke (1885-1953)'
                opera= 'Vetter aus Dingsda'
                role= 'Julia de Weert'
            />
            <SingleVideoComp 
                
                url='https://www.youtube.com/embed/j-3itKaHtNs'
                title= 'Je suis encore tout étourdie'
                composer= 'Massenet Jules (1842 - 1912)'
                opera= 'Manon'
                role= 'Manon Lescaut'
            />
            <SingleVideoComp 
                
                url='https://www.youtube-nocookie.com/embed/VYKR8u1wJ2Q'
                title= 'Adieu, notre petite table'
                composer= 'Massenet Jules (1842 - 1912)'
                opera= 'Manon'
                role= 'Manon Lescaut'
            />
          </Carousel>
        </div>
    </div> 
    </div>
  )
}

export default Videos