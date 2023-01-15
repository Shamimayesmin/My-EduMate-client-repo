import React, { useContext, useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navbar = () => {
	const [theme, setTheme] = useState("light-theme");
	const { user, logOut } = useContext(AuthContext);

	const handleLogOut = () => {
		logOut()
		.then((result) => {})
		.catch((error) => console.error(error));
	};

	// toggle theme
	const toggleTheme = () =>{
		// console.log('click')
		if(theme === "dark-theme"){
			setTheme('light-theme')
		}
		else{
			setTheme("dark-theme")
		}
	}

	useEffect( () =>{
		document.body.className = theme;
	},[theme])

	return (
		<div>

			<header className="p-4 bg-light shadow-lg dark:bg-gray-800 dark:text-gray-100">
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
							
						</svg>
						<img
							alt=""
							className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800"
							src="https://i.ibb.co/jksDx50/logo1.jpg"
						/>
						<h2 className="text-fuchsia-700">EduMate</h2>
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
						

						<>
							{user?.uid ? (
								<>
									<button className="hover:bg-teal-400 rounded-r-lg" onClick={handleLogOut} variant="light">
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
							className="w-12 h-12 mr-2 ring-1 rounded-full ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800 tooltip"
							data-tip={user?.displayName}
							src={user?.photoURL}
							/> 
							:
							<FaUser className="mt-6"></FaUser>
						}
						
						</>

					
						<label className="swap swap-rotate">
						{/* <!-- this hidden checkbox controls the state --> */}
						<input onClick={() =>toggleTheme()} type="checkbox" />

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
						
					</ul>

					

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
