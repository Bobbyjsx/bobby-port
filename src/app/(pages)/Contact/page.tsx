import InfoDetails from "@/app/components/modules/Contact/InfoDetails";
import InputGroup from "@/app/components/modules/Contact/InputGroup";

const Page = () => {
	return (
		<div className="text-zinc-800 w-full h-full flex flex-col justify-center items-center gap-y-11 max-h-[1200px]- max-h-max lg:py-16 mb-10 px-10">
			<div className="w-44 flex flex-col justify-start items-start h-16">
				<h2 className="text-3xl font-bold font-serif">
					Contact Me
				</h2>
				<p className="text-gray-400">Get in touch</p>
			</div>
			<div className="grid grid-rows-2 md:grid-cols-2 md:space-x-10 place-items-center gap-y-6">
				<InfoDetails />
				<InputGroup />
			</div>
		</div>
	);
};

export default Page;
