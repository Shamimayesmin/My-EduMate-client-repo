import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";


const AllCourse = ({item}) => {
    // console.log(item)
    const {description,duration,fee,img,rating,title,_id} = item
	
	return (
		<div>
			<div className="card h-full bg-base-100 shadow-xl">
				<figure>
					<img className="w-96 sm:w-full h-64" src={img} alt="Shoes" />
				</figure>
				<div className="card-body">
					<h2 className="card-title ">
						{title}
						<div className="badge badge-secondary">NEW</div>
					</h2>
					<p>
                        {
                            description.length > 200?
                            <>{description.slice(0 ,250) + '...'}<Link className=" font-bold" to={`/courses/${_id}`}>Read More</Link></>
                            :
                            <>{description}</>
                        }
                    </p>
					<div className="card-actions justify-end">
						<div className="badge badge-outline">Duration :{duration}</div>
						<div className="badge badge-outline">Fee : ${fee}</div>
						<div className="badge badge-outline"> Rating:{rating}<FaStar className="text-warning me-2"/></div>
					</div>
                   
				</div>
			</div>
		</div>
	);
};

export default AllCourse;
