import React from 'react'
import SingleVideoComp from './SingleVideoComp'
import Carousel from 'nuka-carousel';
import curtain from '../assets/curtain.jpg'

function Videos() {
  return (
    <div className='videos pb-5 relative bg-slate-500'>
{/*         <div className='h-48 w-screen translate-y-[27%] absolute bg-slate-600'></div> 
 */}        
 <img className='h-full w-screen absolute' src={curtain}></img>
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
  )
}

export default Videos