import React from "react";
import image3 from "../assets/IMG-0448.JPG";

function Landing() {
	return (
		<div className="imageAbout_container md:flex md:flex-row-reverse w-screen">
			{/* /////////////IMG///////////// */}
			<div className="scroll-item image  relative  md:max-w-[50%] h-screen">
				<div className="flex w-auto h-full">
					<img
						className="
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
					></img>
				</div>
			</div>
			{/* /////////////ABOUT/////////// */}
			<div className="scroll-item about h-screen p-5 md:p-9 flex flex-1 justify-center relative z-10 w-auto md:h-screen bg-slate-200">
				<p className="p-3 rounded-md place-self-center align-middle text-justify max-w-lg h-auto bg-slate-100 lato">
					Welcome to the homepage of Juhee Kang, a talented soprano
					with a passion for performing on the world's most
					prestigious stages.
					<br></br>
					<br></br>
					With years of experience at the Vienna State Opera and her
					current role at The Norwegian Opera and Ballet, Juhee has honed her skills to
					become a sought-after performer in her field. Her rich and
					dynamic lyrical soprano voice has captivated audiences
					everywhere she has sung, and her charismatic stage presence
					is truly unforgettable.
				</p>
			</div>
		</div>
	);
}

export default Landing;
