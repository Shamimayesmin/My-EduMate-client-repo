import React from "react";

const Others = () => {
	return (
		<div>
            <h3 className="text-center text-4xl font-bold text-fuchsia-700 mt-20 font-serif">
            Find the path that’s right for you
            </h3>
            <hr className="w-1/2 text-xl text-center font-extrabold mx-auto mt-3" />
            <div className=" h-full gap-4 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-5">
			

			<div class="group relative block bg-black">
				<img
					alt="Developer"
					src="https://i.ibb.co/f24WdMh/study12.jpg"
					class="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-25 sm:w-full lg:96"
				/>

				<div class="relative p-8">
					

					<p class="text-2xl font-bold text-white">Graduate studies</p>

					<div class="mt-64">
						<div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-sm text-white">
                            Graduate students are leading the way to discoveries that matter to Canadians. Challenge yourself, expand your horizons and continue your education in one of our many graduate programs.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="group relative block bg-black">
				<img
					alt="Developer"
					src="https://i.ibb.co/kGRN5ct/study8.jpg "
					class="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-25 sm:w-full lg:96"
				/>

				<div class="relative p-8">
					

					<p class="text-2xl font-bold text-white">Undergraduate studies</p>

					<div class="mt-64">
						<div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-sm text-white">
                            There are many program options available to you within our culturally rich and diverse community—whether you know the direction you want to go or are figuring out where your passion lies.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="group relative block bg-black">
				<img
					alt="Developer"
					src="https://i.ibb.co/RPPG7MP/study2.jpg"
					class="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity group-hover:opacity-25 sm:w-full lg:96"
				/>

				<div class="relative p-8">
					{/* <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
						Developer
					</p> */}

					<p class="text-2xl font-bold text-white">Programs and courses</p>

					<div class="mt-64">
						<div class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
							<p class="text-sm text-white">
                            We are here to help you keep learning and move forward in your life and in your career. Our programs and courses draw upon the expertise of the university, industry and community with many 100 per cent online options. Find the courses and programs for you today.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>
	);
};

export default Others;
