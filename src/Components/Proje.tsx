// Components/Proje.tsx
import { Card } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

export interface ProjeProps {
  id: number;
  imageSrc: string;
  title: string;
  desc: string;
  category?: string;
  technologies?: string[];
}

export const Proje = (props: ProjeProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [isVisibleEnough, setIsVisibleEnough] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { 
    id, 
    imageSrc, 
    title, 
    desc,
    technologies = []
  } = props;

  // İçerik taşıp taşmadığını kontrol et
  useEffect(() => {
    if (contentRef.current) {
      const isContentOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight;
      setIsOverflow(isContentOverflowing);
    }
  }, [desc]);

  // Kartın görünürlük durumunu kontrol et
  useEffect(() => {
    const currentCardRef = cardRef.current; // Ref'i bir değişkene ata
    if (!currentCardRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // Kartın en az %33'ü görünürse yeterli kabul edelim
        const visibleRatio = entry.intersectionRatio;
        setIsVisibleEnough(visibleRatio > 0.33);
      },
      {
        threshold: [0, 0.1, 0.33, 0.5, 0.7, 1],
        rootMargin: '15px'
      }
    );

    observer.observe(currentCardRef);

    return () => {
      // Cleanup fonksiyonunda değişkeni kullan
      observer.unobserve(currentCardRef);
    };
  }, []); // Bu effect sadece mount/unmount'ta çalışsın

  // Hover timer'ı temizle
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    // Sadece yeterince görünür kartlarda hover efekti göster
    if (!isVisibleEnough) return;
    
    setIsHovered(true);
    if (isOverflow) {
      // Timer'ı kısaltarak daha hızlı tepki verelim
      hoverTimerRef.current = setTimeout(() => {
        setShowReadMore(true);
      }, 100);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setShowReadMore(false);
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  };

  return (
    <Link to={`/projeler/${id}`} className="block no-underline">
      <Card 
        ref={cardRef}
        className={`bg-white dark:bg-gray-800 h-[500px] overflow-hidden relative transition-all duration-300 border-gray-200 dark:border-gray-700 ${
          isVisibleEnough 
            ? 'cursor-pointer hover:shadow-xl hover:border-cyan-400 dark:hover:border-cyan-500' 
            : 'cursor-default'
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="p-4 h-full overflow-hidden" ref={contentRef}>
          {/* Proje Görseli */}
          <div className="w-full h-48 overflow-hidden rounded-lg mb-4 border-2 border-gray-200 dark:border-gray-700 shadow-md">
            <img
              src={imageSrc}
              alt={title}
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered && isVisibleEnough ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          
          {/* Proje Başlığı */}
          <div className="mb-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent leading-tight">
              {title}
            </h2>
          </div>

          {/* Teknoloji Etiketleri */}
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-800/50 text-cyan-700 dark:text-cyan-300 text-xs font-semibold rounded-full border border-cyan-200 dark:border-cyan-700"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="px-3 py-1 bg-gradient-to-r from-rose-100 to-rose-50 dark:from-rose-900/50 dark:to-rose-800/50 text-rose-700 dark:text-rose-300 text-xs font-semibold rounded-full border border-rose-200 dark:border-rose-700">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}

          {/* Proje Açıklaması */}
          <div className="text-justify text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {desc.split('\n\n').map((paragraf, index) => (
              <p key={index} className="mb-3">
                {paragraf}
              </p>
            ))}
          </div>
        </div>

        {/* Gradient overlay - sadece yeterince görünür kartlarda göster */}
        {!isHovered && isOverflow && isVisibleEnough && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-800 dark:via-gray-800/80 dark:to-transparent pointer-events-none transition-opacity duration-300"></div>
        )}

        {/* Hover efekti - Animasyonlu - sadece yeterince görünür kartlarda göster */}
        <div className={`absolute inset-0 bg-gradient-to-t from-cyan-900/95 via-rose-900/90 to-transparent flex items-end justify-center backdrop-blur-sm transition-all duration-500 ease-in-out ${
          showReadMore && isVisibleEnough 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-full pointer-events-none'
        }`}>
          <div className={`text-white text-center p-6 w-full transition-all duration-500 delay-100 ${
            showReadMore && isVisibleEnough 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-2xl mb-3">💻</div>
            <div className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-rose-300 bg-clip-text text-transparent">
              Daha Fazlasını Oku
            </div>
            <div className="text-sm text-gray-200">Proje detaylarını görüntülemek için tıklayın</div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default Proje;