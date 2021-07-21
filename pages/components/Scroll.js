import React from "react";
import { GiOpenedFoodCan } from "react-icons/gi";
import { GiBerriesBowl } from "react-icons/gi";
import { AiFillMedicineBox } from "react-icons/ai";
import { GiSpikedCollar } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { GiMedicinePills } from "react-icons/gi";
import { FaBaseballBall } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

function Scroll() {
	return (
		<div className=" w-full md:px-40 px-20 flex flex-col  bg-white justify-around md:p-10  md:mx-auto mt-8">
			<div className="md:text-6xl text-4xl font-bold text-left md:text-right mt-10 mb-10">
				<h1>
					Than you can <span className="text-blue-600">help our shelter</span>{" "}
				</h1>
			</div>
			<div className="flex flex-wrap mt-10 gap-10 items-center mx-auto justify-around max-w-4xl mb-4 sm:w-full">
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<GiOpenedFoodCan className="text-2xl mr-2" />
						Pet Food
					</p>
				</a>
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<GiBerriesBowl className="text-2xl mr-2" />
						bowls and cups
					</p>
				</a>
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<AiFillMedicineBox className="text-2xl mr-2" />
						Medicine
					</p>
				</a>

				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<GiSpikedCollar className="text-2xl mr-2" />
						Collars
					</p>
				</a>

				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<AiFillHome className="text-2xl mr-2" />
						Sleeping area
					</p>
				</a>
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<GiMedicinePills className="text-2xl mr-2" />
						Vitamins
					</p>
				</a>
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<FaBaseballBall className="text-2xl mr-2" />
						Toys
					</p>
				</a>
				<a
					href="#"
					className="p-6  text-left border hover:bg-white hover:shadow-xl hover:border-none w-auto rounded-xl hover:text-blue-600 focus:text-blue-600"
				>
					<p className=" text-xl flex justify-center">
						<FaTruck className="text-2xl mr-2" />
						Transportation
					</p>
				</a>
			</div>
		</div>
	);
}

export default Scroll;
