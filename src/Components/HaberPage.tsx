import { useEffect } from "react";
import { Haber, type HaberProps } from "./Haber";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Paginasyon from "./Paginasyon";

import bir from "../assets/habergorsel/ilk.jpeg"
import iki from "../assets/habergorsel/iki.jpeg"
import uc from "../assets/habergorsel/uc.jpeg"
import dort from "../assets/habergorsel/dort.jpeg"
import bes from "../assets/habergorsel/bes.jpg"

export const haberler: HaberProps[] = [
    {
      kupurNo: 1,
      gazeteAdi: "Gelecek Nesil Mühendisler",
      tarih: "25 Ocak 2025",
      sayfa: "4",
      bolum: "Eğitim & Kariyer",
      baslik: "Eğitimle Şekillenen Bir Başarı Hikayesi",
      altBaslik: "\"Yapay Zekâya Tutku, Problem Çözmeye Adanmışlık\": Genç Mühendis Yeni Başlayanlara Işık Tutuyor",
      icerik: `Eğitim geçmişiyle de göz dolduran mühendis, Boğaziçi Üniversitesi Bilgisayar Mühendisliği'ndeki lisans eğitiminin ardından Koç Üniversitesi'nde Yapay Zekâ ve Veri Bilimi alanında yüksek lisans yaparak bilgi birikimini zirveye taşımış bir isim. Bu sağlam akademik temel, ona Doğal Dil İşleme (NLP) ve AI Model Deployment gibi alanlarda eşsiz bir bakış açısı kazandırmış.

Yeni başlayan yazılımcılara yönelik samimi tavsiyeleriyle de ilham kaynağı oluyor:

"Temel programlama prensiplerini iyi öğrenin - dil sadece bir araç. Problem çözme becerilerinizi geliştirin. Open source projelere katkıda bulunarak pratik yapın. Kod review süreçlerine dahil olun ve eleştirilere açık olun. Asla öğrenmeyi bırakmayın - bu sektörde durağanlık gerilemedir. Ve en önemlisi, tutkulu olduğunuz alanları bulun ve onlara odaklanın."

Bu yaklaşım, onun ChatAssist'in Duygu Analizi Modülü gibi insan duygularını anlayan projelerde neden bu kadar başarılı olduğunu da açıklıyor. Eğitimi ve sürekli öğrenme tutkusu, her projesine derin bir anlayış ve yenilikçi bir çözüm getirmesini sağlıyor.`,
      resimUrl: bir
    },
    {
      kupurNo: 2,
      gazeteAdi: "Dijital Dönüşüm Dergisi",
      tarih: "08 Ağustos 2024",
      sayfa: "7",
      bolum: "Uzman Görüşü",
      baslik: "Bulut ve YZ Uzmanı Sahada",
      altBaslik: "Sertifikasyonlar Yalnızca Kâğıt Değil, Projelerin Omurgası Oldu",
      icerik: `Günümüzün rekabetçi teknoloji dünyasında, teorik bilginin pratikle buluştuğu noktada gerçek uzmanlık parlıyor. Bu yaklaşımın en iyi örneklerinden biri olan genç mühendis, sadece projeleriyle değil, aynı zamanda sahip olduğu prestijli sertifikasyonlarla da dikkat çekiyor.

Kendisini "Bulut Bilişim Altyapısı" ve "AI Model Deployment & MLOps" alanlarında kanıtlayan mühendisin portföyünde "AWS Certified Solutions Architect - Professional", "Certified Kubernetes Administrator (CKA)" ve "TensorFlow Developer Certified" gibi kritik sertifikalar bulunuyor. Bu sertifikalar, yalnızca birer unvan olmanın ötesinde, mühendisin Microservices Architecture Design ve Cloud Native Development alanlarındaki derin bilgisinin birer tescili niteliğinde.

"Sertifikasyonlar, özellikle dağıtık sistemler ve gerçek zamanlı veri işleme gibi karmaşık projelerde, güvenilirliğin ve teknik yeterliliğin bir göstergesi. Bu sayede sadece çözümler üretmiyor, aynı zamanda sektör standartlarında en iyi uygulamaları hayata geçirebiliyoruz," yorumunda bulundu. Bu yaklaşım, Innovatex'in "Multi-cloud Orchestrator Development" gibi iddialı bulut projelerinde kendini gösteriyor.`,
      resimUrl: iki
    },
    {
      kupurNo: 3,
      gazeteAdi: "Kariyer Rotası",
      tarih: "20 Nisan 2025",
      sayfa: "1",
      bolum: "Manşet",
      baslik: "Dört Şirkette Eş Zamanlı Başarı",
      altBaslik: "\"Agile ve Scrum ile Zamanı Yönetmek Mümkün\": Çoklu Görev Başarısının Sırları",
      icerik: `Yazılım dünyasının yükselen yıldızlarından, Boğaziçi Bilgisayar Mühendisliği ve Koç Yapay Zekâ Yüksek Lisans mezunu mühendis, kariyerindeki sıra dışı yapıyla dikkat çekiyor. Aynı anda InnovateX, IoT Sensor Hub, ChatAssist ve eski tecrübesi TrendTech gibi önde gelen teknoloji şirketlerine proje bazlı katkılar sunarak adından söz ettiriyor.

Genç mühendis, bu yoğun tempoyu ve yüksek verimliliği nasıl sağladığı sorulduğunda, sırrının net olduğunu belirtti: "Agile ve Scrum metodolojileri."

"Tüm çalışmalarım remote ve proje bazlı. Haftalık 55-60 saatlik programımı, her sprint için net teslimatlar belirleyerek yönetiyorum. Kritik olan; tüm işverenlerimin bu düzeni onaylaması ve benim de Microservices Architecture ile Scalability konularındaki yetkinliğimi kullanarak taahhütlerimi fazlasıyla yerine getirmemdir. Bu sektörde durağanlık gerilemedir; sürekli öğrenme ve teknik okumalarla (Haftada 10+ saat) kendimi güncel tutuyorum."

Mühendisin Innovatex için geliştirdiği "Sanal Asistan Platformu" ve "Bulut Bilişim Altyapısı" projeleri, karmaşık sistemleri yönetme ve ölçeklendirme konusundaki becerisinin somut örnekleri olarak gösteriliyor.`,
      resimUrl: uc
    },
    {
      kupurNo: 4,
      gazeteAdi: "Sanayi ve Şehir",
      tarih: "03 Aralık 2023",
      sayfa: "5",
      bolum: "İnovasyon",
      baslik: "Endüstri 4.0'da Türk İmzası",
      altBaslik: "Sensör Teknolojisi ve YZ Gücüyle Predictive Maintenance Çağı Başladı",
      icerik: `IoT Sensor Hub projeleri, sanayi ve tarım sektörlerinde dijital dönüşüme öncülük ediyor. Şirket bünyesinde geliştirilen Endüstri 4.0 Monitör sistemi, fabrikalarda otomasyonu ve "predictive maintenance" (öngörücü bakım) süreçlerini yeni bir seviyeye taşıdı. Kritik makine verilerinin gerçek zamanlı analizi sayesinde, beklenmedik arızaların önüne geçilerek milyonlarca liralık kayıp engellendi.

Öte yandan, aynı uzmanlık, "Akıllı Tarım Çözümü" ile tarım arazilerine de taşındı. Toprak nemi ve iklim sensörlerinden toplanan verilerle, çiftçilere en doğru sulama ve gübreleme zamanlamaları sunuluyor.

Bu teknolojik atılımlar, mühendisin "AWS Certified Solutions Architect - Professional" ve "Certified Kubernetes Administrator (CKA)" gibi sertifikasyonlarla pekiştirilmiş Cloud Native ve DevOps uzmanlığının ürünleri olarak görülüyor. TrendTech için geliştirilen Akıllı Şehir Trafik Yönetim Sistemi de, bu altyapısal gücün şehir yönetimindeki başarısını gösteriyor.`,
      resimUrl: dort
    },
    {
      kupurNo: 5,
      gazeteAdi: "Tekno Vizyon",
      tarih: "15 Eylül 2024",
      sayfa: "3",
      bolum: "Yapay Zekâ Özel",
      baslik: "ChatAssist'in Çok Dilli Başarısı",
      altBaslik: "Yerli Mühendislik İle Global Etki: Duygu Analizi Modülü Müşteri Memnuniyetini Uçuruyor!",
      icerik: `Yapay Zekâ (YZ) alanındaki hızlı ilerlemeler, yerel yeteneklerle global standartları yakalıyor. ChatAssist platformu için geliştirilen, 15 farklı dilde doğal konuşma işleme (NLP) yeteneğine sahip Çok Dilli Chatbot projesi, uluslararası pazarda büyük ilgi uyandırdı.

Projenin arkasındaki genç mühendislik ekibinden gelen bilgilere göre, sadece dil çeşitliliği değil, aynı zamanda projenin Duygu Analizi Modülü de sektörde fark yaratıyor. Bu modül, müşteri etkileşimlerinden elde edilen verilerle "Müşteri memnuniyeti tahmini" yaparak şirketlerin hizmet kalitesini proaktif bir şekilde artırmasına olanak tanıyor.

Projenin Baş Geliştiricisi, bu başarıyı "Dağıtık Sistemler ve MLOps konusundaki yetkinliğimizin somut bir sonucu. Bulut Bilişim Altyapısı ve Semantic Search optimizasyonu ile desteklenen bu modüller, gerçek zamanlı veri işleme yeteneklerimizin gücünü gösteriyor," sözleriyle yorumladı.

ChatAssist'in başarısı, mühendisin sadece teknik yeteneklerini değil, aynı zamanda iş dünyasının ihtiyaçlarını anlama ve bunlara yenilikçi çözümler getirme konusundaki üstün yeteneğini de ortaya koyuyor.`,
      resimUrl: bes
    }];

