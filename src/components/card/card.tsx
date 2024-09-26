import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardData {
    title: string;
    category: string;
    description: string;
    imgSrc: string;
    technologies: { name: string; icon: JSX.Element }[];
    link: string;
}

const CardProject: React.FC<CardData> = ({ title, category, description, imgSrc, technologies, link }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="mt-8 p-3 rounded-3xl bg-[#151515] border-0 w-full shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-103" data-aos="fade-up">
            <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <div className="relative">
                    <img className="w-full h-48 object-cover rounded-3xl" src={imgSrc} alt={title} />
                    <div className="absolute inset-0 bg-black opacity-0 hover:opacity-70 transition duration-300 ease-in-out rounded-3xl flex items-center justify-center">
                        <p className="text-white font-semibold uppercase">Acesse o site</p>
                    </div>
                </div>
            </a>
            <div className="mt-3">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <h5 className="mb-2 text-xl font-semibold text-white">{title}</h5>
                </a>
                <span className="font-thin text-purple-300">{category}</span>
                <p className="mt-2 text-gray-200 font-thin text-xs">{description}</p>
            </div>
            <div className="flex mt-3 text-white">
                {technologies.map((tech) => (
                    <div key={tech.name} className="mr-2">
                        {tech.icon}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardProject;
