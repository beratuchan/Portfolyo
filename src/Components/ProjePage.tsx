import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import { projeler } from "../data/projeler";
import {Proje} from "./Proje";
import Paginasyon from "./Paginasyon";

const ProjePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const outletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (location.pathname === "/projeler") {
      navigate("/projeler/1", { replace: true });
    }
  }, [location, navigate]);

  // Proje değiştiğinde Outlet bölümüne scroll yap
  useEffect(() => {
    if (outletRef.current && location.pathname.includes('/projeler/')) {
      setTimeout(() => {
        outletRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
    }
  }, [location.pathname]);

  return (        
    <div className="flex flex-col min-h-screen">
      {/* Ana İçerik */}
      <div className="flex-1 p-6 flex gap-6">
        {/* Sol Sütun - Proje Listesi */}
        <div className="hidden md:block md:w-1/2 lg:w-1/4 h-full">
          <h1 className="text-3xl font-bold text-center mb-8 text-blue-500 dark:text-blue-400">
            Projelerim
          </h1>
          <div className="md:max-h-[180vh] lg:max-h-[110vh] overflow-y-auto pr-2
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-neutral-700
            dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="space-y-6">
              {projeler.map((proje) => (
                <Proje key={proje.id} {...proje} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Sağ Sütun - Outlet (Scroll hedefi) */}
        <div ref={outletRef} className="w-full md:w-1/2 lg:w-3/4">
          <Outlet context={{ projeler }} />
        </div>
      </div>
      
      {/* Paginasyon - En altta */}
      <div className="relative inline-flex items-center justify-center md:hidden p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <Paginasyon />
      </div>
    </div>
  );
};

export default ProjePage;