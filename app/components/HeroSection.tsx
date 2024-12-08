"use client";
import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  ChevronDoubleDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const navigation = [
  { name: "Our Solutions", href: "#solutions" },
  { name: "Benefits", href: "#benefits" },
  { name: "Experts", href: "#experts" },
];

function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="slide-top">
      <header className="fixed inset-x-0 top-0 z-50 bg-white backdrop-blur-lg bg-opacity-80 border-b border-gray-200">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">AI PIVOT</span>
              <Image src="/logo.png" width={45} height={45} alt="AI PIVOT" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 lg:justify-center lg:items-center">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#contactUs" className="secondaryBtn">
                Contact us
              </a>
            </div>
          </div>
        </nav>
        <Dialog
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">AI PIVOT</span>
                <Image src="/logo.png" width={40} height={40} alt="AI PIVOT" />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      onClick={handleMobileLinkClick}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#contactUs"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    onClick={handleMobileLinkClick}
                  >
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8 bg-[url('/grid-layer.png')] bg-cover bg-center">
        <img
          src="shapes/shape1.png"
          alt="Shape 1"
          className="h-16 shape shape-1"
        />
        <img
          src="shapes/shape2.png"
          alt="Shape 2"
          className="h-44 shape shape-2"
        />
        <img
          src="shapes/shape3.png"
          alt="Shape 3"
          className="h-28 shape shape-3"
        />
        <img
          src="shapes/shape4.png"
          alt="Shape 4"
          className="h-44 shape shape-4"
        />

        <div className="mx-auto max-w-5xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="flex gap-2 justify-center items-center relative rounded-lg px-3 py-1 text-sm leading-6 text-[#828282] ring-2 ring-gray-900/10">
              <span style={{ cursor: "default", userSelect: "none" }}>
                Request your 24-hour insights report
              </span>
              <ArrowRightIcon
                color="#828282"
                className="h-4 w-4"
                aria-hidden="true"
              />
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Applying{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
                Enhanced business understanding
              </span>{" "}
              with strategic Gen-AI implementations
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Organizations often have hidden efficiencies waiting to be discovered. Using our understanding of both business and pure play Generatvie AI, we reduce these inefficiencies by 85% in 15 days or less. 
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a href="#solutions" className="secondaryBtn">
                Get started
              </a> */}
              <a
                href="https://cal.com/ankit-fprkox"
                target="_blank"
                rel="noopener noreferrer"
                className="secondaryBtn"
              >
                Book Demo
              </a>
            </div>
          </div>
          <div className="mt-10 lg:mt-24 flex justify-center">
            <a href="#solutions" className="animate-bounce">
              <ChevronDoubleDownIcon
                className="h-10 w-10 text-blue-700"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
