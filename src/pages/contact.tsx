import { useEffect, useRef, useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Header } from "@/components/header/header";
import emailjs from '@emailjs/browser';

export function Contact() {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const form = useRef<HTMLFormElement | null>(null); // Ref for the form

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [company, setCompany] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const handleMenuToggle = (isVisible: boolean) => {
        setIsMenuVisible(isVisible);
    };

    function sendEmail(e: React.FormEvent) {
        e.preventDefault();

        if(name === '' || email === '' || whatsapp === '' || message === '') {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        emailjs.sendForm(
            "service_j6ddtri", // Seu ID de serviço do emailjs
            "template_j3bde7c", // Seu ID de template do emailjs
            form.current!,      // Ref do formulário
            "pVEvOUtUTzAwc9SAX" // Sua chave pública do emailjs
        ).then((response) => {
            alert("Email enviado com sucesso!");
            console.log("EMAIL ENVIADO", response.status, response.text);

            // Resetando os campos
            setName("");
            setEmail("");
            setWhatsapp("");
            setCompany("");
            setMessage("");
        }, (err) => {
            console.error("ERRO: ", err);
            alert("Erro ao enviar email, tente novamente.");
        });
    }

    return (
        <div className="bg-black min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70">
                <Header onMenuToggle={handleMenuToggle} />
            </header>

            <>
                <div className="flex flex-col items-center w-full mt-20 gap-2" data-aos="fade-up">
                    <h3 className="text-purple-400 md:text-xl text-lg font-semibold">Vamos conversar!</h3>
                    <h1 className="text-white md:text-4xl font-bold text-center text-2xl">Entre em Contato</h1>
                </div>

                <main className="mx-8 flex-grow flex flex-col md:flex-row mt-8">
                    <section className="flex flex-col md:mt-16 md:h-[50vh] justify-center md:w-1/2 w-full" data-aos="fade-right">
                        <div className="gap-2 flex flex-col">
                            <h1 className="text-white font-bold md:leading-relaxed text-md md:text-4xl">
                                Pronto para transformar suas ideias em realidade?
                            </h1>
                            <p className="text-gray-200 font-thin md:text-md text-sm">
                                Estou aqui para ajudar você a criar soluções digitais que impulsionam o crescimento
                                do seu negócio. Entre em contato para discutirmos suas necessidades e como podemos
                                alcançar seus objetivos juntos.
                            </p>
                        </div>

                        <div className="flex flex-col items-start justify-start text-start mt-8">
                            <p className="text-purple-400 font-semibold text-sm">Contate-me</p>
                            <div className="flex items-center text-gray-200">
                                <FiMail className="mr-2 w-5 h-5 text-purple-500" />Email: berdnaski1177@gmail.com
                            </div>
                            <div className="flex items-center text-gray-200">
                                <FaLocationDot className="mr-2 w-5 h-5 text-purple-500" />Localização:
                            </div>
                        </div>

                        <div className="flex items-center mt-8">
                            <h3 className="text-purple-400 font-semibold md:text-2xl text-xl">Redes Sociais:</h3>
                            <ul className={`flex text-zinc-100 space-x-4 p-4 ${isMenuVisible ? 'hidden' : ''}`}>
                                <li className="transform transition-transform duration-200 hover:-translate-y-2">
                                    <a href="#"><FaGithub size={25} /></a>
                                </li>
                                <li className="transform transition-transform duration-200 hover:-translate-y-2">
                                    <a href="#"><FaInstagram size={25} /></a>
                                </li>
                                <li className="transform transition-transform duration-200 hover:-translate-y-2">
                                    <a href="#"><FaLinkedin size={25} /></a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <section className="flex flex-col mt-8 xl:mt-20 md:h-[50vh] justify-center md:w-1/2 w-full" data-aos="fade-left">
                        <h1 className="flex justify-start items-start text-white font-bold md:text-xl text-md mb-2">Envie sua mensagem</h1>
                        <div className="flex flex-col w-full text-gray-200">
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-2">
                                <label className="text-sm">Nome</label>
                                <input
                                    type="text"
                                    name="from_name"  // Correspondente ao template
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="h-9 p-2 border-0 rounded-lg outline-none bg-zinc-800"
                                />

                                <label className="text-sm md:text-lg">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="h-9 p-2 border-0 rounded-lg outline-none bg-zinc-800"
                                />

                                <label className="text-sm md:text-lg">WhatsApp</label>
                                <input
                                    type="text"
                                    name="phone_number"
                                    value={whatsapp}
                                    onChange={(e) => setWhatsapp(e.target.value)}
                                    className="h-9 p-2 border-0 rounded-lg outline-none bg-zinc-800"
                                />

                                <label className="text-sm md:text-lg">Empresa (Opcional)</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="h-9 p-2 border-0 rounded-lg outline-none bg-zinc-800"
                                />

                                <label className="text-sm md:text-lg">Mensagem</label>
                                <textarea
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="h-28 border-0 rounded-lg outline-none bg-zinc-800 pl-2 pt-2 font-thin placeholder-gray-400"
                                    placeholder="Descreva um pouco do seu projeto..."
                                ></textarea>

                                <div className="mt-2">
                                    <button className="border-0 bg-purple-700 w-full md:h-12 h-9 rounded-lg md:text-xl text-md md:font-semibold font-thin hover:bg-purple-600">
                                        Enviar Mensagem
                                    </button>
                                </div>
                            </form>
                        </div>
                    </section>
                </main>

                <footer className="text-gray-200 flex flex-col justify-center items-center text-sm gap-1 mb-6 font-thin mt-9 md:mt-36">
                    <span>Todos os direitos reservados</span>
                    <span>Desenvolvido <span className="text-purple-400">Erick Berdnaski│Dev.</span></span>
                </footer>
            </>
        </div>
    );
}
