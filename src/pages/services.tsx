import CardServices from "@/components/card-services/card-services";
import { Header } from "@/components/header/header";
import { FaLaptopCode, FaShoppingCart, FaLayerGroup, FaCogs, FaDesktop, FaLightbulb } from "react-icons/fa";

const cardData = [
    {
        title: 'Desenvolvimento de Landing Pages',
        description: 'Transformo suas ideias em páginas atraentes e otimizadas, com foco em conversão. Ideal para destacar seu produto, serviço ou negócio com uma presença online profissional e eficaz.',
        imgSrc: <FaDesktop size={80} className="bg-purple-800 p-4 rounded-3xl" />, 
    },
    {
        title: 'Criação de Ecommerces',
        description: 'Desenvolvo lojas virtuais completas, com design responsivo, integração de pagamentos e funcionalidades para impulsionar suas vendas online. Tudo o que você precisa para vender mais e crescer.',
        imgSrc: <FaShoppingCart size={80} className="bg-purple-800 p-4 rounded-3xl" />, 
    },
    {
        title: 'Soluções Fullstack Personalizadas',
        description: 'Desenvolvimento completo de aplicações web, do front ao back-end. Ofereço soluções sob medida para suas necessidades, com tecnologias modernas e escaláveis para garantir performance e segurança.',
        imgSrc: <FaLayerGroup size={80} className="bg-purple-800 p-4 rounded-3xl" />, 
    },
    {
        title: 'Otimização e Manutenção de Sites',
        description: 'Seu site precisa de ajustes? Faço otimizações para melhorar a performance, SEO, e garantir que sua plataforma funcione de forma eficiente, aumentando sua visibilidade e resultados online.',
        imgSrc: <FaCogs size={80} className="bg-purple-800 p-4 rounded-3xl" />, 
    },
    {
        title: 'Desenvolvimento de Aplicações Web',
        description: 'Criação de sistemas robustos e eficientes, como painéis administrativos, CRMs e plataformas sob demanda. Soluções práticas para agilizar processos e maximizar a produtividade da sua empresa.',
        imgSrc: <FaLaptopCode size={80} className="bg-purple-800 p-4 rounded-3xl" />, 
    },
    {
        title: 'Consultoria em Desenvolvimento Web',
        description: 'Precisa de orientação técnica para seu projeto? Ofereço consultoria personalizada para ajudá-lo a tomar decisões estratégicas no desenvolvimento e crescimento do seu site ou aplicação.',
        imgSrc: <FaLightbulb size={80} className="bg-purple-800 p-4 rounded-3xl" />,
    },
];


export function Services() {
    return (
        <div className="bg-black min-h-screen flex flex-col">
            <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-70">
                <Header />
            </header>

            <div className="flex-grow">
                    <div className='flex flex-col w-5/6 mx-auto'>
                        <div className="flex flex-col items-center justify-center gap-2 mt-20">
                            <h3 className="md:font-semibold md:text-xl text-md text-purple-400">Como posso te ajudar?</h3>
                            <h1 className="font-bold md:text-5xl text-2xl text-white">Explore meus serviços</h1>
                        </div>

                        <main className="md:grid md:grid-cols-3 items-center justify-center gap-[4rem] mb-10">
                            {cardData.map((card) => (
                                <CardServices key={card.title} {...card} />
                            ))}
                        </main>
                    </div>
            </div>

            <footer className="text-gray-200 flex flex-col justify-center items-center text-sm gap-1 mb-6 font-thin">
                <span>Todos os direitos reservados</span>
                <span>Desenvolvido <span className="text-purple-400">Erick Berdnaski│Dev.</span></span>
            </footer>
        </div>
    );
}
