import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
            
			<div className="navbar bg-red-100">
				<div className="flex-1">
					<a className="btn btn-ghost normal-case text-xl">daisyUI</a>
				</div>
				<div className="flex-none">
					<ul className="menu menu-horizontal p-0 ">
						<li className="hover:bg-teal-200 rounded-md">
							<Link to='/home'>Home</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link to='/course'>Courses</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link>FAQ</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link>Blog</Link>
						</li>
						
						<li className="hover:bg-teal-200 rounded-md">
							<Link>Register</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link>Login</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
