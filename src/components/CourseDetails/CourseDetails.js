import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import Pdf from "react-to-pdf";
const ref = React.createRef();

const CourseDetails = () => {
	// const React = require("react");
	const details = useLoaderData();
	const { img, description, title, course_id, duration, fee, rating } = details;
	console.log(details);

	return (
		<div>
			<div>
				<div className="p-6 py-12 bg-cyan-800 text-white dark:bg-violet-400 dark:text-gray-900">
					<div className="container mx-auto">
						<div className="flex flex-col lg:flex-row items-center justify-between">
							<h2 className="text-center text-6xl tracking-tighter font-bold">
								Up to
								<br className="sm:hidden" />
								70% Off
							</h2>
							<div className="space-x-2 text-center py-2 lg:py-0">
								<span>Plus free Enroll! Use code:</span>
								<span className="font-bold text-lg">SITRANG</span>
							</div>
							<a
								href="/"
								rel="noreferrer noopener"
								className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 hover:bg-cyan-500 dark:text-gray-900 dark:border-gray-400"
							>
								Get Premium
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="card card-compact font-mono mx-auto mt-20 w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<span>
						<Pdf targetRef={ref} filename="code-example.pdf">
							{({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
						</Pdf>
					</span>
					<p>{description}</p>
					<div className="card-actions justify-center mt-5">
						<div className="badge badge-outline">Duration :{duration}</div>
						<div className="badge badge-outline">Fee : ${fee}</div>
						<div className="badge badge-outline">
							{" "}
							Rating:{rating}
							<FaStar className="text-warning me-2" />
						</div>
					</div>
					<div className="card-actions justify-center">
						<Link to="/checkout">
							<button className="btn btn-primary">Get premium</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
