"use client";

import Image from "next/image";
import React from "react";
import bg from "../bg3.png";
import { motion } from "framer-motion";
import { FlagIcon } from "@heroicons/react/solid";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
const Body = () => {
  return (
    <div className="mt-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`2xl:max-w-[1280px] w-full lg:w-[80%] w-[100%] mx-auto flex flex-col`}
      >
        <div className="flex-column sm:flex items-center justify-between pr-10">
          <div className="px-12 py-12 space-y-2">
            <motion.h1
              variants={textVariant(1.1)}
              className="font-bold text-[30px] md:text-[90px] sm:text-[60px] md:leading-[94.4px] sm:leading-[74.4px] leading-[34.4px] uppercase text-white"
            >
              Verify your account{" "}
            </motion.h1>
            <motion.div
              variants={slideIn("left", "tween", 0.1, 1)}
              className="relative w-full md:-mt-[20px] -mt-[12px]"
            >
              <h3 className="text-violet-200 text-[10px] sm:text-[15px] md:text-[20px] max-w-lg pb-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt enim maiores fuga numquam excepturi eum repellendus,
                quia cumque praesentium ex possimus.
              </h3>
              <button className="shadow-inset shadow-violet-200 shadow-[2px_2px_10px_rgba(0,0,0,0.5)]   border-none border-2 mr-2 text-base text-gray-600  p-2 mt-2 font-semibold bg-violet-100  rounded-md hover:bg-violet-200  hover:text-gray-700 transition transform duration-200 ease-out">
                Verify Now
              </button>
            </motion.div>
          </div>

          <motion.div
            variants={slideIn("right", "tween", 0.1, 1)}
            className=" ml-12 md:ml-44 relative w-full md:-mt-[20px] -mt-[12px] "
          >
            <div className="">
              <div className="flex justify-between items-center">
                <div className="pb-5 text-2xl">Hello, @_.anirban.__</div>
                <div className="flex items-center">24
                <FlagIcon className="text-red-500 h-7 w-7 "/>
                </div>
              </div>
              <Image
                src={bg}
                className=" mt-5 sm:mt-0 w-[350px] h-[250px] left-0 md:h-60 object-cover relative z-10 rounded-tl-2xl  shadow-violet-300 shadow-[0px_10px_30px_rgba(0,0,0,0.5)] "
              />
            </div>
          </motion.div>
        </div>
        <div className="hidden sm:inline border-2 border-violet-800 mx-10 md:my-7" />
        <div className="fixed  text-xs bottom-0 left-11 my-auto sm:relative sm:text-base text-base m-auto flex space-x-1 mb-3">
          <h1>Powered by </h1>
          <a
            href="https://metamask.io/"
            target="_blank"
            className="text-violet-300 hover:underline"
          >
            Metamask
          </a>
        </div>
      </motion.div>
      <div className="gradient-02 z-0 mt-44" />
    </div>
  );
};

export default Body;
