import React from 'react'

function SingleVideoComp(props) {
  return (
    <div>
      <div class="videos-list">
            <div class="video-item flex-col m-2 bg-slate-600">
                
                <div class="video-item-iframe pt-5">
                    <iframe className=''src= {props.url} allowfullscreen="true" >
                    </iframe>
                </div>
                <div class="videoText flex-col px-9 py-3">     
                  <h1 class="video-title text-center ">{props.title}</h1>
                  <p class='justify-center text-center'>
                    composer: {props.composer} 
                      <br></br>
                    first performed 1921
                      <br></br>
                    opera: {props.opera}
                      <br></br>
                    role: {props.role}
                  </p>  
                </div>
            </div>
      </div>
    </div>
  )
}

export default SingleVideoComp