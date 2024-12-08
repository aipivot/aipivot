"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const experts = [
  {
    image: "/experts/ankit.jpg",
    name: "Ankit Jha",
    position: "Gen AI strategy in India and South East Asia. Leading Data at Delta. Ex: IIT, Deutsche Telekom",
  },
  {
    image: "/experts/mohammed.webp",
    name: "Mohamed Regaieg",
    position: "Generative AI Pioneer- Affrica and Middle East. Gen AI business pioneer.",
  },
  {
    image: "/experts/neal.jpg",
    name: "Neal Jha, PhD",
    position: "Making performance accessible by addressing psychological safety around GenAI. Ethicist. Ex: NSU, SMU, Rio TInto",
  },
  {
    image: "/experts/rajath,jpg",
    name: "Rajath Raghu",
    position: "Generative AI scientist- North America. Expert copywriter, marketing wiz. Software design generalist",
  } 
];

const ExpertsCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {experts.map((expert, index) => (
        <div key={index} className="p-3">
          <Image
            width={300}
            height={100}
            src={expert.image}
            alt={expert.name}
            className="w-full h-80 object-cover rounded-md"
          />
          <h2 className="mt-4 text-xl font-semibold text-center">
            {expert.name}
          </h2>
          <p className="text-gray-500 text-center">{expert.position}</p>
        </div>
      ))}
    </Slider>
  );
};

export default ExpertsCarousel;
