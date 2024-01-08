import Header from './header';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '../components/ui/carousel';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '../components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion';
import data from '../data/data.json';

function MainPage() {
    return (
        <>
            <div>
                <Header />
                <div
                    className="relative flex h-[54rem] flex-col justify-evenly bg-secondary"
                    id="mainpage"
                >
                    <img
                        className="absolute left-0 top-0 z-10"
                        src="/src/assets/neuroscience.svg"
                    />
                    <img
                        className="absolute bottom-[-4rem] right-0 z-10"
                        src="/src/assets/human.svg"
                    />
                    <div className="z-40 flex flex-col items-center justify-center pt-32">
                        <img
                            src="/src/assets/brain.svg"
                            alt="logo"
                            className="h-20 w-20"
                        />
                        <div className="text-2xl">{ data.header.subtitle }</div>
                        <div className="text-8xl font-bold uppercase text-primary">
                            { data.header.title }
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
                <div className="relative top-[-18.25rem]" id="About"></div>
                <div className="relative grid h-[29rem] grid-cols-2 bg-primary">
                    <img
                        className="absolute bottom-[-12rem] left-[-2rem] z-10"
                        src="/src/assets/microscope.svg"
                    />
                    <div className="relative z-40">
                        <img
                            src="/src/assets/tp_mugshot.png"
                            alt="logo"
                            className="absolute bottom-0 right-0 h-[34rem] w-[34rem]"
                        />
                    </div>
                    <div className="ml-16 pt-14">
                        <div className="text-5xl font-bold text-secondary">
                            { data.about.title }
                        </div>
                        <div className="mb-8 mt-2 h-2 w-12 bg-accent"></div>
                        <div className="w-2/3 text-justify text-secondary">
                            { data.about.content }
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="Projects"></div>
                <div className="relative flex h-[43rem] flex-col items-center bg-secondary pt-16">
                    <img
                        className="absolute bottom-[-10rem] right-[-10rem] z-10"
                        src="/src/assets/chemistry.svg"
                    />
                    <div className="flex flex-col items-center">
                        <div>
                            <div className="text-5xl font-bold">Projects</div>
                            <div className="mb-6 mt-2 h-2 w-12 bg-primary"></div>
                        </div>
                        <div className="z-40 mx-[10rem] my-10 grid grid-cols-3 gap-14">
                            <Card className="flex h-[30rem] flex-col rounded-xl">
                                <CardHeader className="relative overflow-hidden p-0">
                                    <img
                                        src="/src/assets/background.jpg"
                                        alt="project image"
                                        className="h-full w-full rounded-t-xl object-cover"
                                    />
                                    <CardTitle className="absolute bottom-2 z-40 m-2 text-secondary">
                                        Role of extrasynaptic NMDA receptors and
                                        stress resilience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="mt-6">
                                    Close to 30% NMDA receptors, which are
                                    important in synaptic plasticity and
                                    neuronal survival, are located outside
                                    synapses. We found that activating
                                    extrasynaptic NMDA receptors could enhance
                                    stress resilience. Using nanotechnology and
                                    genetic approaches to manipulate
                                    extrasynaptic NMDA receptor function, we
                                    will examine mechanisms underlying the
                                    pro-resilience effects of extrasynaptic NMDA
                                    receptors.
                                </CardContent>
                            </Card>
                            <Card className="flex h-[30rem] flex-col rounded-xl">
                                <CardHeader className="relative overflow-hidden p-0">
                                    <img
                                        src="/src/assets/background.jpg"
                                        alt="project image"
                                        className="h-full w-full rounded-t-xl object-cover"
                                    />
                                    <CardTitle className="absolute bottom-2 z-40 m-2 text-secondary">
                                        Interneuron function and stress
                                        resilience
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="mt-6">
                                    The hyperactivity of the hippocampus has
                                    been associated with stress susceptibility.
                                    Using electrophysiology and in vivo calcium
                                    imaging techniques, we will test a
                                    hypothesis that hippocampal hyperactivity in
                                    stress susceptible animals is related to
                                    impaired interneuron function.
                                </CardContent>
                            </Card>
                            <Card className="flex h-[30rem] flex-col rounded-xl">
                                <CardHeader className="relative overflow-hidden p-0">
                                    <img
                                        src="/src/assets/background.jpg"
                                        alt="project image"
                                        className="h-full w-full rounded-t-xl object-cover"
                                    />
                                    <CardTitle className="absolute bottom-2 z-40 m-2 text-secondary">
                                        Cannabidiol and hippocampal
                                        hyperactivity in Alzheimer’s disease
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="mt-6">
                                    A prodromal change in the hippocampus before
                                    amyloid deposition is an increase in
                                    neuronal excitability. Using a mouse model
                                    of amyloid deposition, we will examine the
                                    effect of cannabidiol, a non-psychoactive
                                    compound derived from Cannabis plants, on
                                    restoring normal hippocampal function.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="Team"></div>
                <div className="h-[40rem] bg-secondary">
                    <div className="no-scrollbar flex w-full overflow-x-scroll pt-14">
                        <div className="relative left-[20%] flex h-[36rem] flex-nowrap items-center justify-center gap-[2rem] 2xl:left-[30%]">
                            <div className="absolute left-[-15%] h-[36rem] w-[29rem] rounded-xl bg-primary px-10 py-20">
                                <div className="text-5xl font-bold text-secondary">
                                    Meet the<br></br>Team
                                </div>
                                <div className="mb-6 mt-2 h-2 w-12 bg-accent"></div>
                            </div>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                            <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
                                <img
                                    src="/src/assets/background.jpg"
                                    alt="person face"
                                    className="h-full w-full rounded-xl object-cover"
                                />
                                <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                <div className="absolute bottom-6 left-4 text-secondary">
                                    Lorem Ipsum
                                </div>
                                <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                    Role
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="publications"></div>
                <div className="flex h-[38rem] flex-col items-center bg-secondary pt-16">
                    <div>
                        <div className="text-5xl font-bold">Publications</div>
                        <div className="mb-10 mt-2 h-2 w-12 bg-primary"></div>
                    </div>
                    <Accordion type="single" collapsible className="w-[60rem]">
                        {
                            data.publications.map((pub, index) => (
                                <AccordionItem value={'item-' + index}>
                                    <AccordionTrigger>
                                        {pub.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        {pub.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
                <div className="relative top-[-5rem]" id="News"></div>
                <div className="relative flex h-[39rem] flex-col items-center bg-primary pt-16">
                    <img
                        className="absolute bottom-0 right-0 z-10"
                        src="/src/assets/test-tube.svg"
                    />
                    <div
                        className="absolute left-0 top-0 h-0 w-0 
                        border-b-[39rem] border-l-[20rem] 
                        border-r-[20rem] border-b-transparent 
                        border-l-secondary border-r-transparent"
                    ></div>
                    <div>
                        <div className="text-5xl font-bold text-secondary">
                            News
                        </div>
                        <div className="mb-10 mt-2 h-2 w-12 bg-accent"></div>
                    </div>
                    {
                        data.news.length > 0 ? (
                            <Carousel className="w-[43rem]">
                                <CarouselContent>
                                    { data.news.map((_, index) => (
                                        <CarouselItem key={index}>
                                            <div className="p-1">
                                                <Card>
                                                    <CardContent className="flex h-[24rem] items-center justify-center p-6">
                                                        <span className="text-4xl font-semibold">
                                                            {index + 1}
                                                        </span>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                            </Carousel>
                        ) : (
                            <div className="text-2xl font-bold text-secondary">
                                No news yet
                            </div>
                        )
                    }
                </div>
                <div
                    className="relative grid h-[17rem] grid-cols-2 border-y border-secondary bg-primary"
                    id="Contact"
                >
                    <img
                        className="absolute right-0 top-0 z-10"
                        src="/src/assets/test-tube 1.svg"
                    />
                    <div className="flex flex-col items-center place-self-center">
                        <div className="text-2xl font-bold text-secondary">
                            Contact Me
                        </div>
                        <div className="mt-2 text-center text-secondary">
                            If you are interested to collaborate, learn more or
                            join our lab,<br></br>send me a message using the
                            information on the right.
                        </div>
                    </div>
                    <div className="flex flex-col justify-center gap-4 pl-16">
                        <div className="flex items-center gap-5">
                            <a
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary"
                                href="mailto:takpan.wong@mcgill.ca"
                            >
                                <Mail className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href="mailto:takpan.wong@mcgill.ca"
                            >
                                takpan.wong@mcgill.ca
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <a
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary"
                                href="tel:+5147616131;2929"
                            >
                                <Phone className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href="tel:+5147616131;2929"
                            >
                                514-761-6131 x2929
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <a
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary"
                                href="https://www.linkedin.com/in/tak-pan-wong-06348a21/"
                            >
                                <Linkedin className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href="https://www.linkedin.com/in/tak-pan-wong-06348a21/"
                            >
                                takpanwong
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-[4rem] items-center gap-20 bg-primary px-10">
                    <div className="text-secondary">Copyright @ 2023</div>
                    <div className="text-secondary">McGill University</div>
                    <div className="text-secondary">Douglas Hospital</div>
                    <div className="absolute right-4 text-secondary">
                        Created and Designed by Amy Huang and Brandon Wong
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
