"use client";
import React, { useEffect, useState } from "react";
import FadeInSection from "./FadeInSection";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/outline";

function Footer() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfUse, setShowTermsOfUse] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (
        showPrivacyPolicy &&
        !document.getElementById("privacyPolicyModal")?.contains(event.target)
      ) {
        setShowPrivacyPolicy(false);
      }
      if (
        showTermsOfUse &&
        !document.getElementById("termsOfUseModal")?.contains(event.target)
      ) {
        setShowTermsOfUse(false);
      }
      if (
        showCareers &&
        !document.getElementById("careersModal")?.contains(event.target)
      ) {
        setShowCareers(false);
      }
    }

    if (showPrivacyPolicy || showTermsOfUse || showCareers) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPrivacyPolicy, showTermsOfUse, showCareers]);

  return (
    <FadeInSection>
      <div className="bg-grediant relative py-24 mt-24 sm:mt-24 md:mt-24 w-full border-t-2 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <img
          src="footer-shapes/shape1.png"
          alt=""
          className="h-44 footerShape footer-shape-1"
        />
        <img
          src="footer-shapes/shape1.png"
          alt=""
          className="h-24 footerShape footer-shape-2"
        />
        <img
          src="footer-shapes/shape1.png"
          alt=""
          className="h-24 footerShape footer-shape-3"
        />
        <img
          src="footer-shapes/shape1.png"
          alt=""
          className="h-16 footerShape footer-shape-4"
        />
        <img
          src="footer-shapes/shape2.png"
          alt=""
          className="h-40 footerShape footer-shape-5"
        />
        <img
          src="footer-shapes/shape3.png"
          alt=""
          className="h-40 footerShape footer-shape-6"
        />
        <img
          src="footer-shapes/shape4.png"
          alt=""
          className="h-44 footerShape footer-shape-7"
        />

        <div className="flex mb-5 flex-col gap-3 justify-center items-center">
          <div className="border-2 border-gray-200 pt-2 pb-2 pl-2 pr-1 shadow-md rounded-lg flex justify-center items-center">
            <Image src="/logo.png" alt="logo" width={50} height={50} />
          </div>
          <div className="flex gap-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/aipivot"
            >
              <Image
                src="/social-medias/linkedIn.png"
                alt="linkedIn"
                width={20}
                height={20}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/aipivot.io"
            >
              <Image
                src="/social-medias/instagram.png"
                alt="instagram"
                width={20}
                height={20}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/"
            >
              <Image
                src="/social-medias/meduim.png"
                alt="meduim"
                width={20}
                height={20}
              />
            </a>
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Need more{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
              clarity? <br />
            </span>{" "}
            Get in touch!
          </h2>
          <a
            href="https://cal.com/ankit-fprkox"
            target="_blank"
            rel="noopener noreferrer"
            className="CTAbtn mt-2"
          >
            Book a Call
          </a>
        </div>
        <footer className="w-full px-4 sm:px-10 absolute bottom-5 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-2 sm:gap-0">
          <p className="text-sm">@2024 AI PIVOT. All rights reserved.</p>
          <div className="flex gap-5">
            <a
              className="text-sm cursor-pointer"
              onClick={() => setShowCareers(true)}
            >
              Careers
            </a>
            <a
              className="text-sm cursor-pointer"
              onClick={() => setShowPrivacyPolicy(true)}
            >
              Privacy Policy
            </a>
            <a
              className="text-sm cursor-pointer"
              onClick={() => setShowTermsOfUse(true)}
            >
              Terms of Use
            </a>
          </div>
        </footer>
      </div>
      {/* Privacy Policy Modal */}
      {showPrivacyPolicy && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div
            className="bg-white mx-4 p-8 rounded-lg max-w-3xl overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <button
              className="-mt-4 block ml-auto  text-white font-bold py-3 rounded-full"
              onClick={() => setShowPrivacyPolicy(false)}
            >
              <XMarkIcon
                className="h-7 w-7 text-blue-700 text-4xl font-bold"
                aria-hidden="true"
              />
            </button>
            <div className="-mt-8">
              <h2 className="text-lg font-semibold mb-4">Privacy Policy</h2>
            </div>
            <p className="text-sm text-gray-700">
              This page is used to inform website visitors regarding our
              policies with the collection, use, and disclosure of Personal
              Information if anyone decided to use our Service, the Website Name
              website. If you choose to use our Service, then you agree to the
              collection and use of information in relation to this policy. The
              Personal Information that we collect are used for providing and
              improving the Service. We will not use or share your information
              with anyone except as described in this Privacy Policy. The terms
              used in this Privacy Policy have the same meanings as in our Terms
              and Conditions, which are accessible at Website URL, unless
              otherwise defined in this Privacy Policy.
            </p>
            <h4 className="text-lg font-semibold mt-4">
              Information Collection and Use
            </h4>
            <p className="text-sm text-gray-700">
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you.
            </p>
            <h4 className="text-lg font-semibold mt-4">Log Data</h4>
            <p className="text-sm text-gray-700">
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer&apos;s Internet Protocol (IP) address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </p>
            <h4 className="text-lg font-semibold mt-4">Cookies</h4>
            <p className="text-sm text-gray-700">
              Cookies are files with a small amount of data that are commonly
              used as an anonymous unique identifier. These are sent to your
              browser from the website that you visit and are stored on your
              computer&apos;s hard drive. Our website uses these
              &quot;cookies&quot; to collect information and to improve our
              Service. You have the option to either accept or refuse these
              cookies and know when a cookie is being sent to your computer. If
              you choose to refuse our cookies, you may not be able to use some
              portions of our Service.
            </p>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {showTermsOfUse && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div
            className="bg-white p-8 mx-4 rounded-lg max-w-3xl overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <button
              className="-mt-4 block ml-auto  text-white font-bold py-3 rounded-full"
              onClick={() => setShowTermsOfUse(false)}
            >
              <XMarkIcon
                className="h-7 w-7 text-blue-700 text-4xl font-bold"
                aria-hidden="true"
              />
            </button>
            <div className="-mt-8">
              <h2 className="text-lg font-semibold mb-4">Terms of Use</h2>
            </div>
            <p className="text-sm text-gray-700">
              By accessing or using our service, you agree to be bound by these
              Terms of Use. Our service is provided as is and without warranties
              of any kind, either express or implied. You acknowledge that your
              use of the service is at your sole risk and responsibility. We
              reserve the right to modify, suspend, or discontinue the service
              at any time without prior notice. You are responsible for
              safeguarding your account information and for any activities or
              actions under your account, whether you have authorized such
              activities or actions. You agree not to use the service for any
              unlawful or prohibited activities, including but not limited to,
              violating any local, state, national, or international laws and
              regulations. Any disputes arising out of or relating to these
              Terms of Use shall be governed by the laws of the jurisdiction in
              which our company is established, without regard to its conflict
              of law provisions. If any provision of these Terms of Use is found
              to be invalid or unenforceable, the remaining provisions will
              continue to be valid and enforceable.
            </p>
            <h4 className="text-lg font-semibold mt-4">
              Information Collection and Use
            </h4>
            <p className="text-sm text-gray-700">
              For a better experience while using our Service, we may require
              you to provide us with certain personally identifiable
              information, including but not limited to your name, phone number,
              and postal address. The information that we collect will be used
              to contact or identify you.
            </p>
            <h4 className="text-lg font-semibold mt-4">Log Data</h4>
            <p className="text-sm text-gray-700">
              We want to inform you that whenever you visit our Service, we
              collect information that your browser sends to us that is called
              Log Data. This Log Data may include information such as your
              computer&apos;s Internet Protocol IP address, browser version,
              pages of our Service that you visit, the time and date of your
              visit, the time spent on those pages, and other statistics.
            </p>
            <h4 className="text-lg font-semibold mt-4">Cookies</h4>
            <p className="text-sm text-gray-700">
              Cookies are files with a small amount of data that are commonly
              used as an anonymous unique identifier. These are sent to your
              browser from the website that you visit and are stored on your
              computer&apos;s hard drive. Our website uses these cookies to
              collect information and to improve our Service. You have the
              option to either accept or refuse these cookies and know when a
              cookie is being sent to your computer. If you choose to refuse our
              cookies, you may not be able to use some portions of our Service.
            </p>
          </div>
        </div>
      )}

      {showCareers && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div
            className="bg-white mx-4 p-8 rounded-lg max-w-3xl overflow-y-auto"
            style={{ maxHeight: "80vh" }}
          >
            <button
              className="-mt-4 block ml-auto text-white font-bold py-3 rounded-full"
              onClick={() => setShowCareers(false)}
            >
              <XMarkIcon
                className="h-7 w-7 text-blue-700 text-4xl font-bold"
                aria-hidden="true"
              />
            </button>
            <div className="-mt-8">
              <h2 className="text-lg font-semibold mb-4">Careers</h2>
            </div>
            <div className="flex flex-col gap-4 items-center justify-center">
              <p className="text-sm text-gray-700">
                No jobs available right now. Check out our LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/in/ajha16/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-700 hover:bg-blue-800 text-white flex gap-2 justify-center items-center font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
              >
                LinkedIn
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0,0,256,256"
                >
                  <g
                    fill="#ffffff"
                    fill-rule="nonzero"
                    stroke="none"
                    stroke-width="1"
                    stroke-linecap="butt"
                    stroke-linejoin="miter"
                    stroke-miterlimit="10"
                    stroke-dasharray=""
                    stroke-dashoffset="0"
                    font-family="none"
                    font-weight="none"
                    font-size="none"
                    text-anchor="none"
                  >
                    <g transform="scale(8.53333,8.53333)">
                      <path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.895,-2 -2,-2zM10.954,22h-2.95v-9.492h2.95zM9.449,11.151c-0.951,0 -1.72,-0.771 -1.72,-1.72c0,-0.949 0.77,-1.719 1.72,-1.719c0.948,0 1.719,0.771 1.719,1.719c0,0.949 -0.771,1.72 -1.719,1.72zM22.004,22h-2.948v-4.616c0,-1.101 -0.02,-2.517 -1.533,-2.517c-1.535,0 -1.771,1.199 -1.771,2.437v4.696h-2.948v-9.492h2.83v1.297h0.04c0.394,-0.746 1.356,-1.533 2.791,-1.533c2.987,0 3.539,1.966 3.539,4.522z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </FadeInSection>
  );
}

export default Footer;
