// Components/DevlogDetay.tsx
import { Card } from "flowbite-react";
import { useParams, Navigate } from "react-router-dom";

import { devlogData } from "../data/devlogdata";
// Types
import type { DevlogBlock } from "../types/devlog";
import type { JSX } from "react";

const DevlogDetay = () => {
  const { id } = useParams<{ id: string }>();
  const devlog = devlogData.find(d => d.id === parseInt(id || "0"));

  if (!devlog) {
    return <Navigate to="/404" replace />;
  }

  const renderContent = (block: DevlogBlock, index: number) => {
    switch (block.type) {
      case 'paragraph': {
        return (
          <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify mb-5">
            {block.content}
          </p>
        );
      }
      
      case 'heading': {
        const HeadingTag = `h${block.level}` as keyof JSX.IntrinsicElements;
        return (
          <HeadingTag 
            key={index} 
            className={block.className || `text-${block.level === 2 ? '2xl' : 'xl'} font-semibold bg-gradient-to-r from-cyan-600 to-rose-500 bg-clip-text text-transparent mt-8 mb-3`}
          >
            {block.text}
          </HeadingTag>
        );
      }
      
      case 'code': {
        return (
          <div key={index} className="mb-6 rounded-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
            <div className="bg-gradient-to-r from-cyan-500 to-rose-500 px-4 py-2">
              <span className="text-white text-xs font-semibold">
                {block.language?.toUpperCase() || 'CODE'}
              </span>
            </div>
            <pre className="bg-gray-900 dark:bg-black text-gray-100 text-sm p-4 overflow-x-auto">
              <code>{block.code}</code>
            </pre>
          </div>
        );
      }
      
      case 'image': {
        return (
          <div key={index} className="mb-8">
            <img
              src={block.src}
              alt={block.alt}
              className="rounded-xl shadow-2xl mb-3 mx-auto border-4 border-gray-200 dark:border-gray-700 hover:shadow-cyan-500/50 transition-shadow duration-300"
            />
            {block.caption && (
              <p className="text-sm text-gray-500 dark:text-gray-400 italic text-center font-medium">
                {block.caption}
              </p>
            )}
          </div>
        );
      }
      
      case 'table': {
        return (
          <div key={index} className="mb-8 overflow-hidden rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-cyan-500 to-rose-500 text-white">
                <tr>
                  {block.headers.map((header, i) => (
                    <th key={i} className="px-6 py-3 text-left font-bold">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {block.rows.map((row, i) => (
                  <tr 
                    key={i} 
                    className={`${
                      i % 2 === 0 
                        ? 'bg-white dark:bg-gray-800' 
                        : 'bg-gray-50 dark:bg-gray-900'
                    } hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors`}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-6 py-3 text-gray-700 dark:text-gray-300 font-medium">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      
      case 'quote': {
        return (
          <blockquote 
            key={index} 
            className="relative border-l-4 pl-6 py-4 my-8 bg-gradient-to-r from-cyan-50 to-rose-50 dark:from-cyan-900/20 dark:to-rose-900/20 rounded-r-xl"
            style={{ borderImage: 'linear-gradient(180deg, #00bfff, #ff4c68) 1' }}
          >
            <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
              "{block.text}"
            </p>
            {block.author && (
              <footer className="text-sm text-cyan-600 dark:text-cyan-400 font-semibold">
                — {block.author}
              </footer>
            )}
          </blockquote>
        );
      }
      
      default: {
        return null;
      }
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-8 px-4">
      <Card className="p-8 bg-white dark:bg-gray-800 max-w-4xl mx-auto border-gray-200 dark:border-gray-700 shadow-xl">
        {/* Başlık Bölümü */}
        <div className="mb-8 pb-6 border-b-2" style={{
          borderImage: 'linear-gradient(90deg, #00bfff, #ff4c68) 1'
        }}>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-600 via-rose-500 to-rose-600 bg-clip-text text-transparent mb-4 leading-tight">
            {devlog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="text-lg">📅</span>
              <span className="font-medium">{devlog.date}</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-2 text-cyan-600 dark:text-cyan-400">
              <span className="text-lg">✍️</span>
              <span className="font-semibold">{devlog.author}</span>
            </span>
          </div>
        </div>

        {/* Kapak görseli */}
        {devlog.coverImage && (
          <div className="mb-10">
            <img
              src={devlog.coverImage}
              alt={devlog.title}
              className="rounded-2xl shadow-2xl mx-auto w-full border-4 border-gray-200 dark:border-gray-700 hover:shadow-cyan-500/30 transition-shadow duration-300"
            />
          </div>
        )}

        {/* İçerik */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {devlog.content.map((block, index) => renderContent(block, index))}
        </div>
      </Card>
    </div>
  );
};

export default DevlogDetay;