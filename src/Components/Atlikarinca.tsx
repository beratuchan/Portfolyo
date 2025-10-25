import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";


interface Project {
  image: string;
  title: string;
  desc: string;
  link?: string;
  externalLink?: boolean;
}

interface ProjelerProps {
  projects: Project[];
  maintitle: string;
}

export function Atlikarinca(props: ProjelerProps) {
  const { projects, maintitle } = props;
  const location = useLocation();

  // Link wrapper bileşeni
  const LinkWrapper = ({ project, children }: { project: Project; children: React.ReactNode }) => {
    if (!project.link) {
      return <div className="h-full w-full">{children}</div>;
    }

    if (project.externalLink) {
      return (
        <a 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block h-full w-full"
        >
          {children}
        </a>
      );
    }

    return (
      <Link 
        to={project.link} 
        className="block h-full w-full"
        onClick={() => {
          // Eğer zaten aynı sayfadaysak, scroll yapmak için biraz bekle
          if (location.pathname === project.link) {
            setTimeout(() => {
              const outletElement = document.querySelector('[data-outlet-ref]');
              if (outletElement) {
                outletElement.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }
            }, 100);
          }
        }}
      >
        {children}
      </Link>
    );
  };

  return (
    <Card className="dark:bg-gray-900">
      <h5 className="text-2xl text-center font-bold tracking-tight text-pink-500 dark:text-pink-500">
        {maintitle}
      </h5>

      <Carousel 
        className="aspect-auto sm:aspect-[4/3] xl:aspect-[16/9]"         
        leftControl={
          <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-pink-500 dark:bg-pink-500 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition-all duration-200">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        }
        rightControl={
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-pink-500 dark:bg-pink-500 hover:bg-white dark:hover:bg-gray-700 rounded-full p-2 shadow-lg transition-all duration-200">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        }
        indicators={false}
      >
        {projects.map((project, index) => (
          <LinkWrapper key={index} project={project}>
            <div className="relative h-full w-full flex justify-center items-center group cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-7 left-10 right-10 bg-none text-center">
                <h3 className="text-pink-500 bg-gray-200 dark:bg-gray-600 lg:text-5xl font-mono px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-pink-500 group-hover:text-white">
                  {project.title}
                </h3>
                {project.desc && (
                  <p className="text-white mt-2 text-lg bg-black bg-opacity-50 px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.desc}
                  </p>
                )}
                {project.link && (
                  <div className="absolute top-3 right-3 bg-pink-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          </LinkWrapper>
        ))}
      </Carousel>
    </Card>
  );
}