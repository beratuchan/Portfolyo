import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface PaginasyonProps {
  toplamSayfa?: number;
  mevcutSayfa?: number;
  sayfaDegistirme?: (sayfa: number) => void;
  maxGosterilenSayfa?: number;
  basePath?: string;
}

export const Paginasyon = ({ 
  toplamSayfa = 5, 
  mevcutSayfa: disMevcutSayfa, 
  sayfaDegistirme,
  maxGosterilenSayfa = 5,
  basePath 
}: PaginasyonProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // URL'den mevcut sayfayı ve base path'i al
  const pathParts = location.pathname.split('/');
  const urlMevcutSayfa = parseInt(pathParts.pop() || '1');
  const autoBasePath = pathParts.join('/');
  
  const finalBasePath = basePath || autoBasePath;
  
  const [icMevcutSayfa, setIcMevcutSayfa] = useState(1);
  
  const mevcutSayfa = disMevcutSayfa !== undefined ? disMevcutSayfa : icMevcutSayfa;

  useEffect(() => {
    if (!isNaN(urlMevcutSayfa) && urlMevcutSayfa !== icMevcutSayfa) {
      setIcMevcutSayfa(urlMevcutSayfa);
    }
  }, [urlMevcutSayfa, icMevcutSayfa]);

  const sayfaDegistir = (yeniSayfa: number) => {
    if (yeniSayfa < 1 || yeniSayfa > toplamSayfa) return;
    
    // Sayfanın en üstüne kaydır - SADECE paginasyon tıklamalarında
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
    
    if (sayfaDegistirme) {
      sayfaDegistirme(yeniSayfa);
    } else {
      setIcMevcutSayfa(yeniSayfa);
      navigate(`${finalBasePath}/${yeniSayfa}`);
    }
  };

  // Gösterilecek sayfa numaralarını hesapla
  const sayfaNumaralari = [];
  
  // Değişkenleri const olarak tanımla çünkü yeniden atanmıyorlar
  const baslangicSayfa = Math.max(1, mevcutSayfa - Math.floor(maxGosterilenSayfa / 2));
  const bitisSayfa = Math.min(toplamSayfa, baslangicSayfa + maxGosterilenSayfa - 1);
  
  // Eğer sayfa sayısı yetersizse, başlangıç sayfasını ayarla
  let adjustedBaslangicSayfa = baslangicSayfa;
  if (bitisSayfa - baslangicSayfa + 1 < maxGosterilenSayfa) {
    adjustedBaslangicSayfa = Math.max(1, bitisSayfa - maxGosterilenSayfa + 1);
  }
  
  for (let i = adjustedBaslangicSayfa; i <= bitisSayfa; i++) {
    sayfaNumaralari.push(i);
  }

  // Sayfa butonları için stil
  const sayfaButonStil = (sayfa: number) => 
    `flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 ${
      sayfa === mevcutSayfa 
        ? 'z-10 text-blue-600 border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-700 dark:text-white' 
        : 'text-gray-500 bg-white hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white'
    }`;

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="flex items-center h-10 text-base">
          {/* Önceki Sayfa Butonu */}
          <li>
            <button
              onClick={() => sayfaDegistir(mevcutSayfa - 1)}
              disabled={mevcutSayfa === 1}
              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-e-0 border-gray-300 rounded-s-lg ${
                mevcutSayfa === 1
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed dark:bg-gray-900 dark:text-gray-500'
                  : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            >
              <span className="sr-only">Previous</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
            </button>
          </li>

          {/* İlk Sayfa ve Üç Nokta */}
          {adjustedBaslangicSayfa > 1 && (
            <>
              <li>
                <button
                  onClick={() => sayfaDegistir(1)}
                  className={sayfaButonStil(1)}
                >
                  1
                </button>
              </li>
              {adjustedBaslangicSayfa > 2 && (
                <li>
                  <span className="flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    ...
                  </span>
                </li>
              )}
            </>
          )}

          {/* Sayfa Numaraları */}
          {sayfaNumaralari.map((sayfa) => (
            <li key={sayfa}>
              <button
                onClick={() => sayfaDegistir(sayfa)}
                className={sayfaButonStil(sayfa)}
                aria-current={sayfa === mevcutSayfa ? "page" : undefined}
              >
                {sayfa}
              </button>
            </li>
          ))}

          {/* Son Sayfa ve Üç Nokta */}
          {bitisSayfa < toplamSayfa && (
            <>
              {bitisSayfa < toplamSayfa - 1 && (
                <li>
                  <span className="flex items-center justify-center px-2 h-10 text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
                    ...
                  </span>
                </li>
              )}
              <li>
                <button
                  onClick={() => sayfaDegistir(toplamSayfa)}
                  className={sayfaButonStil(toplamSayfa)}
                >
                  {toplamSayfa}
                </button>
              </li>
            </>
          )}

          {/* Sonraki Sayfa Butonu */}
          <li>
            <button
              onClick={() => sayfaDegistir(mevcutSayfa + 1)}
              disabled={mevcutSayfa === toplamSayfa}
              className={`flex items-center justify-center px-4 h-10 leading-tight border border-gray-300 rounded-e-lg ${
                mevcutSayfa === toplamSayfa
                  ? 'text-gray-400 bg-gray-100 cursor-not-allowed dark:bg-gray-900 dark:text-gray-500'
                  : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
            >
              <span className="sr-only">Next</span>
              <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginasyon;