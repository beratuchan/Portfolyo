import { type ProjeProps } from "../Components/ProjeDetayPage";
import chatassistCokdilli from "../assets/chatassist_cokdillichatbot.png";
import chatassistDuygu from "../assets/chatassist_duyguanalizi.png";
import chatassistVeritabani from "../assets/chatassist_veritabani.png";
import innovatexAsistan from "../assets/innovatex_asistan.png";
import innovatexBulut from "../assets/innovatex_bulut.png";
import sensorhubEndustri from "../assets/sensorhub_endustri.png";
import sensorhubTarim from "../assets/sensorhub_tarim.png";
import trendtechTrafik from "../assets/trendtech_trafik.png";

export const projeler: ProjeProps[] = [
  {
    id: 1,
    imageSrc: chatassistCokdilli,
    title: "ChatAssist - Çok Dilli Chatbot",
    desc: "15 dilde doğal konuşma işleme ve akıllı müşteri hizmetleri çözümü",
    category: "AI/ML",
    technologies: ["Python", "TensorFlow", "NLTK", "React", "FastAPI", "Docker", "Redis"],
    detailedDescription: "Gelişmiş doğal dil işleme teknolojileri kullanılarak geliştirilmiş, 15 farklı dili anlayabilen ve yanıt verebilen akıllı chatbot sistemi. Müşteri hizmetleri, teknik destek ve satış danışmanlığı gibi alanlarda kullanılmak üzere tasarlanmıştır.",
    features: [
      "15 dilde doğal konuşma işleme",
      "Gerçek zamanlı çeviri desteği",
      "Bağlam duyarlı konuşma yönetimi",
      "Öğrenme yeteneği ile sürekli gelişim",
      "Entegre müşteri hizmetleri modülü",
      "Duygu analizi ve ton ayarlama",
      "Çoklu platform entegrasyonu"
    ],
    technicalDetails: {
      architecture: "Microservices Architecture",
      database: "PostgreSQL + Redis Cache",
      api: "REST API with WebSocket Support",
      deployment: "AWS ECS + CloudFront"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/chatassist-multilingual"
  },
  {
    id: 2,
    imageSrc: chatassistDuygu,
    title: "ChatAssist - Duygu Analizi Modülü",
    desc: "Müşteri memnuniyeti tahmini ve duygu tabanlı yönlendirme sistemi",
    category: "AI/ML",
    technologies: ["Python", "PyTorch", "Transformers", "FastAPI", "React", "Chart.js"],
    detailedDescription: "Müşteri mesajlarını analiz ederek duygu durumunu tespit eden ve müşteri memnuniyeti tahmini yapan gelişmiş AI modülü. Bu modül sayesinde şirketler müşterilerinin memnuniyet seviyelerini anlık olarak ölçebilir ve gerekli müdahaleleri yapabilir.",
    features: [
      "Gerçek zamanlı duygu analizi",
      "Müşteri memnuniyeti skoru hesaplama",
      "Özel duygu sınıflandırma modeli",
      "Detaylı raporlama ve dashboard",
      "Entegre uyarı sistemi",
      "Tarihsel veri analizi",
      "Otomatik yönlendirme mekanizması"
    ],
    technicalDetails: {
      architecture: "Model-View-Controller",
      database: "PostgreSQL with Vector Extension",
      api: "FastAPI with Real-time Updates",
      deployment: "Google Cloud Run"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/chatassist-sentiment"
  },
  {
    id: 3,
    imageSrc: chatassistVeritabani,
    title: "ChatAssist - Veri Tabanı Optimizasyonu",
    desc: "Semantic search improvement ve performans iyileştirme projesi",
    category: "Backend",
    technologies: ["Python", "Elasticsearch", "PostgreSQL", "Redis", "SQLAlchemy", "Docker"],
    detailedDescription: "Mevcut veri tabanı sorgularını optimize eden ve semantic search özelliği ekleyen kapsamlı bir performans iyileştirme projesi. Arama performansını %300 artırarak kullanıcı deneyimini önemli ölçüde iyileştirdi.",
    features: [
      "Semantic search improvement",
      "Sorgu optimizasyonu ve indeksleme",
      "Önbellekleme stratejileri",
      "Veri sıkıştırma teknikleri",
      "Performans izleme ve analiz",
      "Otomatik yedekleme sistemi",
      "Scalable veri tabanı mimarisi"
    ],
    technicalDetails: {
      architecture: "Distributed Database Architecture",
      database: "PostgreSQL + Elasticsearch Cluster",
      api: "Optimized REST Endpoints",
      deployment: "AWS RDS + Elasticsearch Service"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/chatassist-database"
  },
  {
    id: 4,
    imageSrc: innovatexAsistan ,
    title: "Innovatex - Sanal Asistan Platformu",
    desc: "Doğal dil işleme ile akıllı müşteri hizmetleri ve otomasyon sistemi",
    category: "Full Stack",
    technologies: ["Node.js", "React", "MongoDB", "WebRTC", "Socket.io", "AWS Lambda"],
    detailedDescription: "Kurumsal müşteriler için geliştirilmiş, doğal dil işleme teknolojileriyle güçlendirilmiş sanal asistan platformu. Müşteri hizmetleri, randevu yönetimi, teknik destek ve satış süreçlerini otomatikleştirir.",
    features: [
      "Ses ve metin tabanlı etkileşim",
      "Akıllı yönlendirme ve önceliklendirme",
      "Entegre CRM sistemi",
      "Çok kanallı destek (web, mobil, sosyal medya)",
      "Otomatik öğrenme ve iyileştirme",
      "Gerçek zamanlı analitik",
      "API entegrasyon ağ geçidi"
    ],
    technicalDetails: {
      architecture: "Event-Driven Microservices",
      database: "MongoDB Atlas",
      api: "GraphQL + WebSocket",
      deployment: "Kubernetes on AWS"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/innovatex-virtual-assistant"
  },
  {
    id: 5,
    imageSrc: innovatexBulut,
    title: "Innovatex - Bulut Bilişim Altyapısı",
    desc: "Multi-cloud orchestrator development ve hibrit bulut yönetim sistemi",
    category: "Cloud/DevOps",
    technologies: ["Terraform", "Kubernetes", "Docker", "AWS", "Azure", "Python", "Ansible"],
    detailedDescription: "Farklı bulut sağlayıcıları arasında iş yükü yönetimi sağlayan gelişmiş multi-cloud orchestrator. Otomatik scaling, maliyet optimizasyonu ve güvenlik yönetimi özellikleri içerir.",
    features: [
      "Multi-cloud orchestrator development",
      "Otomatik scaling ve load balancing",
      "Maliyet optimizasyonu ve budget yönetimi",
      "Güvenlik ve uyumluluk denetimi",
      "CI/CD pipeline entegrasyonu",
      "Monitoring ve alerting sistemi",
      "Disaster recovery planı"
    ],
    technicalDetails: {
      architecture: "Cloud-Native Architecture",
      database: "Cloud Native Databases",
      api: "Kubernetes API + Custom Controllers",
      deployment: "Multi-cloud (AWS, Azure, GCP)"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/innovatex-cloud-orchestrator"
  },
  {
    id: 6,
    imageSrc: sensorhubEndustri,
    title: "IoT Sensor Hub - Endüstri 4.0 Monitor",
    desc: "Fabrika otomasyon ve predictive maintenance için akıllı sensör ağı",
    category: "IoT/Embedded",
    technologies: ["C++", "Python", "MQTT", "Node-RED", "InfluxDB", "Grafana", "Raspberry Pi"],
    detailedDescription: "Endüstri 4.0 standartlarına uygun olarak geliştirilmiş, fabrika otomasyon sistemleri için predictive maintenance ve gerçek zamanlı izleme çözümü. Makine verilerini toplayarak arıza tahmini ve önleyici bakım sağlar.",
    features: [
      "Gerçek zamanlı veri toplama ve analiz",
      "Predictive maintenance algoritmaları",
      "Enerji verimliliği izleme",
      "Dashboard ve raporlama sistemi",
      "Anomali tespit ve uyarı sistemi",
      "Remote monitoring ve kontrol",
      "OEE (Overall Equipment Effectiveness) hesaplama"
    ],
    technicalDetails: {
      architecture: "Edge Computing Architecture",
      database: "InfluxDB Time Series Database",
      api: "MQTT + REST API Gateway",
      deployment: "On-premise + Cloud Hybrid"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/iot-sensorhub-industry"
  },
  {
    id: 7,
    imageSrc: sensorhubTarim ,
    title: "IoT Sensor Hub - Akıllı Tarım Çözümü",
    desc: "Toprak nemi ve iklim sensörü ağı ile precision farming sistemi",
    category: "IoT/Embedded",
    technologies: ["Python", "Arduino", "LoRaWAN", "AWS IoT Core", "React Native", "MongoDB"],
    detailedDescription: "Modern tarım uygulamaları için geliştirilmiş, toprak nemi ve iklim sensörü ağı kullanan akıllı tarım çözümü. Çiftçilere sulama, gübreleme ve hasat için veri destekli karar verme imkanı tanır.",
    features: [
      "Toprak nemi ve sıcaklık izleme",
      "İklim verileri toplama ve tahmin",
      "Otomatik sulama kontrol sistemi",
      "Mobil bildirim ve alarmlar",
      "Enerji otonomisi (güneş paneli)",
      "Mahsul verimi tahmini",
      "Pazar fiyatı entegrasyonu"
    ],
    technicalDetails: {
      architecture: "IoT Mesh Network",
      database: "AWS Timestream",
      api: "MQTT + AWS IoT Core",
      deployment: "AWS IoT Ecosystem"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/iot-sensorhub-agriculture"
  },
  {
    id: 8,
    imageSrc: trendtechTrafik ,
    title: "TrendTech - Akıllı Şehir Trafik Yönetim Sistemi",
    desc: "Gerçek zamanlı trafik analizi ve optimizasyonu için AI destekli sistem",
    category: "AI/ML & IoT",
    technologies: ["Python", "OpenCV", "TensorFlow", "React", "Node.js", "PostgreSQL", "Docker"],
    detailedDescription: "Akıllı şehirler için geliştirilmiş, gerçek zamanlı trafik analizi ve optimizasyonu yapan kapsamlı trafik yönetim sistemi. Kameralar ve sensörlerden gelen verileri işleyerek trafik akışını iyileştirir ve kaza riskini azaltır.",
    features: [
      "Gerçek zamanlı trafik analizi",
      "Trafik sıkışıklığı tahmini ve önleme",
      "Akim ışık optimizasyonu",
      "Kaza tespit ve otomatik uyarı sistemi",
      "Halka açık trafik dashboard",
      "Araç sayımı ve sınıflandırma",
      "Entegre acil durum yönlendirmesi"
    ],
    technicalDetails: {
      architecture: "Distributed Edge AI System",
      database: "PostgreSQL + Redis Cache",
      api: "REST API + WebSocket Real-time",
      deployment: "Hybrid (Edge Devices + Cloud)"
    },
    demoUrl: "/xd",
    githubUrl: "https://github.com/username/trendtech-traffic-management"
  }
];