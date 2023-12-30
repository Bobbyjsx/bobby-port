import CarouselSlider from "@/app/components/modules/Home/Carousel";
import Link from "next/link";

const Home = () => {
	const slides = [
		"/bob1.png",
		"/bob2.png",
		"/bob3.png",
		"/bob4.png",
	];
	return (
		<main className="w-full md:h-screen h-full flex justify-center items-center md:p-0 px-4">
			<div className="flex justify-center items-center md:flex-col flex-col">
				<div className=" flex items-center justify-center">
					<h3 className=" inline-block capitalize text-center text-2xl md:text-4xl font-bold text-zinc-800 font-serif w-full md:w-1/2">
						Hi, I&apos;m{" "}
						<span className="animate-pulse text-indigo-700">
							Godswill Ezeala
						</span>
						, a frontend developer. You can call me Bobby.
					</h3>
				</div>

				<section className="md:grid grid-cols-3 w-full place-items-center h-full">
					<div className="w-10/12 md:flex flex-col gap-y-24 hidden">
						<div className="">
							<h1 className="font-serif text-xl underline">
								intro
							</h1>
							<p className="text-zinc-800 text-sm font-sans">
								Welcome to my website! I&apos;m a
								passionate developer with a
								love for creating beautiful and
								intuitive user experiences. I&apos;m
								dedicated to delivering high-quality
								solutions that exceed expectations.
							</p>
						</div>
						<div className="">
							<h1 className="font-serif text-xl underline">
								Contact
							</h1>
							<p className="text-zinc-800 text-sm font-sans">
								Lagos, Nigeria.
								<br />
								<span className="underline decoration-indigo-300">
									ezealagodswill@gmail.com
								</span>
							</p>
						</div>
					</div>
					<div className=" ">
						<CarouselSlider images={slides} />
						<div className="flex justify-center items-center w-full">
							<Link
								href="/Contact"
								className=" border border-indigo-800 text-zinc-800 focus-visible:outline-purple-600 py-3 px-5 rounded-md gap-2 hover:gap-4 flex duration-300 delay-75 transition-all w-">
								Contact{" "}
								<span aria-hidden="true">&rarr;</span>
							</Link>
						</div>
					</div>
					<div className=" md:flex flex-col gap-y-24 hidden">
						<div className="">
							<h1 className="font-serif text-xl underline">
								years of experience
							</h1>
							<p className="text-zinc-800 text-4xl font-semibold  font-sans">
								1
								<span className="text-indigo-700 text-3xl font-semibold">
									+
								</span>
							</p>
						</div>
						<div className="">
							<h1 className="font-serif text-xl underline">
								High-Level Programming Languages
							</h1>
							<p className="text-zinc-800 text-4xl font-semibold  font-sans">
								3
								<span className="text-indigo-700 text-3xl font-semibold">
									+
								</span>
							</p>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
};

export default Home;
