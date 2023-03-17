import React from 'react'

function SingleVideoComp(props) {
  return (
    <div className='videoContainer m-auto mb-0 px-8 md:px-0 sm:w-11/12 md:w-2/3  lg:w-1/3 max-w-screen'>
{/*         <div className="videoCard rounded-lg mx-auto  w-fit bg-gradient-to-b from-black via-black to-slate-900">
 */}          <div className="iframeContainer relative pt-0 pb-0 m-auto  aspect-video-17/9 ">
            <iframe
              className='w-full rounded left-0 aspect-video17 ' 
              src={props.url} 
              allowFullScreen={true} 
            ></iframe>

        </div> 
          {/* //////////////////////TEXT/////////////////////// */}
          <div className="videoTextContainer rounded mt-2 pb-11 m-auto bg-gradient-to-b from-slate-200 via-slate-50 to-opacity-0 ">
            <h1 className="video-title text-slate-700 pt-1 text-center w-fit m-auto">{props.title}</h1>
            <p className='justify-center text-slate-600 text-center w-fit m-auto'>
              composer: {props.composer}
              <br></br>
              opera: {props.opera}
              <br></br>
              role: {props.role}
            </p>
          </div>
        
    </div>
  )
}

export default SingleVideoComp