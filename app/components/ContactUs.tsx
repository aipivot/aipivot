"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import FadeInSection from "./FadeInSection";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const countryCodes = [
  { code: "+1", name: "US" },
  { code: "+44", name: "GB" },
  { code: "+91", name: "IN" },
  { code: "+7", name: "RU" },
  { code: "+81", name: "JP" },
  { code: "+86", name: "CN" },
  { code: "+33", name: "FR" },
  { code: "+49", name: "DE" },
  { code: "+39", name: "IT" },
  { code: "+61", name: "AU" },
  { code: "+55", name: "BR" },
  { code: "+34", name: "ES" },
  { code: "+62", name: "ID" },
  { code: "+52", name: "MX" },
  { code: "+27", name: "ZA" },
  { code: "+82", name: "KR" },
  { code: "+31", name: "NL" },
  { code: "+47", name: "NO" },
  { code: "+46", name: "SE" },
  { code: "+41", name: "CH" },
  { code: "+45", name: "DK" },
  { code: "+48", name: "PL" },
  { code: "+30", name: "GR" },
  { code: "+90", name: "TR" },
  { code: "+351", name: "PT" },
  { code: "+354", name: "IS" },
  { code: "+32", name: "BE" },
  { code: "+20", name: "EG" },
  { code: "+973", name: "BH" },
  { code: "+880", name: "BD" },
  { code: "+375", name: "BY" },
  { code: "+501", name: "BZ" },
  { code: "+229", name: "BJ" },
  { code: "+975", name: "BT" },
  { code: "+591", name: "BO" },
  { code: "+387", name: "BA" },
  { code: "+267", name: "BW" },
  { code: "+673", name: "BN" },
  { code: "+359", name: "BG" },
  { code: "+226", name: "BF" },
  { code: "+257", name: "BI" },
  { code: "+855", name: "KH" },
  { code: "+237", name: "CM" },
  { code: "+1", name: "CA" },
  { code: "+238", name: "CV" },
  { code: "+236", name: "CF" },
  { code: "+235", name: "TD" },
  { code: "+56", name: "CL" },
  { code: "+86", name: "CN" },
  { code: "+61", name: "CX" },
  { code: "+61", name: "CC" },
  { code: "+57", name: "CO" },
  { code: "+269", name: "KM" },
  { code: "+243", name: "CD" },
  { code: "+242", name: "CG" },
  { code: "+682", name: "CK" },
  { code: "+506", name: "CR" },
  { code: "+385", name: "HR" },
  { code: "+53", name: "CU" },
  { code: "+357", name: "CY" },
  { code: "+420", name: "CZ" },
  { code: "+253", name: "DJ" },
  { code: "+1 767", name: "DM" },
  { code: "+1 809", name: "DO" },
  { code: "+593", name: "EC" },
  { code: "+20", name: "EG" },
  { code: "+503", name: "SV" },
  { code: "+240", name: "GQ" },
  { code: "+291", name: "ER" },
  { code: "+372", name: "EE" },
  { code: "+251", name: "ET" },
  { code: "+679", name: "FJ" },
  { code: "+358", name: "FI" },
  { code: "+33", name: "FR" },
  { code: "+241", name: "GA" },
  { code: "+220", name: "GM" },
  { code: "+995", name: "GE" },
  { code: "+49", name: "DE" },
  { code: "+233", name: "GH" },
  { code: "+350", name: "GI" },
  { code: "+30", name: "GR" },
  { code: "+299", name: "GL" },
  { code: "+1 473", name: "GD" },
  { code: "+502", name: "GT" },
  { code: "+224", name: "GN" },
  { code: "+245", name: "GW" },
  { code: "+592", name: "GY" },
  { code: "+509", name: "HT" },
  { code: "+504", name: "HN" },
  { code: "+852", name: "HK" },
  { code: "+36", name: "HU" },
  { code: "+354", name: "IS" },
  { code: "+91", name: "IN" },
  { code: "+62", name: "ID" },
  { code: "+98", name: "IR" },
  { code: "+964", name: "IQ" },
  { code: "+353", name: "IE" },
  { code: "+972", name: "IL" },
  { code: "+39", name: "IT" },
  { code: "+225", name: "CI" },
  { code: "+1 876", name: "JM" },
  { code: "+81", name: "JP" },
  { code: "+962", name: "JO" },
  { code: "+7", name: "KZ" },
  { code: "+254", name: "KE" },
  { code: "+686", name: "KI" },
  { code: "+383", name: "XK" },
  { code: "+965", name: "KW" },
  { code: "+996", name: "KG" },
  { code: "+856", name: "LA" },
  { code: "+371", name: "LV" },
  { code: "+961", name: "LB" },
  { code: "+266", name: "LS" },
  { code: "+231", name: "LR" },
  { code: "+218", name: "LY" },
  { code: "+423", name: "LI" },
  { code: "+370", name: "LT" },
  { code: "+352", name: "LU" },
  { code: "+853", name: "MO" },
  { code: "+389", name: "MK" },
  { code: "+261", name: "MG" },
  { code: "+265", name: "MW" },
  { code: "+60", name: "MY" },
  { code: "+960", name: "MV" },
  { code: "+223", name: "ML" },
  { code: "+356", name: "MT" },
  { code: "+692", name: "MH" },
  { code: "+222", name: "MR" },
  { code: "+230", name: "MU" },
  { code: "+52", name: "MX" },
  { code: "+691", name: "FM" },
  { code: "+373", name: "MD" },
  { code: "+377", name: "MC" },
  { code: "+976", name: "MN" },
  { code: "+382", name: "ME" },
  { code: "+212", name: "MA" },
  { code: "+258", name: "MZ" },
  { code: "+95", name: "MM" },
  { code: "+264", name: "NA" },
  { code: "+674", name: "NR" },
  { code: "+977", name: "NP" },
  { code: "+31", name: "NL" },
  { code: "+687", name: "NC" },
  { code: "+64", name: "NZ" },
  { code: "+505", name: "NI" },
  { code: "+227", name: "NE" },
  { code: "+234", name: "NG" },
  { code: "+968", name: "OM" },
  { code: "+92", name: "PK" },
  { code: "+680", name: "PW" },
  { code: "+970", name: "PS" },
  { code: "+507", name: "PA" },
  { code: "+675", name: "PG" },
  { code: "+595", name: "PY" },
  { code: "+51", name: "PE" },
  { code: "+63", name: "PH" },
  { code: "+1 787", name: "PR" },
  { code: "+974", name: "QA" },
  { code: "+40", name: "RO" },
  { code: "+7", name: "RU" },
  { code: "+250", name: "RW" },
  { code: "+685", name: "WS" },
  { code: "+378", name: "SM" },
  { code: "+239", name: "ST" },
  { code: "+966", name: "SA" },
  { code: "+221", name: "SN" },
  { code: "+381", name: "RS" },
  { code: "+248", name: "SC" },
  { code: "+232", name: "SL" },
  { code: "+65", name: "SG" },
  { code: "+421", name: "SK" },
  { code: "+386", name: "SI" },
  { code: "+677", name: "SB" },
  { code: "+252", name: "SO" },
  { code: "+211", name: "SS" },
  { code: "+34", name: "ES" },
  { code: "+94", name: "LK" },
  { code: "+249", name: "SD" },
  { code: "+597", name: "SR" },
  { code: "+268", name: "SZ" },
  { code: "+46", name: "SE" },
  { code: "+41", name: "CH" },
  { code: "+963", name: "SY" },
  { code: "+886", name: "TW" },
  { code: "+992", name: "TJ" },
  { code: "+255", name: "TZ" },
  { code: "+66", name: "TH" },
  { code: "+228", name: "TG" },
  { code: "+690", name: "TK" },
  { code: "+676", name: "TO" },
  { code: "+1 868", name: "TT" },
  { code: "+216", name: "TN" },
  { code: "+90", name: "TR" },
  { code: "+993", name: "TM" },
  { code: "+688", name: "TV" },
  { code: "+256", name: "UG" },
  { code: "+380", name: "UA" },
  { code: "+971", name: "AE" },
  { code: "+598", name: "UY" },
  { code: "+998", name: "UZ" },
  { code: "+678", name: "VU" },
  { code: "+58", name: "VE" },
  { code: "+84", name: "VN" },
  { code: "+681", name: "WF" },
  { code: "+967", name: "YE" },
  { code: "+260", name: "ZM" },
  { code: "+263", name: "ZW" },
];

