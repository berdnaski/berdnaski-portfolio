import React, { useEffect, useState } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardData {
    imgSrc: JSX.Element; 
    title: string;
    description: string;
}

const CardServices: React.FC<CardData> = ({ title, description, imgSrc }) => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div 
            className="relative mt-8 p-3 py-8 rounded-3xl bg-[#151515] border-0 w-full shadow-md transition duration-300 ease-in-out transform hover:shadow-xl hover:-translate-y-1 hover:scale-103 overflow-hidden" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            data-aos="fade-up"
        >
            <div 
                className={`absolute top-0 left-0 w-full h-full bg-purple-800 transition-all duration-500 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
            ></div>
            <div className="relative z-10">
                <div className="h-30 mb-4 flex items-center justify-center text-white">
                    {imgSrc}
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <h5 className="mb-2 text-xl font-semibold text-white">{title}</h5>
                    <p className="mt-2 text-gray-200 font-thin text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardServices;
