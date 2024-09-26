import cryptoLogoImg from '../assets/crypto-logo.png';
import eduardaLogoImg from '../assets/eduarda.png';
import portfolioLogoImg from '../assets/portfolio.png'
import devlinkLogoImg from '../assets/devlink.png';
import doctorcareLogoImg from '../assets/doctorcare.png';
import newsletterLogoImg from '../assets/newsletter.png';
import { FaCss3, FaHtml5, FaJava, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { CgVercel } from 'react-icons/cg';
import { Header } from '@/components/header/header';
import CardProject from '@/components/card/card';
import { BiLogoTypescript } from "react-icons/bi";

const cardData = [
    {
        title: 'Erick',
        category: 'Educational',
        description: 'Projeto que desenvolvi para minha namorada, para comemorar 6 mesês de namoro. Foi um projeto que utilizei: HTML, CSS e JavaScript',
        imgSrc: eduardaLogoImg,
        technologies: [
            { name: 'Vercel', icon: <CgVercel size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'HTML', icon: <FaHtml5 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'CSS', icon: <FaCss3 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
        ],
        link: 'https://eduarda-one.vercel.app/'
    },
    {
        title: 'DevLink',
        category: 'Tech',
        description: 'Projeto desenvolvido para fins de estudo, funciona como uma loja de carros, desde o cadastro, gerenciamento e contato do vendedor ao cliente. Tecnologias utilizadas.',
        imgSrc: devlinkLogoImg,
        technologies: [
            { name: 'Vercel', icon: <CgVercel size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'React', icon: <FaReact size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'Tailwind', icon: <RiTailwindCssFill size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
        ],
        link: 'https://devlinks-typescript.vercel.app/'
    },
    {
        title: 'DevCurrency',
        category: 'Educational',
        description: 'Projeto de analise de crypto-moedas, desenvolvido utilizando: ReactJS e Tailwind.',
        imgSrc: cryptoLogoImg, 
        technologies: [
            { name: 'Java', icon: <FaJava size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'Node.js', icon: <FaNodeJs size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'HTML5', icon: <FaHtml5 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> }
        ],
        link: 'https://nwl-journey-ovry.vercel.app'
    },
    {
        title: 'Portfolio Antigo',
        category: 'Service',
        description: 'A portal providing health tips, resources, and community support for a healthier lifestyle.',
        imgSrc: portfolioLogoImg, 
        technologies: [
            { name: 'React', icon: <FaReact size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'CSS Module', icon: <FaCss3 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'HTML5', icon: <FaHtml5 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> }
        ],
        link: 'https://portfolio-react-main-two.vercel.app/'
    },
    {
        title: 'Doctorcare',
        category: 'Educational',
        description: 'Esse projeto foi o desenvolvimento da parte visual de uma rede social, interativa onde podemos fazer uma publicação. Utilizei: React, CSS Module, HTML5 e Typescript',
        imgSrc: doctorcareLogoImg, 
        technologies: [
            { name: 'React', icon: <FaReact size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'CSS Module', icon: <FaCss3 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'HTML5', icon: <FaHtml5 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'TypeScript', icon: <BiLogoTypescript size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
        ],
        link: 'https://project-reactjs-rocketseat-mjjdqnwaq-berdnaskis-projects.vercel.app/?'
    },
    {
        title: 'Newsletter',
        category: 'Educational',
        description: 'Esse projeto foi uma página de cadastro newsletter, onde utilizei: React, CSS Module, HTML5',
        imgSrc: newsletterLogoImg, 
        technologies: [
            { name: 'React', icon: <FaReact size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'CSS Module', icon: <FaCss3 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> },
            { name: 'HTML5', icon: <FaHtml5 size={18} className="transform transition-transform duration-200 hover:-translate-y-2" /> }
        ],
        link: 'https://newsletter-project-liart.vercel.app/'
    },
];

export function Projects() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70">
                <Header />
            </header>

                <>
                <div className='flex flex-col md:w-2/3 w-5/6 mx-auto'>
                    <div className="flex flex-col items-center justify-center gap-2 mt-20">
                            <h3 className="md:font-semibold md:text-xl text-md text-purple-400">Veja soluções reais</h3>
                            <h1 className="font-bold md:text-4xl text-2xl text-white">Alguns Projetos</h1>
                        </div>

                        <main className="md:grid md:grid-cols-3 items-center justify-center gap-[4rem] mb-10">
                            {cardData.map((card) => (
                                <CardProject key={card.title} {...card} />
                            ))}
                        </main>
                    </div>

                    <footer className="text-gray-200 flex flex-col justify-center items-center text-sm gap-1 mb-6 font-thin">
                        <span>Todos os direitos reservados</span>
                        <span>Desenvolvido <span className="text-purple-400">Erick Berdnaski│Dev.</span></span>
                    </footer>
                </>
        </div>
    );
}
