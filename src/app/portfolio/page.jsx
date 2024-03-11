"use client";

import Link from "next/link";


const projectLinks = [

  {
    title: 'Ecommerce',
    links: [
      { name: "Amazon", img: "/amazon.jpg", description: "Ecommerce recreate Amazon ",
       technology: "✔️Next.js", url:"https://ecomm-dusky.vercel.app/" },
      { name: "E-Bay", img: "/youtube1.png", description: "Ecommerce base on", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Fashion", img: "/youtube1.png", description: "Ecommerce base on", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Food", img: "/youtube1.png", description: "Food Ordering", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
    ],
  },
  {
    title: 'Entretaiment',
    links: [
      { name: "Amazon", img: "/youtube1.png", description: "Ecommerce base on", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Movies Paradise", img: "/movies.avif", description: "Imdb movies and  Tv series",
       technology: "✔️React-✔️API", url:"https://react-movies-paradise.vercel.app" },
    ],
  },
  {
    title: 'Others',
    links: [
      { name: "Amazon", img: "/youtube1.png", description: "Ecommerce base on", 
      technology: "✔️Next.js", url:"https://ecomm-dusky.vercel.app/" },
      { name: "Figma", img: "/figma.jpg", description: " Figma clone",
       technology: "✔️Next.js", url:"https://figma-clone-git-main-gagnol.vercel.app/" },

    ],
  },
  {
    title: 'UI/UX',
    links: [
      { name: "Luxury", img: "/luxury.svg", description: "Luxury Ristorante landing page", 
      technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Profesional", img: "/profesional.jpg", description: "profesional landing page",
       technology: "✔️Next.js", url:"https://Next.js-portfolio-main-gamma.vercel.app", },
       { name: "Modern", img: "/pinki.png", description: "Modern landing page",
       technology: "✔️React", url:"https://ux-ui-modern.vercel.app/", },

    ],
  },
]

const projectVideos = [

  {
    title: 'Miscelaneo',
    links: [
      { name: "AI Alan", img: "/alan.mp4", description: "Voice recognition", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Financial", img: "/financial.mp4", description: "Financial advisors", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Fitness", img: "/fitness.mp4", description: "Fitness Center", technology: "✔️Next.js", url:"https://la-bisteca.vercel.app" },
      { name: "Nasa", img: "/Nasa.mp4", description: "Nasa", technology: "✔️API" },
     
    ],
  },
]

const PortfolioPage = () => {
  return (
    <main className="h-full bg-base-100 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto py-20 overflow-x-hidden ">
        <h1 className="font-bold text-3xl m-5 text-center">MY PORTFOLIO</h1>
        {projectLinks.map((project, index) => (
          <div key={index} className="pb-2" >
            <h2 className="font-bold text-2xl my-1 mx-5">{project.title}</h2>
            <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 py-2 ">
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex} className="p-0">
                  <h3 className="text-lg font-semibold" >{link.name}</h3>
                  <div className=" bg-neutral col-span relative h-[20vw] ">
                    <img src={link.img} alt={link.name} draggable={false} className="
                      cursor-pointer
                      object-cover
                      transition
                      duration
                      shadow-xl
                      rounded-md
                      group-hover:opacity-90
                      sm:group-hover:opacity-0
                      delay-300
                      w-full
                      h-[12vw]
                      " />
                    <p className="p-2">{link.description}</p>
                    <p className="p-2">{link.technology}</p>
                    <div className="flex gap-2 justify-center">
                      <Link href={link.url }>
                    <button className="w-fit text-center btn btn-primary btn-outline mx-4"> URL</button>
                    </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {projectVideos.map((project, index) => (
          <div key={index} >
            <h2 className="font-bold text-2xl my-5 mx-5">{project.title}</h2>
            <div className="w-full px-6 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-3 py-5 ">
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex}>
                  <h3 className="text-lg font-semibold ">{link.name}</h3>
                  <div className=" bg-neutral col-span relative h-[20vw] ">
                    <video autoPlay={false} muted={false} loop={true} controls={true}
                      className="overflow-hidden max-h-[20vw] min-w-full">
                      <source
                        src={link.img}
                        type="video/mp4"
                      />
                    </video>
                    <p className="p-2">{link.description}</p>
                    <p className="p-2">{link.technology}</p>
                      <div className="flex gap-2 justify-center">
                      <button className="w-fit text-center btn btn-primary btn-outline mx-4">
                        More
                      </button>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;
