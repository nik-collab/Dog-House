import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { SiMinutemailer } from "react-icons/si";
import { FaMobile } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

function Footer() {
	return (
		<>
			<div className=" w-full h-auto bg-white md:flex-row flex md:justify-around flex-col items-center bg-white h-40 mx-auto p-10 mt-10 px-20 md:px-40 gap-10">
				<div className="md:p-10  md:my-10">
					<h1 className="text-xl md:text-2xl font-bold ">
						For question and suggestions.
					</h1>
					<p className="md:text-base mt-5 flex">
						<SiMinutemailer className="text-xl text-blue-600 mr-2" />{" "}
						nikches07@nik.com
					</p>
					<p className="md:text-base mt-2 flex">
						<FaMobile className="text-xl text-blue-600 mr-2" />
						+1 1392838388
					</p>
				</div>
				<div className="md:p-10  md:my-10">
					<h1 className="text-xl md:text-2xl font-bold ">
						We are waiting for your visits.
					</h1>
					<p className="md:text-base mt-5 flex">
						<HiLocationMarker className="text-xl text-blue-600 mr-2" />
						Boston Central Street, 1st (Entrance from the store)
					</p>
					<p className="md:text-base mt-2 flex">
						<HiLocationMarker className="text-xl text-blue-600 mr-2" />
						London, South Park 1st
					</p>
				</div>
			</div>

			<div className="bottom-0 justify-center flex items-center p-5 text-base font-bold ">
				<p className="flex">
					Code with <AiFillHeart className="text-xl m-1 text-red-700" />
					Made by <span className="text-blue-600 pl-2"> Nik </span>
				</p>
			</div>
		</>
	);
}

export default Footer;
