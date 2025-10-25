// Components/ProjeDetay.tsx
import { Card, Badge, Button, Table } from "flowbite-react";
import { useParams, Navigate } from "react-router-dom";

// Proje verilerini ayrı bir dosyadan import edin
import { projeler } from "../data/projeler.ts"; 

// Types
export interface ProjeProps {
  id: number;
  imageSrc: string;
  title: string;
  desc: string;
  category?: string;
  technologies?: string[];
  detailedDescription?: string;
  features?: string[];
  screenshots?: string[];
  technicalDetails?: {
    architecture?: string;
    database?: string;
    api?: string;
    deployment?: string;
  };
  demoUrl?: string;
  githubUrl?: string;
}

const ProjeDetayPage = () => {
  const { id } = useParams<{ id: string }>();
  const proje = projeler.find(p => p.id === parseInt(id || "0"));

  if (!proje) { 
    return <Navigate to="/404" replace />;
  }

  const { 
    imageSrc, 
    title, 
    desc,
    category,
    technologies = [],
    detailedDescription,
    features = [],
    technicalDetails,
    demoUrl,
    githubUrl
  } = proje;

  return (
    <div className="h-fit bg-gray-50 dark:bg-gray-900 px-4 py-8">
      {/* Hero Section */}
      <Card className="h-fit max-w-full bg-gradient-to-br from-cyan-500 via-rose-500 to-rose-600 text-white border-none shadow-2xl mb-6">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full md:w-1/3 h-64 object-cover rounded-xl shadow-lg border-4 border-white/20"
          />
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-4">
              {category && (
                <Badge 
                  color="light" 
                  className="px-4 py-1 text-sm font-semibold bg-white/90 text-cyan-700"
                >
                  {category}
                </Badge>
              )}
              {technologies.slice(0, 3).map((tech, index) => (
                <Badge 
                  key={index} 
                  className="px-4 py-1 text-sm font-semibold bg-white/80 text-rose-600"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">{title}</h1>
            <p className="text-xl mb-6 text-white/95 leading-relaxed">{desc}</p>
            <div className="flex gap-4">
              {demoUrl && (
                <Button 
                  as="a"
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-cyan-600 hover:bg-gray-100 font-semibold px-6 py-2 rounded-lg shadow-md transition-all"
                >
                  🚀 Demo'yu Gör
                </Button>
              )}
              {githubUrl && (
                <Button 
                  outline
                  as="a"
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-rose-600 font-semibold px-6 py-2 rounded-lg transition-all"
                >
                  💻 GitHub
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>

      {/* Proje Detayları Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Detaylı Açıklama */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            Proje Hakkında
          </h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
            {detailedDescription || desc}
          </p>
        </Card>

        {/* Özellikler */}
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            Temel Özellikler
          </h2>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start group">
                <span className="text-cyan-500 dark:text-cyan-400 mr-3 mt-1 text-lg group-hover:scale-110 transition-transform">✓</span>
                <span className="text-gray-700 dark:text-gray-300 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Teknolojiler */}
      {technologies.length > 0 && (
        <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent">
            Kullanılan Teknolojiler
          </h2>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <Badge 
                key={index} 
                size="lg" 
                className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-cyan-100 to-cyan-50 dark:from-cyan-900/50 dark:to-cyan-800/50 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-700 rounded-full"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Teknik Detaylar */}
          {technicalDetails && (
            <details className="mt-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700">
              <summary className="cursor-pointer text-lg font-bold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                📋 Teknik Detaylar
              </summary>
              <div className="mt-4">
                <Table className="border-separate border-spacing-y-2">
                  <tbody>
                    {technicalDetails.architecture && (
                      <tr className="bg-white dark:bg-gray-800 rounded-lg">
                        <td className="font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap px-4 py-3 rounded-l-lg">
                          🏗️ Mimari
                        </td>
                        <td className="text-gray-700 dark:text-gray-300 px-4 py-3 rounded-r-lg">
                          {technicalDetails.architecture}
                        </td>
                      </tr>
                    )}
                    {technicalDetails.database && (
                      <tr className="bg-white dark:bg-gray-800 rounded-lg">
                        <td className="font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap px-4 py-3 rounded-l-lg">
                          🗄️ Veritabanı
                        </td>
                        <td className="text-gray-700 dark:text-gray-300 px-4 py-3 rounded-r-lg">
                          {technicalDetails.database}
                        </td>
                      </tr>
                    )}
                    {technicalDetails.api && (
                      <tr className="bg-white dark:bg-gray-800 rounded-lg">
                        <td className="font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap px-4 py-3 rounded-l-lg">
                          🔌 API
                        </td>
                        <td className="text-gray-700 dark:text-gray-300 px-4 py-3 rounded-r-lg">
                          {technicalDetails.api}
                        </td>
                      </tr>
                    )}
                    {technicalDetails.deployment && (
                      <tr className="bg-white dark:bg-gray-800 rounded-lg">
                        <td className="font-bold text-cyan-600 dark:text-cyan-400 whitespace-nowrap px-4 py-3 rounded-l-lg">
                          🚀 Deployment
                        </td>
                        <td className="text-gray-700 dark:text-gray-300 px-4 py-3 rounded-r-lg">
                          {technicalDetails.deployment}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </details>
          )}
        </Card>
      )}
    </div>
  );
};

export default ProjeDetayPage;