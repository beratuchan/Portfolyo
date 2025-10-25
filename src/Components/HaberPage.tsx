import { useEffect } from "react";
import { Haber } from "./Haber";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Paginasyon from "./Paginasyon";

// Haber verilerini ayrı dosyadan import et
import { haberler } from "../data/haberData";

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
      <div className="inline-flex items-center justify-center md:hidden p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <Paginasyon />
      </div>
    </div>
  );
};