import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const CourseDetails = () => {
    const details = useLoaderData()
    const {img,description,title,course_id,duration,fee,rating} = details
    console.log(details)

	return (
		<div>
            
			<div className="card card-compact font-mono mx-auto mt-20 w-96 bg-base-100 shadow-xl">
				<figure>
					<img src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>{description}</p>
                    <div className="card-actions justify-center mt-5">
						<div className="badge badge-outline">Duration :{duration}</div>
						<div className="badge badge-outline">Fee : ${fee}</div>
						<div className="badge badge-outline"> Rating:{rating}<FaStar className="text-warning me-2"/></div>
					</div>
					<div className="card-actions justify-center">
						<Link to={`/category/${course_id}`}><button className="btn btn-primary">Get premium</button></Link>
					</div>

				</div>
			</div>
		</div>
	);
};

export default CourseDetails;
