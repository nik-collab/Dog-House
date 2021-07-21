import React from "react";
import Image from "next/image";
import Herodog from "../../public/images/2.png";

function Donation() {
	return (
		<div className="container flex flex-col md:flex-row justify-center md:justify-around items-center mx-auto p-10 mt-10 px-20">
			<div className="md:p-10">
				<h1 className="text-4xl md:text-6xl font-bold ">
					In addition you can make a{" "}
					<span className="text-blue-600">donation.</span>
				</h1>
				<p className="text-xl text-green-300 mt-5">Bank Name</p>

				<button className="px-8 py-3 mt-5 bg-green-400 text-white hover:bg-green-600 rounded">
					8329 8773 9939 8827 5933
				</button>
				<p className="text-xl mt-5">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s.
				</p>
			</div>
			<div className="p-10 hidden md:block">
				<Image
					src={Herodog}
					alt="Picture of the hero dog"
					width={700}
					height={900}
				/>
			</div>
		</div>
	);
}

export default Donation;
