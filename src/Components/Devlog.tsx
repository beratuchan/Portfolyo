// Components/DevlogCarousel.tsx
import { Atlikarinca } from "./Atlikarinca";
import { devlogData } from "./DevlogDetay";

interface DevlogCarouselProps {
  maxItems?: number;
  title?: string;
  featuredOnly?: boolean;
}

export function Devlog({ 
  maxItems, 
  title = "Devlog Yazıları",
  featuredOnly = false 
}: DevlogCarouselProps) {
  let items = devlogData;

  // Öne çıkan yazılar için filtreleme
  if (featuredOnly) {
    items = devlogData.filter(devlog => 
      devlog.id === 1 || devlog.id === 3
    );
  }

  // Maksimum item sayısı
  if (maxItems) {
    items = items.slice(0, maxItems);
  }

  // Devlog detay sayfalarına link ekleyerek atlıkarınca verisini oluştur
  const atlikarincaItems = items.map(devlog => ({
    image: devlog.coverImage,
    title: devlog.title,
    desc: `${devlog.date} - ${devlog.author}`,
    link: `/devlog/${devlog.id}` // Devlog detay sayfasına link
  }));

  return (
    <Atlikarinca
      maintitle={title}
      projects={atlikarincaItems}
    />
  );
}