import React from "react";
import image3 from "../assets/IMG-0448.jpeg";


function Landing() {
	return (
		<div className="imageAbout_container md:flex md:flex-row-reverse w-screen bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50">
			
			{/* /////////////IMG///////////// */}
			<div className="scroll-item image relative bottom-0 md:max-w-[45%] min-w-[40%] h-screen">
				<div className="flex w-auto h-full justify-center">
					<div className="imgContainer">
						<img
							className="
							left-0
							justify-center 
							min-h-screen  
							object-cover 
							md:h-auto 
							md:w-full 
							md:top-0             
							lg:h-full 
							lg:w-auto 
							transform 
							origin-center
							lg:translate-x-0"
							src={image3}
						>
							
						</img>
					</div>


				</div>
			</div>
			{/* /////////////ABOUT/////////// */}
			<div className="scroll-item about h-full md:h-screen px-5 py-6 md:px-9  flex flex-1 justify-center relative z-10 w-auto bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50">
				<div className="bg-slate-50 flex flex-col justify-center mb-12">
	        		<h1 className='prata p-5 absolut text-center text-3xl  text-slate-700'>Juhee Manon Kang</h1>
					<p className="p-5  lg:px-12 leading-relaxed text-slate-700 place-self-center lg:text-sm  text-justify max-w-xl md:max-h-screen  lato">
						Welcome to my official website! My name is Juhee Manon Kang, 
						and I am a lyrical soprano who has had the privilege of performing on some of the most prestigious stages in the world.
						<br></br><br></br>
						I was born in Vienna, a city that has always held a special place in my heart, 
						and spent much of my childhood in South Korea. From a young age, I knew that music was my calling,
						and I worked tirelessly to hone my skills and develop my unique sound.
						Over the years, I have had the incredible opportunity to perform as both a soloist and a choir member 
						in productions of the Wiener Staatsoper, which was an absolute dream come true. I have also been fortunate 
						enough to become a proud member of the Norwegian Opera and Ballet, where I continue to be inspired and challenged every single day.
						<br></br><br></br>
						This website is my way of sharing my journey with all of you, and I am thrilled to be able to 
						connect with fans and music lovers from around the world. 
						Thank you so much for visiting, and I hope that my music brings you as much joy as it brings me.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Landing;