export const HaberPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Eğer /haberler path'indeysek ve hiçbir alt route yoksa 1 numaralı habere yönlendir
    if (location.pathname === "/haberler") {
      navigate("/haberler/1", { replace: true });
    }
  }, [location, navigate]);

  return (
        <div className="flex flex-col min-h-screen">
      <div className="p-6 flex gap-6">
        {/* Sol Sütun - Haber Listesi */}
        <div className="hidden md:block md:w-1/2 lg:w-1/4 h-full">
          <h1 className="text-3xl font-bold text-center mb-8 text-pink-500 dark:text-pink-500">
            Basında Biz
          </h1>
          <div className="md:max-h-[135vh] lg:max-h-[100vh] overflow-y-auto pr-2
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-pink-700
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-pink-500">
            <div className="space-y-6">
              {haberler.map((haber, index) => (
                <Haber key={index} {...haber} />
              ))}
            </div>
          </div>
        </div>
        
          {/* Sağ Sütun - Outlet */}
          <div className="w-full md:w-1/2 lg:w-3/4">
            <Outlet context={{ haberler }} />
          </div>
      </div>
      
      {/* Paginasyon - En altta */}
      <div className=" inline-flex items-center justify-center md:hidden p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <Paginasyon />
      </div>
    </div>
  );
};