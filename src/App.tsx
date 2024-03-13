import profilePic from './assets/image.png'
import ProjectCard from './components/ProjectCard'
import { FiGithub } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { useState } from 'react';
import { useInView } from "react-intersection-observer";
import projects from './projects';

function App() {
    const [showLinks, setShowLinks] = useState(false)
    const [aboutRef, aboutInView] = useInView({
        triggerOnce: true
    })
    const [projectRef, projectInView] = useInView({
        triggerOnce: true
    })
    const [contactRef, contactInView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <div onClick={() => { !showLinks || setShowLinks(false) }}>
            <div className='navbar'>
                <a href="#landing" className='text-brand-primary text-4xl font-mono font-bold mx-8'>J</a>
                <div className='md:relative'>
                    <div className={`md:long ${showLinks ? 'max-md:small' : 'hidden'}`}>
                        <ol className='links'>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ol>
                        <a className='bg-white text-black rounded-full m-[2px] md:w-[112px] h-[52px] flex items-center justify-center'>
                            CV
                        </a>
                    </div>
                    <button className='md:hidden m-[2px] w-[112px] h-[52px] text-white rounded-full hover:bg-neutral-800 transition-all'
                        onClick={() => { setShowLinks(!showLinks) }}>
                        Menu
                    </button>
                </div>
            </div>

            <section id='landing' className='relative h-[800px] bg-black text-[#969696] px-2 overflow-hidden'>
                <div className='absolute left-0 w-full h-full text-center flex flex-col justify-center items-center gap-3 z-10'>
                    <div className='font-bold animate-fade-in-up' style={{ opacity: 0 }}>
                        <span className='text-7xl max-lg:text-5xl text-white'>Hi, I'm </span>
                        <h1 className='text-brand-primary font-mono text-[78px] max-lg:text-[54px] inline-block'>Joheb</h1>
                    </div>
                    <h1 className='text-7xl max-lg:text-5xl font-bold animate-fade-in-up' style={{ animationDelay: '200ms', opacity: 0 }}>I build things for the web</h1>
                    <p className='max-w-lg my-4 animate-fade-in-up' style={{ animationDelay: '250ms', opacity: 0 }}>
                        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatment.
                    </p>
                    <a className='custom-button dark-button animate-fade-in-up' style={{ animationDelay: '400ms', opacity: 0 }}>
                        Get In Touch
                    </a>
                </div>
                <div className='absolute top-0 left-0 max-w-[2064px] min-w-[1486px] w-full h-full overflow-hidden z-0 blur-[1px]'>
                    <svg width={200} height={200} viewBox='0 0 100 100' className='absolute bottom-0 rotate-3 translate-x-4 translate-y-10'>
                        <rect x='0' y='0' width='100' height='100' rx='8' fill='#1A1A1A' />
                    </svg>
                    <svg width={160} height={160} viewBox='0 0 100 100' className='absolute bottom-1/2 -rotate-12 translate-x-80 translate-y-10'>
                        <rect x='0' y='0' width='100' height='100' rx='8' fill='#151515' />
                    </svg>
                    <svg width={120} height={120} viewBox='0 0 100 100' className='absolute bottom-1/2 right-1/3 rotate-45 translate-x-52 translate-y-28'>
                        <rect x='0' y='0' width='100' height='100' rx='8' fill='#131313' />
                    </svg>
                    <svg width={200} height={200} viewBox='0 0 100 100' className='absolute bottom-1/2 right-0 rotate-12 -translate-x-5 translate-y-10'>
                        <rect x='0' y='0' width='100' height='100' rx='8' fill='#1A1A1A' />
                    </svg>
                </div>
            </section>

            <section ref={aboutRef} id='about' className={`my-20 bg-white flex justify-center items-center px-2 opacity-0 ${aboutInView ? 'animate-sm-fade-in-up' : ''}`}>
                <div className='flex gap-12 max-lg:flex-col'>
                    <div className='max-w-lg px-8 pb-12 pt-2 bg-neutral-100 rounded-2xl'>
                        <h1 className='section-title my-8'>About Me</h1>
                        <p>
                            Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                        </p>
                        <br />
                        <p>
                            Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio.
                        </p>
                        <br />
                        <div className='skills'>
                            <p>Here are a few technologies I’ve been working with recently:</p><br />
                            <ul className='grid grid-cols-2 list-disc list-inside text-sm'>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>Azure Functions</li>
                                <li>Vercel Serverless</li>
                                <li>Chrome Extension API</li>
                            </ul>
                        </div>
                    </div>
                    <div className='relative lg:w-[348px] max-lg:h-[288px]'>
                        <img src={profilePic} alt="A picture of myself" className='w-[256px] h-[256px] rounded-2xl absolute bottom-0 translate-x-1/2 right-1/2' />
                    </div>
                </div>
            </section>

            <section ref={projectRef} id='projects' className='bg-neutral-100 px-2'>
                <div className='flex flex-col gap-10 py-10 items-center'>
                    <h1 className={`section-title opacity-0 ${projectInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '500ms' }}>Stuff I've Made</h1>
                    {projects.map((project, index) => (
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            techs={project.techs}
                            imgPath={project.imgPath}
                            githubLink={project.githubLink}
                            deploymentLink={project.deploymentLink}
                            key={index}
                            index={index}
                        />
                    ))}
                </div>
            </section>

            <footer ref={contactRef} id='contact' className='bg-white flex flex-col gap-8 items-center justify-center py-16 px-2'>
                <div className={`bg-black rounded-2xl max-w-[622px] p-6 opacity-0 ${contactInView ? 'animate-fade-in-up' : ''}`}>
                    <h1 className='section-title mb-4 text-white'>Get In Touch</h1>
                    <p className='text-[#cfcfcf]'>
                        Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
                    </p>
                </div>
                <div className='flex gap-8 max-ss:flex-col'>
                    <a className={`custom-button light-button opacity-0 ${contactInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '200ms' }}>Email Me!</a>
                    <a className={`custom-button light-button opacity-0 ${contactInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '300ms' }}>My CV</a>
                </div>
                <div className={`flex gap-2 items-center opacity-0 ${contactInView ? 'animate-fade-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
                    <a href='https://github.com/Joheb133' target='_blank'>
                        <FiGithub size={24} className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/zoheb-saiyed/' target='_blank'>
                        <TbBrandLinkedin size={30} className='icon' />
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default App
