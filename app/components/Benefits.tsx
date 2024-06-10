"use client";
import React from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";

function Benefits() {
  return (
    <FadeInSection>
      <br id="benefits" />
      <br />
      <br className="lg:hidden" />

      <div className="mt-10 md:mt-14 mx-[8%] md:mx-[16%] flex flex-col gap-6 md:gap-10 justify-center items-center max-w-full">
        <div className="flex flex-col gap-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="font-semibold text-4xl lg:text-4xl w-full lg:w-6/6 leading-tight">
              {" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
                Why
              </span>{" "}
              choose AI Pivot?
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-8 mb-10 md:mb-14 max-w-full mx-[8%] md:mx-[16%]">
        <div className="grid grid-cols-3 gap-8">
          <div className="div1 relative bg-gray-50 border-2 rounded-md p-5 border-gray-200 flex flex-col justify-between items-center">
            <div className="w-5/6 flex flex-col justify-center items-center">
              <h2 className="font-semibold text-lg text-center">
                Rapid Value Realization
              </h2>
              <p className="font-normal text-sm text-gray-400 text-center">
                With our in-house low-code and no-code capabilities, minimize
                time to value to less than 24 hours.*
              </p>
            </div>
            <Image
              className="absolute bottom-0"
              src="/grid-images/grid1.png"
              alt="1"
              width={520}
              height={500}
            />
          </div>
          <div className="div2 relative bg-gray-50 border-2 rounded-md p-5 border-gray-200 flex  flex-col  items-center">
            <div className="w-5/6 flex flex-col justify-center items-center relative z-10 ">
              <h2 className="font-semibold text-lg text-center">
                Expert Talent Pool
              </h2>
              <p className="font-normal text-sm text-gray-400 text-center">
                Access our 300+ generative AI and ML-focused talent pool,
                ensuring you have the best minds working on your projects.
              </p>
            </div>
            <Image
              className="absolute bottom-0"
              src="/grid-images/grid2.png"
              alt="1"
              width={300}
              height={300}
            />
          </div>

          <div className="div3 relative bg-gray-50 border-2 rounded-md p-5 border-gray-200 flex flex-col justify-between items-center overflow-hidden">
            <div className="w-6/6 flex flex-col ">
              <h2 className="font-semibold text-lg ">
                Award-Winning Solutions
              </h2>
              <p className="font-normal text-sm text-gray-400 ">
                Benefit from our award-winning insight and data dashboarding
                capabilities, tailored for fast-paced startups and strategy
                firms
              </p>
            </div>
            <Image
              className="absolute -bottom-9"
              src="/grid-images/grid3.png"
              alt="1"
              width={300}
              height={300}
            />
          </div>

          <div className="div4 relative bg-gray-50 border-2 rounded-md p-5 border-gray-200 flex flex-col justify-between items-center">
            <div className="w-5/6 flex flex-col justify-center items-center">
              <h2 className="font-semibold text-lg text-center">
                Cost Efficiency
              </h2>
              <p className="font-normal text-sm text-gray-400 text-center">
                Save 95% of the costs associated with hiring in-house AI talent,
                allowing you to invest in other critical areas of your business.
              </p>
            </div>
            <Image
              className="absolute bottom-0"
              src="/grid-images/grid4.png"
              alt="1"
              width={600}
              height={300}
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default Benefits;
