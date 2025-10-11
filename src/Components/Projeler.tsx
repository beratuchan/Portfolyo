
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

export function Projeler() {
  const projects = [
    {
      image: "src/assets/chatassist_cokdillichatbot.png",
      title: "ChatAssist - Çok Dilli Chatbot",
      desc: "15 dilde doğal konuşma işleme"
    },
    {
      image: "src/assets/chatassist_duyguanalizi.png", 
      title: "ChatAssist - Duygu Analizi Modülü",
      desc: "Müşteri memnuniyeti tahmini"
    },
    {
      image: "src/assets/chatassist_veritabani.png",
      title: "ChatAssist - Veri Tabanı Optimizasyonu",
      desc: "Semantic search improvement"
    },
    {
      image: "src/assets/innovatex_asistan.png", 
      title: "Innovatex - Sanal Asistan Platformu ",
      desc: "Doğal dil işleme ile akıllı müşteri hizmetleri"
    },
        {
      image: "src/assets/innovatex_bulut.png",
      title: "Innovatex - Bulut Bilişim Altyapısı ",
      desc: "Multi-cloud orchestrator development"
    },
    {
      image: "src/assets/sensorhub_endustri.png", 
      title: "IOT Sensor Hub - Endüstri 4.0 Monitor",
      desc: "Fabrika otomasyon ve predictive maintenance"
    },
        {
      image: "src/assets/sensorhub_tarim.png", 
      title: "IOT Sensor Hub - Akıllı Tarım Çözümü",
      desc: "Toprak nemi ve iklim sensörü ağı"
    },
            {
      image: "src/assets/trendtech_trafik.png", 
      title: "TrendTech - Akıllı Şehir Trafik Yönetim Sistemi",
      desc: "Gerçek zamanlı trafik analizi ve optimizasyonu"
    },
    
  ];

  return (
      <Card >
        <h5 className="text-2xl text-center font-bold tracking-tight text-pink-500  dark:text-white">
          Dahil Olduğu Projeler:
        </h5>

        <Carousel className="aspect-square sm:aspect-[4/3] xl:aspect-[16/9]">
          {projects.map((project, index) => (
            <div key={index} className="relative h-full flex justify-center items-center">
              <img src={project.image} alt={project.title}/>
              <div className="absolute bottom-0 left-10px right-10px bg-black bg-opacity-50 text-center text-white ">
                <h3 className="text-7xl font-bold">{project.title}</h3>

              </div>
            </div>
          ))}
        </Carousel>
      </Card>
  );
}
