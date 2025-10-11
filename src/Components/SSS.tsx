import { Card } from "flowbite-react";
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from "flowbite-react";

export function SSS() {
  return (
    <Card className="col-span-3">
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Sık Sorulan Sorular
      </h5>
    <Accordion>


      <AccordionPanel>
        <AccordionTitle>Yazılım geliştirme sürecinizde hangi metodolojileri kullanıyorsunuz?</AccordionTitle>
        <AccordionContent>
          <p className="text-gray-500 dark:text-gray-400">
                          Agile ve Scrum metodolojilerini temel alıyorum. Özellikle iki haftalık sprint'ler, 
              düzenli retrolar ve sürekli entegrasyon yaklaşımıyla çalışıyorum. Mikroservis 
              mimarilerinde Domain-Driven Design (DDD) prensiplerini uyguluyorum.&nbsp;
          </p>
        </AccordionContent>
      </AccordionPanel>


      <AccordionPanel>
        <AccordionTitle>Aynı anda birden fazla şirkette nasıl çalışabiliyorsunuz?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
Tüm çalışmalarım remote ve proje bazlı. Zaman yönetimimi Agile metodolojisiyle 
              planlıyorum ve her proje için net deliverable'lar belirliyorum. Haftalık 55-60 saat 
              çalışarak tüm taahhütlerimi yerine getirebiliyorum. Tüm işverenlerim bu düzenimden 
              haberdar ve mutabık.
          </p>
        </AccordionContent>
      </AccordionPanel>


      <AccordionPanel>
        <AccordionTitle>Yeni başlayan yazılımcılara ne tavsiye edersiniz?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
Temel programlama prensiplerini iyi öğrenin - dil sadece bir araç. Problem çözme 
              becerilerinizi geliştirin. Open source projelere katkıda bulunarak pratik yapın. 
              Kod review süreçlerine dahil olun ve eleştirilere açık olun. Asla öğrenmeyi 
              bırakmayın - bu sektörde durağanlık gerilemedir. Ve en önemlisi, tutkulu olduğunuz 
              alanları bulun ve onlara odaklanın.
          </p>
        </AccordionContent>
      </AccordionPanel>

            <AccordionPanel>
        <AccordionTitle>Teknoloji trendlerini nasıl takip ediyorsunuz?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
Haftada 10+ saat teknik okumaya ayırıyorum. Arxiv.org, Hacker News, 
              ve birkaç seçkin tech blog'unu takip ediyorum. Ayrıca open source projelere katkıda 
              bulunarak ve teknik konferanslara katılarak pratik deneyim kazanıyorum. Her ay en 
              az 2-3 teknik kitap bitirmeye çalışıyorum.
          </p>
        </AccordionContent>
      </AccordionPanel>

      <AccordionPanel>
        <AccordionTitle>Favori projeniz hangisi ve neden?</AccordionTitle>
        <AccordionContent>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
              Kesinlikle <strong>ChatAssist için geliştirdiğimiz Duygu Analizi Modülü</strong> benim favori projem. 
              Bu proje, teknolojinin insan duygularını anlama ve yanıt verme potansiyelini somut bir şekilde 
              gösterdiği için benim için çok özel.
          </p>
        </AccordionContent>
      </AccordionPanel>


    </Accordion>
  </Card>
  );
}
