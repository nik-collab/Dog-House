import React from "react";
import Image from "next/image";
import Aboutdog from "../../public/images/8.png";

function About() {
	return (
		<>
			<div className="md:px-20 px-10 bg-white flex md:flex-row flex-col md:justify-around justify-center items-center mx-auto p-10">
				<div className="p-10 hidden md:block">
					<Image
						src={Aboutdog}
						alt="Picture of the hero dog"
						width={700}
						height={900}
						placeholder="blur"
					/>
				</div>
				<div className="p-10">
					<h1 className="md:text-6xl font-bold text-4xl">
						About the shelter <span className="text-blue-600">Dog house.</span>
					</h1>
					<p className="md:text-xl mt-5 text-base">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</p>
					<p className="md:text-xl mt-2 text-base">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s.
					</p>
				</div>
			</div>
		</>
	);
}

export default About;
