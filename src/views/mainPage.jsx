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
import { Button } from '../components/ui/button';

function MainPage() {
    return (
        <>
            <div>
                <Header />
                <div
                    className="relative flex h-[54rem] flex-col justify-evenly bg-secondary"
                    id="home"
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
                        <div className="text-2xl">{data.header.subtitle}</div>
                        <div className="text-8xl font-bold uppercase text-primary">
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
                            {data.about.title}
                        </div>
                        <div className="mb-8 mt-2 h-2 w-12 bg-accent"></div>
                        <div className="w-2/3 text-justify text-secondary">
                            {data.about.content}
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="projects"></div>
                <div className="relative flex  w-full flex-col items-center bg-secondary py-16">
                    <img
                        className="absolute bottom-[-10rem] right-[-10rem] z-10"
                        src="/src/assets/chemistry.svg"
                    />
                    <div className="flex flex-col items-center w-full">
                        <div>
                            <div className="text-5xl font-bold">Projects</div>
                            <div className="mb-6 mt-2 h-2 w-12 bg-primary"></div>
                        </div>
                        <div className="overscroll w-full z-40 px-[5rem] my-10 grid grid-cols-3 gap-14 overscroll-y-auto">
                            {data.projects.map((project, index) => (
                                <Card className="min-h-[20rem] w-full min-w-[20rem]" key={index}>
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
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="team"></div>
                <div className='h-[40rem] w-full flex flex-row gap-[2rem] bg-secondary pl-[5rem]'>
                    <div className='h-[36rem] w-[29rem] rounded-xl bg-primary px-10 py-20'>
                        <div className='text-5xl font-bold text-secondary'>
                            Meet the<br></br>Team
                        </div>
                        <div className="mb-6 mt-2 h-2 w-12 bg-accent"></div>
                    </div>
                    <div className='no-scrollbar flex w-full overflow-x-scroll pt-10'>
                        <div className='relative flex h-[36rem] flex-nowrap items-center justify-center gap-[2rem]'>
                            {data.team.map((member, index) => (
                                <Card className="relative h-[24em] w-[16em] rounded-xl border-none" key={index}>
                                    <img
                                        src={'/src/assets/' + member.img}
                                        alt="person face"
                                        className="h-full w-full rounded-xl object-cover"
                                    />
                                    <div className="absolute bottom-0 h-1/2 w-full rounded-b-xl bg-gradient-to-t from-black to-transparent"></div>
                                    <div className="absolute bottom-6 left-4 text-secondary">
                                        {member.name}
                                    </div>
                                    <div className="absolute bottom-2 left-4 text-sm text-secondary">
                                        {member.role}
                                    </div>
                                </Card>
                            ))}
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
                                <AccordionItem value={'item-' + index} key={index}>
                                    <AccordionTrigger>
                                        {pub.title}
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <div className="text-gray-500">Published on {pub.date}</div>
                                        <div className="font-bold">
                                        {
                                            pub.authors.map((author, index) => (
                                                <span key={index}>
                                                    {author}
                                                    {index < pub.authors.length - 1 ? ', ' : ''}
                                                </span>
                                            ))
                                        }
                                        </div>
                                        <div className="mt-2">{pub.content}</div>
                                        <Button className="pl-0" variant="link" onClick={ () => window.open(pub.link) }>Learn more</Button>
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div>
                <div className="relative top-[-5rem]" id="news"></div>
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
                        data.news.carousel.length > 0 ? (
                            <Carousel className="w-[43rem]">
                                <CarouselContent>
                                    { data.news.carousel.map((item, index) => (
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
                                { data.news.empty }
                            </div>
                        )
                    }
                </div>
                <div
                    className="relative grid h-[17rem] grid-cols-2 border-y border-secondary bg-primary"
                    id="contact"
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
                                href={ data.contact.mail.link }
                            >
                                <Mail className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href={ data.contact.mail.link }
                            >
                                { data.contact.mail.content }
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <a
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary"
                                href={ data.contact.phone.link }
                            >
                                <Phone className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href={ data.contact.phone.link }
                            >
                                { data.contact.phone.content }
                            </a>
                        </div>

                        <div className="flex items-center gap-5">
                            <a
                                className="flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary"
                                href={ data.contact.linkedin.link }
                            >
                                <Linkedin className="h-5 w-5 stroke-primary" />
                            </a>
                            <a
                                className="text-secondary"
                                href={ data.contact.linkedin.link }
                            >
                                { data.contact.linkedin.content }
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative flex h-[4rem] items-center gap-20 bg-primary px-10">
                    <div className="text-secondary">{ data.footer.copyright }</div>
                    <div className="text-secondary">{ data.footer.mcgill }</div>
                    <div className="text-secondary">{ data.footer.douglas }</div>
                    <div className="absolute right-4 text-secondary">
                        { data.footer.design }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainPage;
