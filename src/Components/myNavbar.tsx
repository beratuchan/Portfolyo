import { Dropdown, DropdownItem } from "flowbite-react";
import { NavLink } from "react-router-dom";

export const MyNavbar = () => {
  return (
    <div className="text-center">
      {/* Ana Sayfa */}
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
          <NavLink to={"/"}>Ana Sayfa</NavLink>
        </span>
      </button>

      {/* Basında Biz Dropdown */}
      <Dropdown
        label={
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Basında Biz
          </span>
        }
        dismissOnClick={true}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:fuchsia-800 amber-700 dark:focus:ring-pink-800"
      >
        <NavLink to="/haberler/1"><DropdownItem>Gelecek Nesil Mühendisler</DropdownItem></NavLink>
        <NavLink to="/haberler/2"><DropdownItem>Dijital Dönüşüm Dergisi</DropdownItem></NavLink>
        <NavLink to="/haberler/3"><DropdownItem>Kariyer Rotası</DropdownItem></NavLink>
        <NavLink to="/haberler/4"><DropdownItem>Sanayi ve Şehir</DropdownItem></NavLink>
        <NavLink to="/haberler/5"><DropdownItem>Tekno Vizyon</DropdownItem></NavLink>
      </Dropdown>

      {/* Projeler Dropdown */}
      <Dropdown
        label={
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Projeler
          </span>
        }
        dismissOnClick={true}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:fuchsia-800 amber-700 dark:focus:ring-pink-800"
      >
        <NavLink to="/projeler/1"><DropdownItem>Çok Dilli Chatbot</DropdownItem></NavLink>
        <NavLink to="/projeler/2"><DropdownItem>Duygu Analizi Modülü</DropdownItem></NavLink>
        <NavLink to="/projeler/3"><DropdownItem>ChatAssist - Veri Tabanı Optimizasyonu</DropdownItem></NavLink>
        <NavLink to="/projeler/4"><DropdownItem>Sanal Asistan Platformu</DropdownItem></NavLink>
        <NavLink to="/projeler/5"><DropdownItem>Bulut Bilişim Altyapısı</DropdownItem></NavLink>
        <NavLink to="/projeler/6"><DropdownItem>Endüstri 4.0 Monitor</DropdownItem></NavLink>
        <NavLink to="/projeler/7"><DropdownItem>Akıllı Tarım Çözümü</DropdownItem></NavLink>
        <NavLink to="/projeler/8"><DropdownItem>Akıllı Şehir Trafik Yönetim Sistemi</DropdownItem></NavLink>
      </Dropdown>

      {/* Devlog Dropdown */}
      <Dropdown
        label={
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
            Devlog
          </span>
        }
        dismissOnClick={true}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mt-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:fuchsia-800 amber-700 dark:focus:ring-pink-800"
      >
        <NavLink to="/devlog/1"><DropdownItem>ChatAssist'te Duygu Analizi Modelini Fine-tune Etmek</DropdownItem></NavLink>
        <NavLink to="/devlog/2"><DropdownItem>Microservices Mimarisine Geçiş: Monolith'ten Cloud-Native'e Yolculuk</DropdownItem></NavLink>
        <NavLink to="/devlog/3"><DropdownItem>Real-time Data Processing: Apache Kafka ve Spark Streaming ile Ölçeklenebilir Çözüm</DropdownItem></NavLink>
        <NavLink to="/devlog/4"><DropdownItem>React + TypeScript: Enterprise Seviyesinde Frontend Architecture Best Practices</DropdownItem></NavLink>
        <NavLink to="/devlog/5"><DropdownItem>MLOps Pipeline: Machine Learning Modellerini Production'a Taşımak</DropdownItem></NavLink>
      </Dropdown>


    </div>
  );
};