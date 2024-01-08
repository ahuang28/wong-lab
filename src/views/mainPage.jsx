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
                <div className="relative flex h-[40rem] w-full flex-col items-center bg-secondary pt-16">
                    <img
                        className="absolute bottom-[-10rem] right-[-10rem] z-10"
                        src="/src/assets/chemistry.svg"
                    />
                    <div className="flex flex-col items-center">
                        <div>
                            <div className="text-5xl font-bold">Projects</div>
                            <div className="mb-6 mt-2 h-2 w-12 bg-primary"></div>
                        </div>
                        <div className="overscroll z-40 mx-[10rem] my-10 grid grid-cols-3 gap-14 overscroll-y-auto">
                            {data.projects.map((project) => (
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
                            ))}
                        </div>
                    </div>
                </div>
                <div className="relative top-[-5rem]" id="team"></div>
                <div className="h-[40rem] bg-secondary">
                    <div className="no-scrollbar flex w-full overflow-x-scroll pt-14">
                        <div className="relative left-[20%] flex h-[36rem] flex-nowrap items-center justify-center gap-[2rem] 2xl:left-[30%]">
                            <div className="absolute left-[-15%] h-[36rem] w-[29rem] rounded-xl bg-primary px-10 py-20">
                                <div className="text-5xl font-bold text-secondary">
                                    Meet the<br></br>Team
                                </div>
                                <div className="mb-6 mt-2 h-2 w-12 bg-accent"></div>
                            </div>
                            {data.team.map((member) => (
                                <Card className="relative h-[24em] w-[16em] rounded-xl border-none">
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
                <div className="relative top-[-5rem]" id="Publications"></div>
                <div className="flex h-[38rem] flex-col items-center bg-secondary pt-16">
                    <div>
                        <div className="text-5xl font-bold">Publications</div>
                        <div className="mb-10 mt-2 h-2 w-12 bg-primary"></div>
                    </div>
                    <Accordion type="single" collapsible className="w-[60rem]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                The hippocampus in stress susceptibility and
                                resilience: Reviewing molecular and functional
                                markers
                            </AccordionTrigger>
                            <AccordionContent>
                                Understanding the individual variability that
                                comes with the likelihood of developing
                                stress-related psychopathologies is of paramount
                                importance when addressing mechanisms of their
                                neurobiology. This article focuses on the
                                hippocampus as a region that is highly
                                influenced by chronic stress exposure and that
                                has strong ties to the development of related
                                disorders, such as depression and post-traumatic
                                stress disorder. We first outline three commonly
                                used animal models that have been used to
                                separate animals into susceptible and resilient
                                cohorts. Next, we review molecular and
                                functional hippocampal markers of susceptibility
                                and resilience. We propose that the hippocampus
                                plays a crucial role in the differences in the
                                processing and storage of stress-related
                                information in animals with different stress
                                susceptibilities. These hippocampal markers not
                                only help us attain a more comprehensive
                                understanding of the various facets of
                                stress-related pathophysiology, but also could
                                be targeted for the development of new
                                treatments.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>
                                Negative Memory Engrams in the Hippocampus
                                Enhance the Susceptibility to Chronic Social
                                Defeat Stress
                            </AccordionTrigger>
                            <AccordionContent>
                                The hippocampus has been highly implicated in
                                depression symptoms. Recent findings suggest
                                that the expression and susceptibility of
                                depression symptoms are related to the enhanced
                                functioning of the hippocampus. We reasoned that
                                hippocampal engrams, which represent ensembles
                                of neurons with increased activity after memory
                                formation, could underlie some contributions of
                                the hippocampus to depression symptoms. Using
                                the chronic social defeat stress model, we
                                examined social defeat-related hippocampal
                                engrams in mice that are either susceptible or
                                resilient to the stressor. TetTag mice were used
                                to label social defeat-related hippocampal
                                ensembles by LacZ. Engram cells correspond to
                                ensembles that were reactivated by the same
                                stressor. Compared with resilient and
                                nonstressed control mice, susceptible mice
                                exhibited a higher reactivation of social
                                defeat-related LacZ-labeled cells (i.e., engram
                                cells) in both the dorsal and ventral
                                hippocampal CA1 regions. The density of CA1
                                engram cells correlated with the level of social
                                avoidance. Using DREADD and optogenetic
                                approaches to activate and inactivate social
                                defeat-related CA1 engram cells enhanced and
                                suppressed social avoidance, respectively.
                                Increased engram cells in susceptible mice could
                                not be found in the dentate gyrus. Susceptible
                                mice exhibited more negative stimuli-related,
                                but not neutral stimuli-related, CA1 engram
                                cells than resilient mice in the dorsal
                                hippocampus. Finally, chronic, but not a short
                                and subthreshold, social defeat protocol was
                                necessary to increase CA1 engram cell density.
                                The susceptibility to chronic social defeat
                                stress is regulated by hippocampal CA1 engrams
                                for negative memory. Hippocampal negative memory
                                engrams may underlie the vulnerability and
                                expression of cognitive symptoms in
                                depression.SIGNIFICANCE STATEMENT We provided
                                evidence that negative memory hippocampal
                                engrams contribute to the susceptibility to
                                developing depression-related behavior after
                                chronic social defeat stress. The activation of
                                positive memory engrams has been shown to
                                alleviate depression-related behaviors, while
                                our findings reveal the pathological roles of
                                negative memory engrams that could lead to those
                                behaviors. Increased negative memory engrams
                                could be a downstream effect of the reported
                                high hippocampal activity in animal models and
                                patients with depression. Unlike affective
                                symptoms, we know much less about the cellular
                                mechanisms of the cognitive symptoms of
                                depression. Given the crucial roles of
                                hippocampal engrams in memory formation,
                                enhanced reactivation of negative memory engrams
                                could be an important cellular mechanism that
                                underlies the cognitive symptoms of depression.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>
                                The susceptibility to chronic social defeat
                                stress is related to low hippocampal
                                extrasynaptic NMDA receptor function
                            </AccordionTrigger>
                            <AccordionContent>
                                N-methyl-D-aspartate receptors (NMDARs) have
                                been highly implicated in the pathogenesis and
                                treatment of depression. While NMDARs can be
                                found inside and outside glutamate synapses, it
                                remains unclear if NMDARs at synaptic (sNMDAR)
                                and extrasynaptic locations (exNMDAR) play
                                different roles in the formation of
                                depression-related behaviors. Using chronic
                                social defeat stress (CSDS), an animal model for
                                anxiety- and depression-related behaviors, we
                                found that mice susceptible to CSDS exhibited
                                low hippocampal exNMDAR function. Raising
                                exNMDAR function by enhancing the release of
                                glutamate from astrocytic cystine-glutamate
                                antiporters or targeting extrasynaptic receptors
                                with agonist-coated gold nanoparticles that
                                cannot enter the synaptic cleft prevented social
                                avoidance behavior in stressed mice.
                                Interestingly, ketamine, which is a fast-acting
                                antidepressant, exhibited stronger blockade to
                                sNMDARs than to exNMDARs. These findings suggest
                                that the susceptibility and resilience of mice
                                toward CSDS is related to low and high exNMDAR
                                function in the hippocampus, respectively.
                                Enhancing exNMDAR function could be a novel
                                treatment approach for mood and anxiety
                                disorders.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>
                                Forsythoside B ameliorates diabetic cognitive
                                dysfunction by inhibiting hippocampal
                                neuroinflammation and reducing synaptic
                                dysfunction in ovariectomized mice
                            </AccordionTrigger>
                            <AccordionContent>
                                Diabetes-associated cognitive impairment (DACI)
                                is a common complication of diabetes, and
                                studies have shown that DACI is more severe in
                                postmenopausal patients with diabetes.
                                Forsythoside B (FTS⋅B) can inhibit inflammation
                                and reduce synaptic dysfunction, which can
                                improve cognitive function. However, it has not
                                been confirmed whether FTS⋅B has a reversing or
                                retarding effect on postmenopausal diabetic
                                encephalopathy.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>
                                Maternal care differentially affects neuronal
                                excitability and synaptic plasticity in the
                                dorsal and ventral hippocampus
                            </AccordionTrigger>
                            <AccordionContent>
                                Variations in early life maternal care modulate
                                hippocampal development to program distinct
                                emotional-cognitive phenotypes that persist into
                                adulthood. Adult rat offspring that received low
                                compared with high levels of maternal licking
                                and grooming (low LG offspring) in early
                                postnatal life show reduced long term
                                potentiation (LTP) and impaired
                                hippocampal-dependent memory, suggesting a
                                'detrimental' maternal effect on neural
                                development. However, these studies focused
                                uniquely on the dorsal hippocampus. Emerging
                                evidence suggests a distinct role of the ventral
                                hippocampus in mediating aggression, anxiety,
                                and fear-memory formation, which are enhanced in
                                low LG offspring. We report that variations in
                                maternal care in the rat associate with opposing
                                effects on hippocampal function in the dorsal
                                and ventral hippocampus. Reduced pup licking
                                associated with suppressed LTP formation in the
                                dorsal hippocampus, but enhanced ventral
                                hippocampal LTP. Ventral hippocampal neurons in
                                low LG offspring fired action potentials at
                                lower threshold voltages that were of larger
                                amplitude and faster rise rate in comparison
                                with those in high LG offspring. Furthermore,
                                recordings of excitatory postsynaptic
                                potential-to-spike coupling (E-S coupling)
                                revealed an increase in excitability of ventral
                                hippocampal CA1 neurons in low LG offspring.
                                These effects do not associate with changes in
                                miniature excitatory postsynaptic currents or
                                paired-pulse facilitation, suggesting a specific
                                effect of maternal care on intrinsic
                                excitability. These findings suggest
                                region-specific influences of maternal care in
                                shaping neural development and synaptic
                                plasticity.
                            </AccordionContent>
                        </AccordionItem>
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
                        border-b-[39rem] border-l-[39rem] 
                        border-r-[20rem] border-b-transparent 
                        border-l-secondary border-r-transparent"
                    ></div>
                    <div>
                        <div className="text-5xl font-bold text-secondary">
                            News
                        </div>
                        <div className="mb-10 mt-2 h-2 w-12 bg-accent"></div>
                    </div>
                    <Carousel className="w-[43rem]">
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
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