function ContactUs() {
  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+1");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleCountryCodeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    setLoader(true);
    event.preventDefault();

    const completePhoneNumber = countryCode + formData.phone;

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        body: JSON.stringify({ ...formData, phone: completePhoneNumber }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
        setLoader(false);
      } else {
        toast.error("Error Sending The Message.");
        setLoader(false);
      }
    } catch (error) {
      toast.error("Error Sending The Message.");
      setLoader(false);
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FadeInSection>
      <br id="contactUs" />
      <br className="lg:hidden" />
      <br className="lg:hidden" />
      <div className="mt-8 md:mt-16 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <div>
          <Toaster />
        </div>
        <div className="flex flex-col justify-center items-center lg:flex-col gap-8 w-full max-w-full mx-[8%] md:mx-[16%]">
          <div className="flex flex-col lg:w-1/2 w-full text-center lg:text-center">
            <h1 className="font-[650] text-4xl mt-6">
              Let’s talk about{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-t from-blue-500 via-blue-600 to-blue-100">
                Growth
              </span>{" "}
            </h1>
            <p className="text-gray-500">
              We are happy to help you in all stages of your launch.
            </p>
          </div>
          <form
            className="flex flex-col space-y-4 mt-5 w-full"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex flex-col gap-1 w-full">
                <span>First Name</span>
                <input
                  className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span>Last Name</span>
                <input
                  className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex flex-col gap-1 w-full">
                <span>Email address</span>
                <input
                  className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                  type="email"
                  name="email"
                  placeholder="email@johndoedomain.net"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span>Phone number</span>
                <div className="flex gap-1">
                  <select
                    className="rounded-md border bg-white border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                    required
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name} ({country.code})
                      </option>
                    ))}
                  </select>
                  <input
                    className="rounded-md border border-gray-400 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                    type="tel"
                    name="phone"
                    placeholder="1234567890"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span>Your message</span>
              <textarea
                className="rounded-md border border-gray-400 px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500 w-full"
                name="message"
                placeholder="Enter your question or message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-md"
            >
              {loader ? <span className="loader"></span> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </FadeInSection>
  );
}

export default ContactUs;
