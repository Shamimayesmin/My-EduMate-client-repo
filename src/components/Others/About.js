import React from 'react';

const About = () => {
    return (
        <div>
            <div className="mb-24">
				<h1 className="mt-20 text-center font-bold text-fuchsia-700 font-serif">About us</h1>
				<hr className="w-1/2 text-2xl text-center font-extrabold mx-auto" />
				<div className="hero">
					
					<div className="hero-content flex-col lg:flex-row">
						<img
							src="https://i.ibb.co/TbCWLq6/study6.jpg"
							className="lg:max-w-xl sm:max-w-sm rounded-lg shadow-2xl"
							alt=""
						/>
						<div>
							<h1 className="text-4xl font-bold text-fuchsia-600 font-serif">Our Story!</h1>
							<p className="py-6 font-serif">
								The EduMate team is committed to providing our students with the
								best possible educational experience. We are passionate about
								helping our students reach their academic goals and providing
								them with the resources and support to do so. Our dedicated
								staff is constantly striving to create a learning environment
								that is engaging, encouraging, and inspiring. We recognize the
								importance of technology in today's world and are committed to
								providing the tools and resources necessary for our students to
								be successful in their educational pursuits. We are proud of our
								commitment to academic excellence and our ongoing dedication to
								our students.
							</p>
						</div>
					</div>
				</div>
			</div>
        </div>
    );
};

export default About;