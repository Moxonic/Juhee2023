import React from 'react'
import SingleVideoComp from './SingleVideoComp'
import Carousel from 'nuka-carousel';

function Videos() {
  return (
    <div className='videos pb-5 h-fit relative bg-slate-500'>
        <Carousel 
				defaultControlsConfig={{
					nextButtonText: '>',
					prevButtonText: '<',
					nextButtonStyle: {borderRadius: '20px 50px 50px 20px',
					height:'inherit',
					left:'0rem',
					zIndex:'0'},
					prevButtonStyle: {borderRadius: '50px 20px 20px 50px',
					height:'inherit'},
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