import { BsArrowLeft } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";
import { useInView } from "react-intersection-observer";

interface ProjectCard {
    title: string
    description: string
    techs: Array<string>
    imgPath: string
    videoPath: string
    githubLink: string | null
    deploymentLink: string | null
    index: number
}

export default function ProjectCard({ title, description, techs, imgPath, videoPath, githubLink, deploymentLink, index }: ProjectCard) {
    const dirLeft = index % 2 === 0;
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    })

    return (
        <div ref={ref} className={`flex gap-10 ${dirLeft || 'lg:flex-row-reverse'} max-lg:flex-col justify-center`}>
            <div className={`rounded-2xl overflow-hidden max-w-[576px] opacity-0 ${inView ? 'animate-sm-fade-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
                <video className="w-full h-full" muted={true} loop={true} poster={imgPath} autoPlay={true}>
                    <source src={videoPath} type="video/webm" />
                </video>
            </div>
            <div className={`p-5 lg:max-w-[420px] max-w-[576px] flex flex-col justify-center gap-5 bg-neutral-200 rounded-2xl opacity-0  ${dirLeft ? 'lg:text-right' : 'lg:text-left'} ${inView ? 'animate-sm-fade-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
                <h3 className='text-2xl'>{title}</h3>
                <p>{description}</p>
                <ul className={`flex gap-2 text-sm ${dirLeft ? 'lg:justify-end' : 'justify-start'}`}>
                    {techs.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className={`flex items-center justify-between ${dirLeft || 'lg:flex-row-reverse'}`}>
                    <div className={`${dirLeft || 'rotate-180'} max-lg:rotate-90`}>
                        {<BsArrowLeft size={32} />}
                    </div>
                    <div className='flex items-center gap-4'>
                        {githubLink !== null ? <a href={githubLink} target="_blank"><FiGithub size={24} className='icon' /></a> : ''}
                        {deploymentLink !== null ? <a href={deploymentLink} target="_blank"><LuExternalLink href={deploymentLink} size={24} className='icon' /></a> : ''}
                    </div>
                </div>
            </div>
        </div>
    );
};