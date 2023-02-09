import React from 'react'

function SingleVideoComp(props) {
  return (
    <div className='m-5 w-fit'>
        <div class="videoCard flex flex-col rounded-lg mx-auto bg-slate-300 w-fit">
          <div class="iframeContainer relative pt-0 m-auto w-fit">
            <iframe
              className='rounded-t-lg top-0 left-0 m-auto aspect-ratio-16/9' 
              src={props.url} 
              allowfullscreen="true" 
            ></iframe>

          </div>
          {/* //////////////////////TEXT/////////////////////// */}
          <div class="videoTextCcontainer px-0 py-3 w-fit m-auto">
            <h1 class="video-title text-center w-fit m-auto">{props.title}</h1>
            <p class='justify-center text-center w-fit m-auto'>
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