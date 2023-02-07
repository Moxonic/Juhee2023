import React from 'react'
import SingleVideoComp from './SingleVideoComp'

function Videos() {
  return (
    <div className='videos h-fit relative py-2 bg-slate-500'>

            <SingleVideoComp 
                url='https://www.youtube-nocookie.com/embed/VYKR8u1wJ2Q'
                title= 'Adieu, notre petite table'
                composer= 'Massenet Jules (1842 - 1912)'
                opera= 'Manon'
                role= 'Manon Lescaut'
            />
            <SingleVideoComp 
                url='https://www.youtube-nocookie.com/embed/ot9EFjAd6ds'
                title= 'Strahlender Mond'
                composer= 'Eduard Künneke (1885-1953)'
                opera= 'Vetter aus Dingsda'
                role= 'Julia de Weert'
            />
            <SingleVideoComp 
                url='https://www.youtube-nocookie.com/embed/TAXRUl6CxkA'
                title= 'Strahlender Mond'
                composer= 'Vincenzo Bellini (1801 - 1835)'
                opera= 'I Capuleti e i Montecchi'
                role= 'Giulietta'
            />
        </div> 
  )
}

export default Videos