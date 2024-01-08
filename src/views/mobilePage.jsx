import Header from "./header";
import data from '../data/data.json';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel';


function MobilePage() {
    return (
        <>
            <div>
                <Header />
                <div className="relative h-[50rem] flex flex-col justify-evenly bg-secondary" id="home">
                    <img
                        className="absolute left-0 top-[-10px] z-10 w-[18rem] h-[18rem]"
                        src="/src/assets/neuroscience.svg"
                    />
                    <img
                        className="absolute right-[-25px] z-10 w-[15rem] h-[15rem]"
                        src="/src/assets/human.svg"
                    />
                    <div className="z-40 flex flex-col items-center justify-center pt-32">
                        <img
                            src="/src/assets/brain.svg"
                            alt="logo"
                            className="h-20 w-20"
                        />
                        <div className="text-2xl">{data.header.subtitle}</div>
                        <div className="text-6xl font-bold uppercase text-primary">
                            {data.header.title}
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img
                            src="/src/assets/two_arrow_down.svg"
                            alt="logo"
                            className="relative bottom-0 h-9 w-9"
                        />
                    </div>
                </div>
                <div className="relative top-[-18.25rem]" id="about"></div>
                <div className="relative grid h-[36rem] bg-primary p-6">
                    <img
                        className="absolute left-[-7rem] top-[-5rem] z-10 w-[27rem] h-[27rem]"
                        src="/src/assets/microscope.svg"
                    />
                    <div>
                        <div className="text-2xl font-bold text-secondary">
                            {data.about.title}
                        </div>
                        <div className="mb-4 mt-2 h-2 w-12 bg-accent"></div>
                        <div className=" text-justify text-secondary">
                            {data.about.content}
                        </div>
                    </div>
                    <div className="relative z-40">
                        <img
                            src="/src/assets/tp_mugshot.png"
                            alt="logo"
                            className="absolute bottom-[-5rem] right-[-1.5rem] h-[20rem] w-[20rem]"
                        />
                    </div>
                    
                </div>
                <div className="relative top-[-5rem]" id="projects"></div>
                <div className="relative flex h-[40rem] w-full flex-col items-center bg-secondary pt-24">
                    <div className="flex flex-col items-center w-full px-14">
                        <div>
                            <div className="text-2xl font-bold">Projects</div>
                            <div className="mb-6 mt-2 h-2 w-12 bg-primary"></div>
                        </div>
                        <Carousel className="w-full">
                        <CarouselContent>
                            {data.projects.map((project) => (
                                <CarouselItem>
                                    <div className="p-1">
                                        <Card className="min-h-[20rem] w-full min-w-[20rem]">
                                            <CardHeader className="relative flex h-[10rem] flex-col justify-end rounded-t-lg p-3">
                                                <img
                                                    src={
                                                        '/src/assets/' +
                                                        project.background_img
                                                    }
                                                    className="absolute left-0 top-0 z-0 h-full w-full rounded-t-lg object-cover"
                                                />
                                                <CardTitle className="z-10 text-secondary">
                                                    {project.title}
                                                </CardTitle>
                                            </CardHeader>
                                            <CardContent className="text-ellipsis px-4 py-4">
                                                {project.content}
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    </div>
                </div>

            </div>
        
        </>

    )
}

export default MobilePage;