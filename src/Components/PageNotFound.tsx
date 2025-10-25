import { useNavigate } from "react-router-dom";
import { Blockquote, Button } from "flowbite-react";

export const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="mx-auto mb-4 h-24 w-24 text-red-500 dark:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h1 className="text-6xl font-bold text-red-600 dark:text-red-500 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Sayfa Bulunamadı</h2>
          <Blockquote className="mb-4 text-gray-600 dark:text-gray-300">
            <p className="text-lg italic">"2b || !2b"</p>
            <footer className="text-sm mt-1">- William Shakespeare</footer>
          </Blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            Aradığınız sayfa mevcut değil. URL'yi kontrol edin veya aşağıdaki seçeneklerden birini deneyin.
          </p>
        </div>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button color="gray" onClick={() => navigate("/")}>
             🏠 Anasayfaya Dön
          </Button>
        </div>
      </div>
    </div>
  );
};