"use client";
import React from "react";
import FadeInSection from "./FadeInSection";
import ExpertsCarousel from "./ExpertsCarousel";

function Experts() {
  return (
    <FadeInSection>
      <br id="experts" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <div className="mt-8 md:mt-24 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:gap-8 w-full mx-[8%] md:mx-[16%] max-w-full">
          <div className="flex flex-col lg:flex-row gap-4 w-full text-center lg:text-left">
            <div className="w-full lg:w-1/2">
              <h1 className="font-semibold text-3xl md:text-4xl mt-4 md:mt-6">
                Meet {" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
                  The smartest people in AI
                </span>{" "}
              </h1>
            </div>
            <div className="w-full lg:w-1/2 mt-4 md:mt-6">
              <p className="text-gray-500">
              Experienced AI advisors for complex decision-making.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16 md:mb-24 w-full mx-auto sm:w-5/6 lg:w-2/3 mt-6">
        <ExpertsCarousel />
      </div>
    </FadeInSection>
  );
}

export default Experts;
