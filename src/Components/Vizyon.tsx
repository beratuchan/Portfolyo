import { Card } from "flowbite-react";

export function Vizyon() {
  return (
    <Card>
            <h5 className="text-2xl font-bold tracking-tight  text-pink-500 dark:text-pink-500">
        Vizyon:
      </h5>
  <p className="text-lg leading-relaxed dark:text-white">
                <strong>Teknolojinin insan hayatını iyileştirme potansiyelini en üst düzeye çıkarmak</strong> için, 
                yapay zekâ ve yazılım mühendisliği alanındaki uzmanlığımı kullanarak, kullanıcı odaklı, 
                ölçeklenebilir ve etik çözümler geliştirmek. Her projede anlamlı etkiler yaratmak ve 
                teknolojiyi insanlığın hizmetine sunmak.
              </p>
              <div className="text-center">
            <img src="/src/assets/kodlama.png" width="300px" alt="Kodlama" className="inline-block rounded-full" />
            </div>
                    <h5 className="text-2xl font-bold tracking-tight  text-pink-500 dark:text-pink-500 " >
        Misyon:
      </h5 >
       <p className="text-lg leading-relaxed dark:text-white">
            <strong className="dark:text-white">Yapay zekânın insan yeteneklerini tamamladığı değil, insan potansiyelini özgürleştirdiği bir gelecek inşa etmek.</strong> 
                Teknolojinin dil, kültür ve yetenek engellerini ortadan kaldırdığı, her bireyin kişiselleştirilmiş 
                çözümlerle güçlendiği daha kapsayıcı ve erişilebilir bir dünya için çalışmak.
        </p>
    </Card>
  );
}