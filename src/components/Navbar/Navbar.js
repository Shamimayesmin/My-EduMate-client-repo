import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
			.then((result) => {})
			.catch((error) => console.error(error));
	};

	return (
		<div>
			{/* <div className="navbar sm:w-full bg-red-100">
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
							<Link to='/faq'>FAQ</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link to='/blog'>Blog</Link>
						</li>
						
						<li className="hover:bg-teal-200 rounded-md">
							<Link to='register'>Register</Link>
						</li>
						<li className="hover:bg-teal-200 rounded-md">
							<Link to='/login'>Login</Link>
						</li>
					</ul>
				</div>
			</div> */}

			<header className="p-4 bg-red-100 dark:bg-gray-800 dark:text-gray-100">
				<div className="container flex justify-between h-16 mx-auto">
					<Link
						rel="noopener noreferrer"
						tp="/"
						aria-label="Back to homepage"
						className="flex items-center p-2 text-3xl font-bold"
					>
						<svg
							src="https://i.ibb.co/jksDx50/logo1.jpg"
							fill="currentColor"
							viewBox="0 0 32 32"
							className="w-8 h-8 dark:text-violet-400 "
						>
							{/* <path d="M27.912 7.289l-10.324-5.961c-0.455-0.268-1.002-0.425-1.588-0.425s-1.133 0.158-1.604 0.433l0.015-0.008-10.324 5.961c-0.955 0.561-1.586 1.582-1.588 2.75v11.922c0.002 1.168 0.635 2.189 1.574 2.742l0.016 0.008 10.322 5.961c0.455 0.267 1.004 0.425 1.59 0.425 0.584 0 1.131-0.158 1.602-0.433l-0.014 0.008 10.322-5.961c0.955-0.561 1.586-1.582 1.588-2.75v-11.922c-0.002-1.168-0.633-2.189-1.573-2.742zM27.383 21.961c0 0.389-0.211 0.73-0.526 0.914l-0.004 0.002-10.324 5.961c-0.152 0.088-0.334 0.142-0.53 0.142s-0.377-0.053-0.535-0.145l0.005 0.002-10.324-5.961c-0.319-0.186-0.529-0.527-0.529-0.916v-11.922c0-0.389 0.211-0.73 0.526-0.914l0.004-0.002 10.324-5.961c0.152-0.090 0.334-0.143 0.53-0.143s0.377 0.053 0.535 0.144l-0.006-0.002 10.324 5.961c0.319 0.185 0.529 0.527 0.529 0.916z"></path>
							<path d="M22.094 19.451h-0.758c-0.188 0-0.363 0.049-0.515 0.135l0.006-0.004-4.574 2.512-5.282-3.049v-6.082l5.282-3.051 4.576 2.504c0.146 0.082 0.323 0.131 0.508 0.131h0.758c0.293 0 0.529-0.239 0.529-0.531v-0.716c0-0.2-0.11-0.373-0.271-0.463l-0.004-0.002-5.078-2.777c-0.293-0.164-0.645-0.26-1.015-0.26-0.39 0-0.756 0.106-1.070 0.289l0.010-0.006-5.281 3.049c-0.636 0.375-1.056 1.055-1.059 1.834v6.082c0 0.779 0.422 1.461 1.049 1.828l0.009 0.006 5.281 3.049c0.305 0.178 0.67 0.284 1.061 0.284 0.373 0 0.723-0.098 1.027-0.265l-0.012 0.006 5.080-2.787c0.166-0.091 0.276-0.265 0.276-0.465v-0.716c0-0.293-0.238-0.529-0.529-0.529z"></path> */}
						</svg>
						<img
							alt=""
							className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
							src="https://i.ibb.co/jksDx50/logo1.jpg"
						/>
						EduMate
					</Link>
					<ul className="items-stretch hidden space-x-3 md:flex">
						<li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/home"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
							>
								Home
							</Link>
						</li>
						<li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/course"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
							>
								Courses
							</Link>
						</li>
						<li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/faq"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
							>
								FAQ
							</Link>
						</li>
						<li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/blog"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
							>
								Blog
							</Link>
						</li>
						{/* <li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/register"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
							>
								Register
							</Link>
						</li>
						<li className="flex">
							<Link
								rel="noopener noreferrer"
								to="/login"
								className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
							>
								Login
							</Link>
						</li> */}

						<>
							{user?.uid ? (
								<>
									<span>{user?.displayName}</span>
									<button onClick={handleLogOut} variant="light">
										Log Out
									</button>
								</>
							) : (
								<>
									<li className="flex">
										<Link
											rel="noopener noreferrer"
											to="/register"
											className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
										>
											Register
										</Link>
									</li>
									<li className="flex">
										<Link
											rel="noopener noreferrer"
											to="/login"
											className="flex items-center hover:bg-teal-400 rounded-lg px-4 -mb-1 border-b-2 dark:border-transparent"
										>
											Login
										</Link>
									</li>
								</>
							)}
						</>

						
					{/* userprofile photo showing */}
						<>
						{
							user?.photoURL?
							<img
							alt=""
							className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
							src={user?.photoURL}
							/>
							:
							<FaUser className="mt-6"></FaUser>
						}
						
						</>
						
					</ul>

					<label className="swap swap-rotate">
						{/* <!-- this hidden checkbox controls the state --> */}
						<input type="checkbox" />

						<svg
							className="swap-on fill-current w-10 h-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
						</svg>

						{/* <!-- moon icon --> */}
						<svg
							className="swap-off fill-current w-10 h-10"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
						>
							<path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
						</svg>
					</label>

					<button className="flex justify-end p-4 md:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</button>
				</div>
			</header>
		</div>
	);
};

export default Navbar;
