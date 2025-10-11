import {FooterCopyright } from "flowbite-react";

export function SayfaSonu() {
  return (
        <header className="relative gradient-background">
      {
    }
      <style>
        {`
          .gradient-background {
            background: linear-gradient(300deg, #00bfff, #ff4c68, #ef8172);
            background-size: 180% 180%;
            animation: gradient-animation 18s ease infinite;
          }

          @keyframes gradient-animation {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
        `}
      </style>
        <div
              className="relative h-28 bg-center bg-cover">
              <div className="absolute inset-0 bg-opacity-60 flex justify-center items-center">
                  <div className="flex flex-wrap justify-center items-center">
                <FooterCopyright href="#" by="DENİZ YILMAZ" year={2025} />
            </div>
          </div>
        </div>
      </header>
  );
}