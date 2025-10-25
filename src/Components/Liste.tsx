import React from 'react';

export interface ListeProps {
  certifications: string[];
}

const Liste: React.FC<ListeProps> = (props) => {
  const { certifications } = props;
  
  return (
    <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
      <h5 className="text-2xl font-bold tracking-tight text-pink-500 dark:text-pink-500">
        Sertifikalar & Özel Yetkinlikler:
      </h5>
      <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
        {certifications.map((certification, index) => (
          <li key={index} className="flex items-center text-sm font-medium text-gray-900 dark:text-white mt-4">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
            {certification}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Liste;