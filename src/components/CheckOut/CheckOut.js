import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const CheckOut = () => {
	const showCheck = useLoaderData();
	const { img, title, fee } = showCheck;
	console.log(showCheck);
	return (
		<div className="">
			<div className="flex flex-col justify-center mx-auto mt-10 rounded-lg bg-orange-100 max-auto max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
				<h2 className="text-xl font-semibold">Checkout Your Course</h2>
				<ul className="flex flex-col divide-y divide-gray-700">
					<li className="flex flex-col py-6 sm:flex-row sm:justify-between">
						<div className="flex w-full space-x-2 sm:space-x-4">
							<img
								className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
								src={img}
								alt=""
							/>
							<div className="flex flex-col justify-between w-full pb-4">
								<div className="flex justify-between w-full pb-2 space-x-2">
									<div className="space-y-1">
										<h3 className="text-lg font-semibold leading-snug sm:pr-8">
											{title}
										</h3>
									</div>
									<div className="text-right">
										<p className="text-lg font-semibold">75.50 $</p>
										<p className="text-sm line-through dark:text-gray-600">
											{fee}
										</p>
									</div>
								</div>
								<div className="flex text-sm divide-x">
									<button
										type="button"
										className="flex items-center px-2 py-1 pl-0 space-x-1"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											className="w-4 h-4 fill-current"
										>
											<path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
											<rect width="32" height="200" x="168" y="216"></rect>
											<rect width="32" height="200" x="240" y="216"></rect>
											<rect width="32" height="200" x="312" y="216"></rect>
											<path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
										</svg>
										<span>Remove</span>
									</button>
									<button
										type="button"
										className="flex items-center px-2 py-1 space-x-1"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 512 512"
											className="w-4 h-4 fill-current"
										>
											<path d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>
										</svg>
										<span>Add to favorites</span>
									</button>
								</div>
							</div>
						</div>
					</li>
				</ul>
				<div className="space-y-1 text-right">
					<p>
						Total amount:
						<span className="font-semibold">265.44 $</span>
					</p>
				</div>
				<div className="flex justify-end space-x-4">
					<Link to="/course">
						<button
							type="button"
							className="px-6 py-2 border bg-cyan-400 hover:bg-blue-500 rounded-md dark:border-violet-400"
						>
							Back
							<span className="sr-only mr-2 sm:not-sr-only">to course</span>
						</button>
					</Link>
					<button
						type="button"
						className="px-6 py-2 bg-red-400 hover:bg-orange-500 border rounded-md dark:bg-violet-400 dark:text-gray-900 dark:border-violet-400"
					>
						<span className="sr-only sm:not-sr-only">Continue to</span>Checkout
					</button>
				</div>
			</div>

			<section className="p-6 mt-10 bg-slate-400 dark:bg-gray-800 dark:text-gray-50">
				<form
					novalidate=""
					action=""
					className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
				>
					<fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
						<div className="space-y-2 col-span-full lg:col-span-1">
							<p className="font-medium text-2xl">Confirm Your Order</p>
							<p className="">
								Fill up checkout form to comfirm your oder and submit the form
							</p>
						</div>
						<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
							<div className="col-span-full sm:col-span-3">
								<label for="firstname" className="text-sm">
									First name
								</label>
								<input
									id="firstname"
									type="text"
									placeholder="First name"
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label for="lastname" className="text-sm">
									Last name
								</label>
								<input
									id="lastname"
									type="text"
									placeholder="Last name"
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
								/>
							</div>
							<div className="col-span-full sm:col-span-3">
								<label for="email" className="text-sm">
									Email
								</label>
								<input
									id="email"
									type="email"
									placeholder="Email"
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
								/>
							</div>
							<div className="col-span-full">
								<label for="address" className="text-sm">
									Address
								</label>
								<input
									id="address"
									type="text"
									placeholder=""
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-2"
								/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label for="city" className="text-sm">
									City
								</label>
								<input
									id="city"
									type="text"
									placeholder=""
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-3"
								/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label for="state" className="text-sm">
									State / Province
								</label>
								<input
									id="state"
									type="text"
									placeholder=""
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-3"
								/>
							</div>
							<div className="col-span-full sm:col-span-2">
								<label for="zip" className="text-sm">
									ZIP / Postal
								</label>
								<input
									id="zip"
									type="text"
									placeholder=""
									className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900 p-3"
								/>
							</div>
						</div>
					</fieldset>
					
				</form>
			</section>
		</div>
	);
};

export default CheckOut;
