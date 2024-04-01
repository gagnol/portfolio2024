"use client"
import Image from "next/image";
import React from "react";


const Survey = () => {
  
  const emailSubmitted=false

  return (

    <div className="container pt-10 pb-5">
      <div className="grid lg:grid-cols-[50%,1fr] gap-20">
        <div>
          <Image
            className="w-[80%] h-auto lg:w-auto lg:h-auto mx-auto"
            src="/profesional.jpg"
            width={500}
            height={500}
            alt="survey image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="self-center mx-5 xl:mx-0">
          <h2 className="text-4xl xl:text-6xl font-bold mx-2 text-white">Be</h2>
          <h2 className="text-4xl xl:text-6xl font-bold pt-3 mx-2 text-white">
           on <span className="text-[#ff0000] ">Touch</span>
          </h2>
          <div className="min-h-[400px] mt-5">
            {emailSubmitted ? (
             <>
              <p className="text-green-500 text-3xl mt-10">
                Email sent successfully! 
              </p>
              <p className="italic text-3xl mt-2">We will get back to you as soon as possible</p>
              </> 
            ) : (
              <form className="flex flex-col"  >
                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="text-white block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    autoComplete="false"
                    className="bg-[#18191E] border
                 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 
                 text-sm rounded-lg block w-3/4 p-2.5"
                    placeholder="jacob@google.com"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Subject
                  </label>
                  <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    autoComplete="false"
                    className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9]
                   text-gray-100 text-sm rounded-lg block w-3/4 p-2.5"
                    placeholder="Just saying hi"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="text-white block text-sm mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    autoComplete="false"
                    className="bg-[#18191E] border border-[#33353F]
                 placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-3/4 p-2.5"
                    placeholder="Let's talk about..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#ff0000] text-white font-medium py-2.5 px-5 
                  rounded-lg w-3/4  hover:bg-[#5e514b]">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Survey;
