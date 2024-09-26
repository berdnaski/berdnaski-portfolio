import { useEffect } from "react";
import { FaGithub, FaInstagram, FaJava, FaLinkedin } from "react-icons/fa";
import logoImg from "../assets/about-img.png";
import { SiCss3, SiHtml5, SiJavascript, SiLaravel, SiNodedotjs, SiReact, SiSpring } from "react-icons/si";
import { FaAnglesRight } from "react-icons/fa6";

import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/header/header";
import { Link } from "react-router-dom";

export function About() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70">
                <Header />
            </header>

                <>
                    <section className="flex flex-col items-center mt-20 gap-2" data-aos="fade-up">
                        <h3 className="text-purple-400 md:text-2xl text-xl">Conheça um pouco</h3>
                        <h1 className="text-white md:text-5xl text-3xl font-bold">SOBRE MIM</h1>
                    </section>
                    
                    <main className="flex flex-col md:flex-row items-center justify-center mx-8 md:mt-20 mt-6 flex-1">
                        <section className="order-2 md:order-1 flex-1 md:pr-8 mt-8 md:mt-0" data-aos="fade-right">
                            <h1 className="text-white md:text-4xl text-xl font-bold">Olá, me chamo Erick Berdnaski</h1>
                            <div className="flex flex-col gap-4 pt-4 md:pt-8">
                                <p className="text-gray-200 font-thin flex items-center justify-center text-sm md:text-lg">
                                    Sou desenvolvedor web fullstack com mais de dois anos de experiência, possuindo um histórico comprovado na transformação de ideias em soluções digitais eficazes. 
                                </p>
                                <p className="text-gray-200 font-thin text-sm md:text-lg">
                                    Atualmente, estou cursando Sistemas da Informação para aprofundar ainda mais meus conhecimentos na área. Se você está em busca de um parceiro para elevar o seu 
                                    negócio online ao próximo nível, estou à disposição para conversarmos!
                                </p>
                            </div>
                            <div className="flex gap-4 pt-4 md:pt-8 justify-between mb-8 md:mb-0">
                                <Link to="https://drive.google.com/file/d/1CnroMsvwd18umxZPwlTbvl4Yptn8G2RN/view?usp=sharing" className="bg-purple-400 px-4 py-2 text-white rounded-md">Visualizar CV</Link>
                                <ul className="text-white flex gap-4 items-center">
                                    <li className="transform transition-transform duration-200 hover:-translate-y-2"><a href="https://github.com/berdnaski" target="_blank"><FaGithub size={25} /></a></li>
                                    <li className="transform transition-transform duration-200 hover:-translate-y-2"><a href="https://www.instagram.com/dev.erickb/" target="_blank"><FaInstagram size={25} /></a></li>
                                    <li className="transform transition-transform duration-200 hover:-translate-y-2"><a href="https://www.linkedin.com/in/erick-berdnaski/" target="_blank"><FaLinkedin size={25} /></a></li>
                                </ul>
                            </div>
                        </section>

                        <section className="order-1 md:order-2 flex-1" data-aos="fade-left">
                            <img src={logoImg} alt="About Me" className="w-full h-auto rounded-md" />
                        </section>
                    </main>

                    <div className="flex flex-col md:flex-row mx-8 justify-center md:mt-[12rem] mt-8 md:mb-[8rem] mb-16">
                        <div className="flex flex-col md:w-1/2 md:pr-8" data-aos="fade-up">
                            <section className="flex flex-col">
                                <div className="flex flex-col mb-4">
                                    <h3 className="text-purple-400">Conheça um pouco das minhas</h3> 
                                    <h1 className="text-white font-bold text-2xl">HABILIDADES</h1>
                                </div>
                                <p className="font-thin text-gray-200 text-sm font">
                                    Possuo experiência prática com as principais tecnologias de desenvolvimento web, incluindo HTML5, CSS3 e JavaScript, além de frameworks e plataformas como React, 
                                    NodeJS, Laravel, Java, Spring, Figma, WordPress, Wix e Shopify. Essas ferramentas me capacitam a criar sites que são não apenas visualmente atraentes, mas também 
                                    otimizados para desempenho e funcionalidade. Meu compromisso é desenvolver soluções web que atendam perfeitamente às necessidades dos meus clientes, 
                                    seja em projetos simples ou em soluções complexas e personalizadas.
                                </p>
                            </section>

                            <section className="mt-8">
                                <h3 className="text-purple-400 text-xl">Soft skills</h3>
                                <ul className="grid grid-cols-2 text-gray-200 text-sm">
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Comunicação</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Colaboração</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Proatividade</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Resolução</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Detalhismo</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Adaptabilidade</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Crítica</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Pontualidade</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Autodidatismo</li>
                                    <li className="flex items-center"><FaAnglesRight color="purple" className="mr-2" />Criatividade</li>
                                </ul>
                            </section>
                        </div>
                        
                        <div className="mx-8 grid grid-cols-2 md:grid-cols-3 text-white lg:grid-cols-4 gap-4 md:gap-0 md:w-1/2  mt-8 md:mt-0" data-aos="fade-up">
                            <div className="flex flex-col items-center">
                                <SiHtml5 className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2 md:block">HTML5</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiCss3 className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2 md:block">CSS3</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiJavascript className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">JavaScript</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiSpring className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">Spring</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiNodedotjs className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">Node.js</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiReact className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">React</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <SiLaravel className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">Laravel</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <FaJava className="md:w-20 md:h-20 w-12 h-12" />
                                <span className="text-gray-200 text-sm mt-2">Java</span>
                            </div>
                        </div>
                    </div>

                    <footer className="text-gray-200 flex flex-col justify-center items-center text-sm gap-1 mb-6 font-thin">
                        <span>Todos os direitos reservados</span>
                        <span>Desenvolvido <span className="text-purple-400">Erick Berdnaski│Dev.</span></span>
                    </footer>
                </>
        </div>
    );
}
