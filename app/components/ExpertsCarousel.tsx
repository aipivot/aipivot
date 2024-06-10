"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const experts = [
  {
    image: "/experts/expert1.png",
    name: "John Doe",
    position: "AI Specialist",
  },
  {
    image: "/experts/mohamed.jpeg",
    name: "Mohamed Regaieg",
    position: "CEO of Church Street",
  },
  {
    image: "/experts/expert3.png",
    name: "Michael Brown",
    position: "Machine Learning Engineer",
  },
  {
    image: "/experts/expert4.png",
    name: "Michael 1",
    position: "Machine Learning Engineer",
  },
  {
    image: "/experts/expert5.png",
    name: "Michael test",
    position: "Machine Learning Engineer",
  },
  {
    image: "/experts/expert6.png",
    name: "Michael Brown",
    position: "Machine Learning Engineer",
  },
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
