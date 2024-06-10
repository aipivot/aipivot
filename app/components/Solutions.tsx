"use client";
import React, { useState } from "react";
import Image from "next/image";
import FadeInSection from "./FadeInSection";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

function Solutions() {
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedBusiness, setSelectedBusiness] = useState("");
  const [question, setQuestion] = useState(1);
  const [cursorStyle, setCursorStyle] = useState("default");

  const handleIndustryClick = (industry: any) => {
    setSelectedIndustry(industry.replace(/\s+/g, "").toLowerCase());
    setQuestion(2);
  };

  const handleBusinessClick = (business: any, e: any) => {
    e.preventDefault();
    setSelectedBusiness(business.replace(/\s+/g, "").toLowerCase());
    setCursorStyle("wait");

    setTimeout(() => {
      setCursorStyle("default");
      window.open(
        handlePDF(
          `${selectedIndustry}-${business.replace(/\s+/g, "").toLowerCase()}`
        ),
        "_blank"
      );
    }, 1000);
  };

  const handlePDF = (name: any) => {
    return `pdfs/${selectedIndustry}/${name}.pdf`;
  };

  const handleBackClick = () => {
    setQuestion(1);
  };

  const industry = [
    { name: "Pharmaceutical" },
    { name: "BSFI" },
    { name: "Content Marketing" },
    { name: "OTT" },
    { name: "Retail Online Games" },
    { name: "Adult Marketing" },
    { name: "Delivery" },
  ];
  const business = [
    { name: "Data Analytics" },
    { name: "Change Management" },
    { name: "Cost Reduction" },
    { name: "Customer Experience" },
    { name: "Digital Strategy" },
    { name: "Innovation" },
    { name: "Market Expansion" },
    { name: "Operations" },
    { name: "Organization" },
    { name: "Revenue Growth" },
  ];

  return (
    <FadeInSection>
      <br id="solutions" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <div
        style={{ cursor: String(cursorStyle) }}
        className="my-10 md:my-20 flex flex-col gap-8 md:gap-10 justify-between content-between max-w-full mx-[8%] md:mx-[16%]"
      >
        <div className="flex flex-col gap-4 md:gap-6 justify-center items-center">
          <div className="flex flex-col justify-center items-center text-center space-y-4">
            <h1 className="font-semibold text-3xl md:text-4xl w-full md:w-4/5 lg:w-3/6 leading-tight">
              Maximize{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
                Business Outcomes
              </span>{" "}
              with AI Pivot
            </h1>
            <p className="text-gray-500 w-full md:w-5/6 lg:w-4/5">
              At AI Pivot, we&apos;ve driven impactful decisions across diverse
              domains. We&apos;re here to support you at every stage of your
              launch and analytics journey.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-between items-center">
          <div className="flex flex-col gap-4 md:gap-5 content-between justify-between">
            <p className="font-medium text-center lg:text-left w-full lg:w-full text-base md:text-lg">
              Answer two questions and put our thinking to work on your
              challenges
            </p>
            <div className="flex gap-2 md:gap-3 justify-center lg:justify-start items-center">
              <p className="font-semibold">What is your industry?</p>
              <span className="text-sm mt-1 text-gray-500 flex items-center">
                {question === 2 && (
                  <button
                    onClick={handleBackClick}
                    className="flex items-center gap-2 px-3 py-1 rounded-md hover:bg-white text-black"
                  >
                    <ArrowLeftIcon className="h-5 w-5" />
                  </button>
                )}
                Question {question} of 2
              </span>
            </div>
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {question === 1
                ? industry.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleIndustryClick(item.name)}
                      className="industry px-3 py-1 rounded-md hover:shadow-xl hover:bg-blue-100"
                    >
                      {item.name}
                    </button>
                  ))
                : business.map((item) => (
                    <a
                      style={{ cursor: String(cursorStyle) }}
                      key={item.name}
                      href="#"
                      onClick={(e) => handleBusinessClick(item.name, e)}
                      className="industry px-3 py-1 rounded-md hover:shadow-xl hover:bg-blue-100"
                    >
                      {item.name}
                    </a>
                  ))}
            </div>
          </div>
          <div className="w-full lg:w-auto">
            <Image
              src="/animatedgit.gif"
              width={600}
              height={300}
              alt="Animated GIF"
              className="w-full h-auto lg:w-[600px] lg:h-[300px]"
            />
          </div>
        </div>
      </div>
    </FadeInSection>
  );
}

export default Solutions;
