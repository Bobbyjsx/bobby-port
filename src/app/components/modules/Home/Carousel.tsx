import Image from "next/image";

type CarouselSliderProps = {
	images: string[];
};

const CarouselSlider: React.FC<CarouselSliderProps> = ({
	images,
}) => {
	return (
		<div className="w-full flex justify-center">
			<div className="h-full md:w-[75%] w-[70%] overflow-hidden">
				<div className="relative h-full w-[498%] animate-slide overflow-hidden flex">
					{images.map((image, index) => (
						<Image
							key={index}
							src={image}
							width={1000}
							height={1000}
							alt={`Slide ${index}`}
							className="relative left-0 float-left flex h-full w-[20%] items-center justify-center px-5 py-2"
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default CarouselSlider;
