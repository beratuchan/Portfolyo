import { StrictMode } from "react";
import { Egitim, type ExperienceItem } from "./Egitim.tsx"
import {Beceriler} from "./Beceriler.tsx"
import { Atlikarinca } from "./Atlikarinca.tsx";
import { SSS, type SSSItem } from "./SSS.tsx";
import { Alinti} from "./Alinti.tsx";
import { Vizyon } from "./Vizyon.tsx";
import {Kimdir} from "./Kimdir.tsx";
import {Iletisim} from "./Iletisim.tsx";
import { Card } from "flowbite-react/components/Card";
import Liste from "./Liste.tsx";

export const HomePage = () => {
  const projects = [
    {
      image: "src/assets/chatassist_cokdillichatbot.png",
      title: "ChatAssist - Çok Dilli Chatbot",
      desc: "15 dilde doğal konuşma işleme",
      link: "/projeler/1" // Proje detay sayfasına link
    },
    {
      image: "src/assets/chatassist_duyguanalizi.png", 
      title: "ChatAssist - Duygu Analizi Modülü",
      desc: "Müşteri memnuniyeti tahmini",
      link: "/projeler/2"
    },
    {
      image: "src/assets/chatassist_veritabani.png",
      title: "ChatAssist - Veri Tabanı Optimizasyonu",
      desc: "Semantic search improvement",
      link: "/projeler/3"
    },
    {
      image: "src/assets/innovatex_asistan.png", 
      title: "Innovatex - Sanal Asistan Platformu ",
      desc: "Doğal dil işleme ile akıllı müşteri hizmetleri",
      link: "/projeler/4"
    },
    {
      image: "src/assets/innovatex_bulut.png",
      title: "Innovatex - Bulut Bilişim Altyapısı ",
      desc: "Multi-cloud orchestrator development",
      link: "/projeler/5"
    },
    {
      image: "src/assets/sensorhub_endustri.png", 
      title: "IOT Sensor Hub - Endüstri 4.0 Monitor",
      desc: "Fabrika otomasyon ve predictive maintenance",
      link: "/projeler/6"
    },
    {
      image: "src/assets/sensorhub_tarim.png", 
      title: "IOT Sensor Hub - Akıllı Tarım Çözümü",
      desc: "Toprak nemi ve iklim sensörü ağı",
      link: "/projeler/7"
    },
    {
      image: "src/assets/trendtech_trafik.png", 
      title: "TrendTech - Akıllı Şehir Trafik Yönetim Sistemi",
      desc: "Gerçek zamanlı trafik analizi ve optimizasyonu",
      link: "/projeler/8"
    },
  ];

  const Certifications = [
    "AWS Certified Solutions Architect - Professional",
    "Certified Kubernetes Administrator (CKA)",
    "TensorFlow Developer Certified",
    "Scrum Master Certified (SMC)"
  ];

  const skillsData = {
    skills: [
      { name: "Microservices Architecture Design", rating: 4.9, displayRating: "4.9/5" },
      { name: "AI Model Deployment & MLOps", rating: 4.8, displayRating: "4.8/5" },
      { name: "Cloud Native Development (AWS/Azure)", rating: 4.9, displayRating: "4.9/5" },
      { name: "Distributed Systems & Scalability", rating: 4.7, displayRating: "4.7/5" },
      { name: "Real-time Data Processing", rating: 4.8, displayRating: "4.8/5" },
      { name: "DevOps & Kubernetes Orchestration", rating: 4.9, displayRating: "4.9/5" },
      { name: "Natural Language Processing (NLP)", rating: 4.4, displayRating: "4.4/5" }
    ],
  };

  const EducationData: ExperienceItem[] = [
    { time: "2013–2017", title: "Boğaziçi Üniversitesi, Bilgisayar Mühendisliği – Lisans" },
    { time: "2018–2020", title: "Koç Üniversitesi, Yapay Zekâ ve Veri Bilimi – Yüksek Lisans" }
  ];

  const ExperienceData: ExperienceItem[] = [
    { time: "2020–2022", title: "TrendTech – Yazılım Mühendisi" },
    { time: "2022-2023", title: "InnovateX – Kıdemli Yazılım Mühendisi" },
    { time: "2022-Devam Etmekte", title: "IoT Sensor Hub – Backend Developer" },
    { time: "2024-Devam Etmekte", title: "ChatAssist – AI Developer" }
  ];

  const Questions: SSSItem[] = [
    {
      question: "Yazılım geliştirme sürecinizde hangi metodolojileri kullanıyorsunuz?",
      answer: "Agile ve Scrum metodolojilerini temel alıyorum. Özellikle iki haftalık sprint'ler, düzenli retrolar ve sürekli entegrasyon yaklaşımıyla çalışıyorum. Mikroservis mimarilerinde Domain-Driven Design (DDD) prensiplerini uyguluyorum."
    },
    {
      question: "Aynı anda birden fazla şirkette nasıl çalışabiliyorsunuz?",
      answer: "Tüm çalışmalarım remote ve proje bazlı. Zaman yönetimimi Agile metodolojisiyle planlıyorum ve her proje için net deliverable'lar belirliyorum. Haftalık 55-60 saat çalışarak tüm taahhütlerimi yerine getirebiliyorum. Tüm işverenlerim bu düzenimden haberdar ve mutabık."
    },
    {
      question: "Yeni başlayan yazılımcılara ne tavsiye edersiniz?",
      answer: "Temel programlama prensiplerini iyi öğrenin - dil sadece bir araç. Problem çözme becerilerinizi geliştirin. Open source projelere katkıda bulunarak pratik yapın. Kod review süreçlerine dahil olun ve eleştirilere açık olun. Asla öğrenmeyi bırakmayın - bu sektörde durağanlık gerilemedir. Ve en önemlisi, tutkulu olduğunuz alanları bulun ve onlara odaklanın."
    },
    {
      question: "Teknoloji trendlerini nasıl takip ediyorsunuz?",
      answer: "Haftada 10+ saat teknik okumaya ayırıyorum. Arxiv.org, Hacker News, ve birkaç seçkin tech blog'unu takip ediyorum. Ayrıca open source projelere katkıda bulunarak ve teknik konferanslara katılarak pratik deneyim kazanıyorum. Her ay en az 2-3 teknik kitap bitirmeye çalışıyorum."
    },
    {
      question: "Favori projeniz hangisi ve neden?",
      answer: "Kesinlikle ChatAssist için geliştirdiğimiz Duygu Analizi Modülü benim favori projem. Bu proje, teknolojinin insan duygularını anlama ve yanıt verme potansiyelini somut bir şekilde gösterdiği için benim için çok özel."
    }
  ];

  return (        
    <StrictMode>
      <Kimdir/>
      <div className="grid lg:grid-cols-3">  
        <div className="flex stretch">
          <Card className="bg-gray-200 dark:bg-gray-600">
            <Egitim experience={EducationData} maintitle="Eğitim"/>
          </Card>
          <Card className="bg-gray-100 dark:bg-gray-700">
            <Egitim experience={ExperienceData} maintitle="İş Deneyimi"/>
          </Card>
        </div>
        <div className="lg:col-span-2">
          <Atlikarinca projects={projects} maintitle="Projeler" />
        </div>
      </div>
      <div className="lg:grid grid-cols-3 ">
        <Vizyon/>
        <Card className="bg-gray-200 dark:bg-gray-600">
          <Beceriler skills={skillsData.skills} maintitle="Uzmanlık Alanları" />
          <div className="mt-6 pt-6 border-t">
            <Liste certifications={Certifications} />
          </div>
        </Card>
        <div className="lg:grid grid-rows-2 ">    
          <Iletisim/>  
          <Alinti/>
        </div>
        <SSS questions={Questions}/>
      </div>
    </StrictMode>
  )
}

export default HomePage