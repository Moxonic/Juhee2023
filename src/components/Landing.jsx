import React from 'react'
import image3 from '../assets/IMG-0448.JPG'

function Landing() {
  return (
        <div className='landing relative h-screen'>

          <div className='relative overflow-hidden h-11'>
            <img className='fixed min-h-screen sm:-top-32 md:-top-12 object-cover  w-auto' src={image3}></img>
          </div>

        </div>
  )
}

export default Landing