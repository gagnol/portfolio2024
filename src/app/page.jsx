"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";


const Homepage = () => {

  const containerRef = useRef();

   const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
   
    <motion.div
    className="h-full"
    initial={{ y: "-200vh" }}
    animate={{ y: "0%" }}
    transition={{ duration: 1 }}
    
  >
    {/* CONTAINER */}
    <div className="h-full overflow-scroll lg:flex bg-base-200" ref={containerRef} >
    
      {/* TEXT CONTAINER */}
      <div className="p-4 sm:p-8 md:px-12 lg:px-20 xl:px-48 flex flex-col 
      gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-[60%] lg:pr-0 xl:w-[60%]">
        {/* BIOGRAPHY CONTAINER */}
      
        <div className="flex flex-col gap-12 justify-center">
          {/* BIOGRAPHY IMAGE */}
         <div className="flex">
          <Image
           src="/guille_agnol.png"
            alt=""
            priority
            width={150}
            height={150}
            className="  object-cover bg-white"
          />
          <div className="block pl-5">
           <h1 className=" text-3xl sm:text-1xl lg:text-2xl lg:leading-normal font-extrabold">
          Guillermo Agnoletti
        </h1>
        <h3 className="text-base sm:text-lg mb-6 lg:text-lg" > 
        SENIOR FULLSTACK DEVELOPER 
        </h3>
        </div>
        </div>
          {/* BIOGRAPHY TITLE */}
          <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
          {/* BIOGRAPHY DESC */}
          <p className="text-lg">
          I am a highly skilled professional with 6 years of hands-on
           experience specializing in the utilization of the
            NextJS framework with TypeScript and Tailwind CSS. 
            My expertise lies in developing robust and scalable server-side applications, 
            seamlessly integrated with MongoDB for efficient data interaction. 
            I bring a wealth of knowledge and a proven track record of successful project delivery. 
            
          </p>
          {/* BIOGRAPHY QUOTE */}
          <span className="italic">
          I am excited about the
          prospect of collaborating on your project 
          and leveraging my skills to contribute to its success
          </span>
          {/* BIOGRAPHY SIGN SVG*/}
          <div className="self-end">
          <Image
            src="/firma.svg"
            alt=""
            width={300}
            height={30}
            className="  object-cover "
          />
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
            className="text-neutral"
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#fff"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#fff"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>
        {/* SKILLS CONTAINER */}
        <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
          {/* SKILL TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            SKILLS
          </motion.h1>
          {/* SKILL LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isSkillRefInView ? { x: 0 } : {}}
            className="flex gap-4 flex-wrap"
          >
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              JavaScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              TypeScript
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              React.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Next.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              SCSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Tailwind CSS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MongoDB
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              PostgreSQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Node.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              HTML
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Express.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              MySql
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              GraphQL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Apollo
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Redux
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Framer Motion
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Three.js
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              WebGL
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Webpack
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Vite
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Docker
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              AWS
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Firebase
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Git
            </div>
            <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
              Figma
            </div>
          </motion.div>
          {/* SKILL SCROLL SVG */}
          <motion.svg
            initial={{ opacity: 0.2, y: 0 }}
            animate={{ opacity: 1, y: "10px" }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width={50}
            height={50}
          >
            <path
              d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
              stroke="#fff"
              strokeWidth="1"
            ></path>
            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
            <path
              d="M15 11L12 14L9 11"
              stroke="#fff"
              strokeWidth="1"
            ></path>
          </motion.svg>
        </div>
        
        {/* EXPERIENCE CONTAINER */}
        <div
          className="flex flex-col gap-12 justify-center pb-48"
          ref={experienceRef}
        >
          {/* EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            EXPERIENCE
          </motion.h1>
          {/* EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className=""
          >
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white text-primary p-3 font-semibold rounded-b-lg rounded-s-lg">
                Freelancer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                I provided web solutions, applying a range of technologies to address client requirements.
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2024 - Present
                </div>
                {/* JOB COMPANY */}
                
              </div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 "></div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 "></div>
              {/* CENTER */}
              <div className="w-1/6 flex justify-center">
                {/* LINE */}
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  {/* LINE CIRCLE */}
                  <div className="absolute w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                   <div className="absolute bottom-0 w-5 h-5 rounded-full ring-4
                   ring-red-400 bg-white -left-2">
                   </div>
                </div>
              </div>
              {/* RIGHT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white text-primary p-3 font-semibold rounded-b-lg rounded-e-lg w-fit">
                  Senior React Developer
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  I spearheaded React-based application development,
                  leveraging advanced skills.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2017 - 2023{" "}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 rounded bg-white text-base-100 text-sm font-semibold w-fit">
                  ITS
                </div>
              </div>
            </div>
            {/* EXPERIENCE LIST ITEM */}
            <div className="flex justify-between h-48">
              {/* LEFT */}
              <div className="w-1/3 ">
                {/* JOB TITLE */}
                <div className="bg-white text-primary p-3 font-semibold rounded-b-lg rounded-s-lg">
                 Project manager{" "}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">
                  Deliver projects with high ROI .Lean Six Sigma.{" "}
                </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  2005 - 2015{" "}
                </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 flex rounded bg-white text-sm font-semibold w-fit">
                    <Image alt="" src="/amex.png" width={30} height={30} />
                  <p className="pt-1 text-base-100">American Express</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      
      {/* SVG CONTAINER */}
     
      <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/3 h-full">
      
        <div className="block">
         <video autoPlay={true} muted={true} loop={true}
          className="absolute  top-10  opacity-75 z-[-1] 
            overflow-hidden h-[400px]">
          <source 
          src="/gagnol.mp4"
          type="video/mp4"
           />
        </video>
         
        </div>
  
      </div>
      
    </div>
  </motion.div>

    
  );
};

export default Homepage;
