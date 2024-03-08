import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";
import { LuExternalLink } from "react-icons/lu";



interface ProjectCard {
    title: string
    description: string
    techs: Array<string>
    imgPath: string
    index: number
}

export default function ProjectCard({ title, description, techs, imgPath, index }: ProjectCard) {
    const dirLeft = index % 2 === 0;

    return (
        <div className={`flex gap-10 ${dirLeft || 'flex-row-reverse'} justify-center`}>
            <div className="rounded-2xl overflow-hidden max-w-[576px] aspect-video">
                <img src={imgPath} alt={title} className='' />
            </div>
            <div className={`p-5 max-w-[420px] flex flex-col justify-center gap-5 bg-neutral-200 rounded-2xl ${dirLeft ? 'text-right' : 'text-left'}`}>
                <h3 className='text-2xl'>{title}</h3>
                <p>{description}</p>
                <ul className={`flex gap-2 text-sm ${dirLeft ? 'justify-end' : 'justify-start'}`}>
                    {techs.map((tech, index) => (
                        <li key={index}>{tech}</li>
                    ))}
                </ul>
                <div className={`flex items-center justify-between ${dirLeft || 'flex-row-reverse'}`}>
                    <div>
                        {dirLeft ? <BsArrowLeft size={32} /> : <BsArrowRight size={32} />}
                    </div>
                    <div className='flex items-center gap-4'>
                        <FiGithub size={24} className='project-card-icon' />
                        <LuExternalLink size={24} className='project-card-icon' />
                    </div>
                </div>
            </div>
        </div>
    );
};