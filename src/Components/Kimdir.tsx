import { Card } from "flowbite-react";
import { HRTrimmed } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";


export const Kimdir = () => {
  return (

    <Card className=" py-8 px-10 text-center shadow-lg dark:bg-gray-800 dark:text-gray-100">
      <Accordion>
          <AccordionPanel>
            <AccordionTitle><h5 className="text-3xl font-bold tracking-tight  text-pink-500 dark:text-pink-500 mb-6 text-center">KİMDİR?</h5></AccordionTitle>
            <AccordionContent>
      <p className="text-lg text-gray-700 dark:text-gray-300  mx-auto">
        1995 yılında İstanbul'da doğan yazılım mühendisi ve yapay zekâ uzmanı, teknoloji
        kariyerine lise yıllarında açık kaynak projelere katkıda bulunarak başlamıştır.
        Boğaziçi Üniversitesi Bilgisayar Mühendisliği bölümünden mezun olduktan sonra,
        Koç Üniversitesi'nde yapay zekâ ve derin öğrenme alanında yüksek lisansını
        tamamlamıştır. <HRTrimmed /> TrendTech'te akıllı şehir trafik yönetim sistemi geliştirerek
        2 milyon+ kullanıcıya hizmet veren bir altyapı kurmuştur. InnovateX'te sanal
        asistan platformu tasarlayarak doğal dil işleme teknolojilerinde önemli
        ilerlemeler kaydetmiştir. ChatAssist için geliştirdiği çok dilli chatbot sistemi,
        15 farklı dilde doğal konuşma işleyebilmektedir. Mikroservis mimarisi ve bulut bilişim alanında uzmanlaşarak 1M+ kullanıcı
        kapasiteli sistemlerin tasarım ve implementasyonunu yönetmiştir.
         <HRTrimmed />
        Eşiyle
        üniversite yıllarında tanışmış ve 2021 yılında evlenmiştir. 2023 doğumlu bir
        kız çocuk babası olarak, aile hayatına büyük önem vermektedir. Halen İstanbul'da ikamet etmekte ve otonom sistemler
        üzerine yenilikçi projeler geliştirmeye devam etmektedir.
      </p>
            </AccordionContent>
          </AccordionPanel>
      </Accordion>
    </Card>
  );
};

export default Kimdir;
