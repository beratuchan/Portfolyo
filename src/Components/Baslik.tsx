import { Avatar } from "flowbite-react";

export const Baslik = () => {
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
        className="relative h-96 bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-opacity-60 flex justify-center items-center">
          <div className="text-center text-white px-4">
                      <div className="flex flex-wrap gap-2 justify-center items-center">
            <Avatar img="/src/assets/denizyilmaz.jpg" bordered color="light" size="xl" className="mb-3"/> 
          </div>
            <h1 className="text-4xl font-bold mt-3 mb-3">DENİZ YILMAZ</h1>
            <h4 className="text-xl mt-3 ">Senior Yazılım Mühendisi & AI Developer</h4>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Baslik