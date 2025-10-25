import { Card } from "flowbite-react"
import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"

// Props interface'ini tanımlama
export interface HaberProps {
  kupurNo: number;
  gazeteAdi: string;
  tarih: string;
  sayfa: string;
  bolum: string;
  baslik: string;
  altBaslik: string;
  icerik: string;
  resimUrl: string;
}

export const Haber = (props: HaberProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isOverflow, setIsOverflow] = useState(false)
  const [showReadMore, setShowReadMore] = useState(false)
  const [isVisibleEnough, setIsVisibleEnough] = useState(true)
  const contentRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const { 
    kupurNo, 
    gazeteAdi, 
    tarih, 
    sayfa, 
    bolum, 
    baslik, 
    altBaslik, 
    icerik, 
    resimUrl 
  } = props

  // İçerik taşıp taşmadığını kontrol et
  useEffect(() => {
    if (contentRef.current) {
      const isContentOverflowing = contentRef.current.scrollHeight > contentRef.current.clientHeight
      setIsOverflow(isContentOverflowing)
    }
  }, [icerik])

  // Kartın görünürlük durumunu kontrol et
  useEffect(() => {
    if (!cardRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        // Kartın en az %33'ü görünürse yeterli kabul edelim
        const visibleRatio = entry.intersectionRatio
        setIsVisibleEnough(visibleRatio > 0.33)
      },
      {
        threshold: [0, 0.1, 0.33, 0.5, 0.7, 1],
        rootMargin: '15px'
      }
    )

    observer.observe(cardRef.current)

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  // Hover timer'ı temizle
  useEffect(() => {
    return () => {
      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current)
      }
    }
  }, [])

  const handleMouseEnter = () => {
    // Sadece yeterince görünür kartlarda hover efekti göster
    if (!isVisibleEnough) return
    
    setIsHovered(true)
    if (isOverflow) {
      // Timer'ı kısaltarak daha hızlı tepki verelim
      hoverTimerRef.current = setTimeout(() => {
        setShowReadMore(true)
      }, 100)
    }
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setShowReadMore(false)
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current)
      hoverTimerRef.current = null
    }
  }

  return (
    <Link to={`/haberler/${kupurNo}`} className="block no-underline">
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
          {/* Gazete Küpürü Başlığı */}
          <div className="mb-4 border-b-2 pb-2" style={{
            borderImage: 'linear-gradient(90deg, #00bfff, #ff4c68) 1'
          }}>
            <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100">
              #{kupurNo}: {bolum}
            </h3>
            <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
              <span className="text-cyan-600 dark:text-cyan-400">{gazeteAdi}</span> 
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-700 dark:text-gray-300">{tarih}</span>
              <span className="mx-2 text-gray-400">•</span>
              <span className="text-gray-700 dark:text-gray-300">Sayfa: {sayfa} | {bolum}</span>
            </div>
          </div>

          {/* Resim */}
          <div className="float-left mr-4 mb-4 w-48 h-40 overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700">
            <img
              src={resimUrl}
              alt="Haber görseli"
              className={`w-full h-full object-cover transition-transform duration-300 ${
                isHovered && isVisibleEnough ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          
          {/* Haber Başlıkları */}
          <div className="mb-3">
            <h2 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent leading-tight mb-2">
              {baslik}
            </h2>
            <h3 className="text-base font-semibold text-gray-700 dark:text-gray-300 leading-tight">
              {altBaslik}
            </h3>
          </div>

          {/* Haber İçeriği */}
          <div className="text-justify text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
            {icerik.split('\n\n').map((paragraf, index) => (
              <p key={index} className="mb-3">
                {paragraf}
              </p>
            ))}
          </div>
        </div>

        {/* Gradient overlay - sadece yeterince görünür kartlarda göster */}
        {!isHovered && isOverflow && isVisibleEnough && (
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-gray-800 dark:via-gray-800/80 dark:to-transparent pointer-events-none"></div>
        )}

        {/* Hover efekti - sadece yeterince görünür kartlarda göster */}
        {showReadMore && isVisibleEnough && (
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/95 via-rose-900/90 to-transparent flex items-end justify-center backdrop-blur-sm">
            <div className="text-white text-center p-6 w-full">
              <div className="text-2xl mb-3">📰</div>
              <div className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-300 to-rose-300 bg-clip-text text-transparent">
                Daha Fazlasını Oku
              </div>
              <div className="text-sm text-gray-200">Haberin tamamını görüntülemek için tıklayın</div>
            </div>
          </div>
        )}
      </Card>
    </Link>
  )
}

export default Haber