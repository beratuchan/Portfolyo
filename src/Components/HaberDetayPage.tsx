// components/HaberDetayPage.tsx
import { Card } from "flowbite-react";
import { useParams, Navigate } from "react-router-dom";
import { haberler } from "../data/haberData";

const HaberDetayPage = () => {
  const { kupurNo } = useParams<{ kupurNo: string }>();
  const haber = haberler.find(h => h.kupurNo === parseInt(kupurNo || "0"));

  if (!haber) { 
    return <Navigate to="/404" replace />;
  }

  const { 
    gazeteAdi, 
    tarih, 
    sayfa, 
    bolum, 
    baslik, 
    altBaslik, 
    icerik, 
    resimUrl 
  } = haber;

  return (
    <Card className="h-fit bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
      {/* Sol Sütun - Gazete Bilgileri */}
      <div>
        <Card className="h-fit max-w-full bg-gradient-to-br from-cyan-50 to-rose-50 dark:from-gray-900 dark:to-gray-900 border-2 border-transparent" 
          style={{
            borderImage: 'linear-gradient(135deg, #00bfff, #ff4c68) 1'
          }}>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            {gazeteAdi}
          </h2>
          <div className="space-y-2 mt-4">
            <div>
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">
                Kupür No: <span className="text-gray-700 dark:text-gray-300">#{kupurNo}</span>
              </p>  
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">📅</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{tarih}</span>
            </div>  
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">📄</span>
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Sayfa {sayfa}</span>
            </div>  
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">🏷️</span>
              <span className="text-sm text-rose-600 dark:text-rose-400 font-semibold">{bolum}</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Orta ve Sağ Sütun - İçerik */}
      <div className="space-y-6">
        {/* Başlık Bölümü */}

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-pink-500 dark:text-pink-500 leading-tight">
              {baslik}
            </h1>
            <h2 className="text-xl text-pink-400 dark:text-pink-400 italic border-l-4 border-pink-500 bg:border-pink-500 pl-4">
              {altBaslik}
            </h2>
          </div>


        {/* Resim ve İçerik */}
        <div className=" gap-6 text-center">

            <img 
              src={resimUrl} 
              alt="haber resmi" 
              className="w-1/3 h-1/3  block mx-auto rounded-lg"
            />

          

            <div className="prose max-w-none dark:prose-invert">
              {icerik.split('\n\n').map((paragraf, index) => (
                <p key={index} className="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  {paragraf}
                </p>
              ))}
            </div>

        </div>
      </div>
    </Card>
  );
};

export default HaberDetayPage;