import React from 'react'

function SingleVideoComp(props) {
  return (
    <div className='m-5 mb-0 w-fit max-w-screen'>
        <div className="videoCard flex flex-col rounded-lg mx-auto bg-slate-300 w-fit">
          <div className="iframeContainer relative pt-0 m-auto w-fit">
            <iframe
              className='max-w-full rounded-t-lg top-0 left-0 m-auto aspect-ratio-16/9' 
              src={props.url} 
              allowFullScreen={true} 
            ></iframe>

          </div>
          {/* //////////////////////TEXT/////////////////////// */}
          <div className="videoTextCcontainer px-0 py-3 w-fit m-auto">
            <h1 className="video-title text-center w-fit m-auto">{props.title}</h1>
            <p className='justify-center text-center w-fit m-auto'>
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