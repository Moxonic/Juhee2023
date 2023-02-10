import React from 'react'

function SingleVideoComp(props) {
  return (
    <div className='m-auto mt-5 mb-0 w-fit max-w-screen'>
        <div className="videoCard rounded-lg mx-auto  w-fit bg-gradient-to-b from-black via-black to-slate-900">
          <div className="iframeContainer relative pt-0 m-auto w-fit">
            <iframe
              className='max-w-full rounded-t-lg top-0 left-0 m-auto aspect-ratio-16/9' 
              src={props.url} 
              allowFullScreen={true} 
            ></iframe>

          </div>
          {/* //////////////////////TEXT/////////////////////// */}
          <div className="videoTextCcontainer px-0 py-3 w-fit m-auto">
            <h1 className="video-title text-slate-300 text-center w-fit m-auto">{props.title}</h1>
            <p className='justify-center text-slate-400 text-center w-fit m-auto'>
              composer: {props.composer}
              <br></br>
              opera: {props.opera}
              <br></br>
              role: {props.role}
            </p>
          </div>
        </div>
    </div>
  )
}

export default SingleVideoComp