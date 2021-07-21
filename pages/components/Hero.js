import React from "react";
import Image from "next/image";
import Herodog from "../../public/images/4.png";

function Hero() {
	return (
		<div className="container flex flex-col md:flex-row md:justify-around justify-center items-center mx-auto p-10 mt-10 md:px-20 px-10">
			<div className="p-10">
				<h1 className="text-3xl md:text-7xl font-bold text-left">
					Not only people need a <span className="text-blue-600">house.</span>
				</h1>
				<p className="md:text-2xl mt-5 text-base text-left">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</p>
				<button className="px-8 py-3 mt-5 bg-blue-600 text-white hover:bg-blue-900 rounded shadow-xl">
					Make a friend
				</button>
			</div>
			<div className="p-10">
				<Image
					src={Herodog}
					alt="Picture of the hero dog"
					width={900}
					height={1100}
				/>
			</div>
		</div>
	);
}

export default Hero;
