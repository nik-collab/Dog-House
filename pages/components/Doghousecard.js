import React from "react";

function Doghousecard() {
	return (
		<div className=" w-full md:px-40 px-20 flex flex-col justify-around  md:mx-auto mt-8">
			<div className=" font-bold text-left mt-10 mb-10">
				<h1 className="text-4xl md:text-6xl">
					<span className="text-blue-600">Our friends</span> who <br />
					are looking for a house.
				</h1>
			</div>
			<main className="flex w-full justify-center text-center">
				<div className="flex flex-wrap gap-10 items-center justify-around max-w-4xl mb-4 sm:w-full">
					{/* <a
						href="https://nextjs.org/docs"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
					>
						<h3 className="text-2xl font-bold">Documentation &rarr;</h3>
						<p className="mt-4 text-xl">
							Find in-depth information about Next.js features and API.
						</p>
						<h3 className="text-2xl font-bold">Learn &rarr;</h3>
						<p className="mt-4 text-xl">
							Learn about Next.js in an interactive course with quizzes!
						</p>
					</a>

					<a
						href="https://github.com/vercel/next.js/tree/master/examples"
						className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
					>
						<h3 className="text-2xl font-bold">Examples &rarr;</h3>
						<p className="mt-4 text-xl">
							Discover and deploy boilerplate example Next.js projects.
						</p>
						<h3 className="text-2xl font-bold">Deploy &rarr;</h3>
						<p className="mt-4 text-xl">
							Instantly deploy your Next.js site to a public URL with Vercel.
						</p>
					</a> */}
				</div>
			</main>
		</div>
	);
}

export default Doghousecard;
