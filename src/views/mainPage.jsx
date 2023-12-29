import Header from "./header"
import { Mail } from "lucide-react"
import { Phone } from "lucide-react"
import { Linkedin } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel"
import { Card, CardContent } from "../components/ui/card"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../components/ui/accordion"

function MainPage() {
    return (
        <>
            <Header />
            <div className="h-[54rem] bg-secondary flex flex-col justify-evenly " id="mainpage">
                <div className="flex flex-col items-center justify-center pt-32">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-20 h-20" />
                    <div className="text-2xl">Welcome to the</div> 
                    <div className="text-8xl font-bold text-primary">WONG LAB</div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img src="https://via.placeholder.com/150" alt="logo" className="w-9 h-9 relative bottom-0" />
                </div>
            </div>
            <div className="h-[29rem] bg-primary grid grid-cols-2" id="About">
                <div className="relative">
                    <img src="https://via.placeholder.com/150" alt="logo" className="absolute w-[34rem] h-[34rem] bottom-0 right-0" />
                </div>
                <div className="pt-14 ml-16">
                    <div className="text-5xl font-bold text-secondary">About Me</div>
                    <div className="text-secondary">aoiwdehfai0owehg0iwefoihweoighw0ieg paragraph</div>
                </div>
            </div>
            <div className="h-[43rem] bg-secondary flex justify-center pt-16" id="Projects">
                <div className="text-5xl font-bold">Projects</div>
            </div>
            <div className="h-[40rem] bg-green-200 relative" id="Team">
                <div className="absolute bottom-0 w-[29rem] h-[36rem] bg-primary ml-14 px-10 py-20 rounded-xl">
                    <div className="text-5xl text-secondary font-bold">Meet the<br></br>Team</div>
                    <div className="text-secondary">aiawjdaowhrgoaiwrhga paragraph</div>
                </div>
            </div>
            <div className="h-[38rem] bg-secondary flex flex-col items-center pt-16" id="Publications">
                <div className="text-5xl font-bold">Publications</div>
                <Accordion type="single" collapsible className="w-[60rem] mt-10">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                        Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Is it styled?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It comes with default styles that matches the other
                        components&apos; aesthetic.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is it animated?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It's animated by default, but you can disable it if you prefer.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="h-[39rem] bg-primary flex flex-col items-center pt-16 relative" id="News">
                <div className="absolute top-0 left-0 w-0 h-0 
                    border-l-[39rem] border-l-secondary 
                    border-r-[20rem] border-r-transparent 
                    border-b-[39rem] border-b-transparent">
                </div>
                <div className="text-5xl text-secondary font-bold">News</div>
                <Carousel className="w-[43rem] mt-10">
                    <CarouselContent>
                        {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex h-[24rem] items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{index + 1}</span>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="h-[17rem] bg-primary grid grid-cols-2 border-y border-secondary" id="Contact">
                <div className="place-self-center flex flex-col items-center">
                    <div className="text-2xl text-secondary font-bold">Want to be part of my lab?</div>
                    <div className="text-secondary">Send your resume!</div>
                </div>
                <div className="flex flex-col gap-4 justify-center">
                    <div className="flex items-center gap-5">
                        <a className="bg-secondary rounded-full w-[3rem] h-[3rem] flex justify-center items-center" href="mailto:takpan.wong@mcgill.ca">
                            <Mail className="w-5 h-5 stroke-primary" />
                        </a>
                        <a className="text-secondary" href="mailto:takpan.wong@mcgill.ca">takpan.wong@mcgill.ca</a>
                    </div>
                    
                    <div className="flex items-center gap-5">
                        <a className="bg-secondary rounded-full w-[3rem] h-[3rem] flex justify-center items-center" href="tel:+5147616131;2929">
                            <Phone className="w-5 h-5 stroke-primary" />
                        </a>
                        <a className="text-secondary" href="tel:+5147616131;2929">514-761-6131 x2929</a>
                    </div>

                    <div className="flex items-center gap-5">
                        <a className="bg-secondary rounded-full w-[3rem] h-[3rem] flex justify-center items-center" href="https://www.linkedin.com/in/tak-pan-wong-06348a21/">
                            <Linkedin className="w-5 h-5 stroke-primary" />
                        </a>
                        <a className="text-secondary" href="https://www.linkedin.com/in/tak-pan-wong-06348a21/">takpanwong</a>
                    </div>
                </div>
            </div>
            <div className="h-[4rem] bg-primary flex items-center gap-20 px-10">
                <div className="text-secondary">Copyright @ 2023</div>
                <div className="text-secondary">McGill University</div>
                <div className="text-secondary">Douglas Hospital</div>
            </div>
        
        </>
    )
}

export default MainPage