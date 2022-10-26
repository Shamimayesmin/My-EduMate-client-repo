import React from "react";

const Faq = () => {
	return (
		<div>
			<section className="dark:bg-gray-800 dark:text-gray-100 mb-40">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl mb-10">
						Frequently Asked Questions
					</h2>
					
					<div className="space-y-4">
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								What is cors?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-justify">
								Cross-Origin Resource Sharing (CORS) is an HTTP-based security
								mechanism controlled and enforced by the client (web browser).
								It allows a service (API) to indicate any origin other than its
								own from which the client can request resources. It has been
								designed in response to the same-origin policy (SOP) that
								restricts how a website (HTML document or JS script) loaded by
								one origin can interact with a resource from another origin.
								CORS is used to explicitly allow some cross-origin requests
								while rejecting others.
								<br />
								<strong>How does it works?</strong>
								Everything starts on the client side, before sending the main
								request. The client sends a CORS preflight request to a service
								for resources with parameters in HTTP headers (CORS headers).
								The service responses using the same headers with different or
								the same values. The client decides, based on a CORS preflight
								response, if he can or cannot send the main request to the
								service. The web browser (client) will throw an error if the
								response does not meet the requirements of CORS preflight.
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								How does private route works?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-justify">
								The react private route component renders child components
								(children) if the user is logged in. If not logged in the user
								is redirected to the /login page with the return url passed in
								the location state property.Private Routes in React Router (also
								called Protected Routes) require a user being authorized to
								visit a route (read: page). So if a user is not authorized for a
								specific page, they cannot access it. The most common example is
								authentication in a React application where a user can only
								access the protected pages when they are authorized (which means
								in this case being authenticated). Authorization goes beyond
								authentication though. For example, a user can also have roles
								and permissions which give a user access to specific areas of
								the application.{" "}
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								What is node?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-center">
								Node.js uses the “Single Threaded Event Loop” architecture to
								handle multiple clients at the same time. To understand how this
								is different from other runtimes, we need to understand how
								multi-threaded concurrent clients are handled in languages like
								Java.In a multi-threaded request-response model, multiple
								clients send a request, and the server processes each one before
								sending the response back. However, multiple threads are used to
								process concurrent calls. These threads are defined in a thread
								pool, and each time a request comes in, an individual thread is
								assigned to handle it.
								<br />
								<strong>How is works?</strong>
								Node.js accepts the request from the clients and sends the
								response, while working with the request node.js handles them
								with a single thread. To operate I/O operations or requests
								node.js use the concept of threads. Thread is a sequence of
								instructions that the server needs to perform. It runs parallel
								on the server to provide the information to multiple clients.
								Node.js is an event loop single-threaded language. It can handle
								concurrent requests with a single thread without blocking it for
								one request.
							</p>
						</details>
						<details className="w-full border rounded-lg">
							<summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
								Why are you using firebase?
							</summary>
							<p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400 text-center">
								Firebase helps you develop high-quality apps, grow your user
								base, and earn more money. Each feature works independently, and
								they work even better together.. <br />
								<strong>
									What other options do you have to emplement authentication?
								</strong>
								<br />
								Authentication: Lets start by listing the various ways through
								which we can achieve authentication, Cookie-Based authentication
								Token-Based authentication Third party access(OAuth, API-token)
								OpenId SAML
							</p>
						</details>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Faq;
