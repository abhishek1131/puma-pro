"use client"
import Footer from "@/components/footer";
import { Navigation } from "@/components/Navbar";
import React from "react";
import { useRouter } from "next/navigation";
export function TeamSection() {

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Caveat:wght@400&display=swap"
      />
      <div className="box-border flex flex-col justify-center items-center px-4 py-24 w-full bg-slate-50 min-h-[902px] max-[1440px]:px-3 max-[1024px]:px-2 max-md:py-16 max-sm:px-2 max-sm:py-12">
        <div className="flex flex-col gap-20 items-start w-full max-w-screen-xl max-[1440px]:max-w-screen-lg max-[1024px]:max-w-screen-md max-[1024px]:gap-16 max-sm:gap-10">
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[1090px] max-[1440px]:max-w-[960px] max-[1024px]:max-w-[800px]">
              <div className="flex flex-col gap-2 items-start self-stretch">
                <div
                  className="self-stretch text-center"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "32px",
                    lineHeight: "130%",
                    letterSpacing: "-2%",
                    color: "#3A3A3A",
                  }}
                >
                  Built by Property Managers, for Property Managers
                </div>
              </div>
              <div
                className="w-full text-center"
                style={{
                  fontFamily: "Inter",
                  fontWeight: 400,
                  fontStyle: "normal",
                  fontSize: "20px",
                  lineHeight: "28px",
                  letterSpacing: "0%",
                  color: "#3A3A3ACC",
                }}
              >
                Our founders are industry insiders who’ve experienced the challenges of property management firsthand. We understand the frustration of outdated systems, rising booking fees, and the increasing costs of modern technology. That’s why Puma Pro is designed to give you true choice and control—empowering you to run your business your way, without the high costs that come with most new platforms.
              </div>
            </div>
          </div>
          <div className="flex self-center relative w-full max-w-[1090px] h-[396px] max-[1440px]:max-w-[960px] max-[1024px]:flex-col max-[1024px]:static max-[1024px]:gap-10 max-[1024px]:h-auto max-sm:gap-8">
            <div className="relative shrink-0 h-[396px] w-full max-w-[648px] max-[1024px]:static max-[1024px]:self-center max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:max-w-[600px] max-sm:max-w-full">
              <div className="absolute top-0 left-0 shrink-0 border-2 border-solid bg-zinc-300 border-orange-100 border-opacity-60 h-[396px] w-full max-w-[648px] max-[1024px]:static max-[1024px]:w-full max-[1024px]:h-[300px] max-sm:h-[200px]"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d10b6ec64621ab8055c31c9513ba19f514e9224?width=1297"
                alt="Team image"
                className="object-cover absolute left-0 top-[-18px] shrink-0 border-2 border-solid border-orange-100 border-opacity-60 h-[432px] w-full max-w-[649px] max-[1024px]:static max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:w-full max-[1024px]:h-[300px] max-sm:h-[200px]"
                loading="lazy"
              />
            </div>
            <div className="flex absolute flex-col shrink-0 justify-center items-center bg-white border-2 border-sky-200 border-solid shadow-sm h-[343px] left-[557px] top-[27px] w-full max-w-[533px] max-[1024px]:static max-[1024px]:self-center max-[1024px]:px-5 max-[1024px]:py-10 max-[1024px]:w-full max-[1024px]:h-auto max-[1024px]:max-w-[500px] max-sm:px-4 max-sm:py-8 max-sm:max-w-full">
              <div className="flex flex-col gap-6 items-start w-full max-w-[402px] max-[1024px]:w-full max-[1024px]:max-w-[380px] max-sm:gap-5">
                <div>
                  <svg
                    width="41"
                    height="33"
                    viewBox="0 0 41 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="quote-icon"
                    style={{
                      width: "39.68px",
                      height: "32.256px",
                      fill: "rgba(0, 216, 178, 0.20)",
                    }}
                  >
                    <path
                      d="M10.228 32.6281C8.35067 32.6281 6.81467 32.2441 5.62 31.4761C4.42533 30.7081 3.444 29.7267 2.676 28.5321C1.82267 27.0814 1.22533 25.5881 0.884 24.0521C0.628 22.4307 0.5 21.1081 0.5 20.0841C0.5 15.9027 1.56667 12.1054 3.7 8.69208C5.83333 5.27874 9.16133 2.50541 13.684 0.37207L14.836 2.67607C12.1907 3.78541 9.88667 5.53474 7.924 7.92407C6.04667 10.3134 5.108 12.7454 5.108 15.2201C5.108 16.2441 5.236 17.1401 5.492 17.9081C6.85733 16.7987 8.436 16.2441 10.228 16.2441C12.4467 16.2441 14.3667 16.9694 15.988 18.4201C17.6093 19.8707 18.42 21.8761 18.42 24.4361C18.42 26.8254 17.6093 28.7881 15.988 30.3241C14.3667 31.8601 12.4467 32.6281 10.228 32.6281ZM31.988 32.6281C30.1107 32.6281 28.5747 32.2441 27.38 31.4761C26.1853 30.7081 25.204 29.7267 24.436 28.5321C23.5827 27.0814 22.9853 25.5881 22.644 24.0521C22.388 22.4307 22.26 21.1081 22.26 20.0841C22.26 15.9027 23.3267 12.1054 25.46 8.69208C27.5933 5.27874 30.9213 2.50541 35.444 0.37207L36.596 2.67607C33.9507 3.78541 31.6467 5.53474 29.684 7.92407C27.8067 10.3134 26.868 12.7454 26.868 15.2201C26.868 16.2441 26.996 17.1401 27.252 17.9081C28.6173 16.7987 30.196 16.2441 31.988 16.2441C34.2067 16.2441 36.1267 16.9694 37.748 18.4201C39.3693 19.8707 40.18 21.8761 40.18 24.4361C40.18 26.8254 39.3693 28.7881 37.748 30.3241C36.1267 31.8601 34.2067 32.6281 31.988 32.6281Z"
                      fill="#00D8B2"
                      fillOpacity="0.2"
                    />
                  </svg>
                </div>
                <div
                  className="self-stretch text-black text-opacity-60"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#00000099",
                    textAlign: "justify",
                  }}
                >
                  {`With many years of experience in property investment, property management, and technology, I know firsthand the challenges property managers face. That’s why we built Puma Pro—to give you greater control, powerful automation, and the freedom to grow your business, your way.`}
                  <div
                    style={{
                      fontFamily: "Caveat",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "32px",
                      lineHeight: "40px",
                      letterSpacing: "0%",
                      textAlign: "left",
                      marginTop: "15px",
                      color: "#00000099",
                    }}
                  >
                    -Chrys
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontSize: "20px",
                      lineHeight: "32px",
                      letterSpacing: "0%",
                      textAlign: "left",
                    }}
                  >
                    Founder, Puma Pro
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface AboutUsProps {
  className?: string;
}

export const AboutHeading: React.FC<AboutUsProps> = ({ className = "" }) => {
  return (
    <div
      className={`box-border flex gap-20 items-center px-4 py-16 mx-auto my-0 w-full max-w-screen-xl max-[1440px]:max-w-screen-lg max-[1440px]:px-3 max-[1024px]:flex-col max-[1024px]:gap-12 max-[1024px]:px-2 max-[1024px]:max-w-screen-md max-sm:gap-8 max-sm:px-2 max-sm:py-8 ${className}`}
    >
      <div className="flex flex-col gap-8 items-start w-full max-w-[940px] max-[1024px]:items-center max-[1024px]:w-full max-[1024px]:text-center max-[1024px]:max-w-[800px] max-sm:max-w-full">
        <div
          className="max-[1024px]:text-5xl max-[1024px]:leading-[60px] max-sm:text-3xl max-sm:leading-9"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "Regular",
            fontSize: "56px",
            lineHeight: "72px",
            letterSpacing: "0",
            textAlign: "center",
            background: "linear-gradient(138.38deg, #00D8B2 0%, #018EEB 85.77%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          About Us
        </div>
        <div className="flex flex-col gap-2 justify-center items-start w-full max-w-[902px] max-[1024px]:items-center max-[1024px]:w-full max-sm:max-w-full">
          <div className="flex flex-col gap-9 justify-center items-center w-full max-[1024px]:items-center">
            <div
              className="w-full max-[1024px]:text-3xl max-[1024px]:text-center max-sm:text-2xl max-sm:leading-8"
              style={{
                fontFamily: "Inter",
                fontWeight: 600,
                fontStyle: "normal",
                fontSize: "32px",
                lineHeight: "130%",
                color: "#3A3A3A",
                letterSpacing: "-0.02em",
              }}
            >
              Our Legacy &amp; Evolution
            </div>
          </div>
          <div
            className="w-full max-[1024px]:text-lg max-[1024px]:leading-7 max-sm:text-base max-sm:leading-6 max-sm:text-center"
            style={{
              fontFamily: "Inter",
              fontWeight: 400,
              fontStyle: "Regular",
              fontSize: "20px",
              lineHeight: "28px",
              color: "#3A3A3ACC",
              letterSpacing: "0",
            }}
          >
            Puma Pro stands on the legacy of Puma—a platform trusted by property managers for 20+ years. We’ve taken everything that made Puma a favourite—reliability, customer focus, and practical features—and reimagined it for the modern era. Welcome to the next generation of property management.
            Built by Property Managers, for Property Managers.
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="w-full flex items-center justify-center">
          <img src="/aboutus-logo.png"
            alt="Puma Logo"
            className="relative w-[169px] h-auto object-contain top-[-70px]"
            loading="lazy"
          />
        </div>
        <div className="relative top-[-90px] shrink-0 flex items-center justify-center bg-gradient-to-br from-teal-50 to-white">
          <div className="bg-white rounded-lg p-6 flex items-center justify-center" style={{ boxShadow: '0 0 0 0 rgba(0, 0, 0, 0), 15px 15px 25px rgba(0, 119, 182, 0.1)' }}>
            <img
              src="/booking-system-diff.png"
              alt="Puma Logo"
              className="w-[478px] h-auto object-contain max-[1024px]:w-[180px] max-sm:w-[150px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface LegacyValuesSectionProps {
  onBookDemo?: () => void;
}

const LegacyValuesSection: React.FC<LegacyValuesSectionProps> = ({
  onBookDemo,
}) => {
  const handleBookDemo = () => {
    if (onBookDemo) {
      onBookDemo();
    } else {
      console.log("Book a demo clicked");
    }
  };
  const router = useRouter();
  return (
    <div
      className="flex flex-col gap-12 justify-center items-start px-4 py-24 mx-auto my-0 w-full max-w-screen-xl max-[1440px]:max-w-screen-lg max-[1440px]:px-3 max-[1024px]:max-w-screen-md max-[1024px]:gap-8 max-sm:gap-6 max-sm:px-2 max-sm:max-w-full"
    >
      <div className="flex flex-col gap-4 justify-center items-start w-full">
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <div
            className="max-[1024px]:text-3xl max-[1024px]:leading-9 max-sm:text-2xl max-sm:tracking-tight max-sm:leading-8"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontStyle: "normal",
              fontSize: "32px",
              lineHeight: "130%",
              letterSpacing: "-0.02em",
              color: "#3A3A3A",
            }}
          >
            Legacy Values, Future-Ready Tech
          </div>
        </div>
        <div
          className="w-full max-w-[1090px] text-neutral-700 text-opacity-80 max-[1440px]:max-w-[960px] max-[1024px]:text-lg max-[1024px]:leading-7 max-sm:text-base max-sm:leading-6"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "20px",
            lineHeight: "28px",
            letterSpacing: "0em",
            color: "#3A3A3ACC",
          }}
        >
          With Puma Pro, you get the best of both worlds: the proven values and
          customer-centric approach of a legacy system, combined with the
          flexibility, automation, and ease-of-use you expect from
          next-generation technology.
          <br />
          <br />
          We're lean, local, and committed to helping you grow—because we
          believe property managers deserve powerful tools without the premium
          price tag.
        </div>
      </div>
      <div className="flex flex-col items-center h-16 max-sm:items-start">
        <button onClick={()=>router.push("/contact-form")}
          className="flex shrink-0 gap-3 justify-center items-center rounded-[50px] transition-all cursor-pointer duration-[0.3s] ease-[ease] max-[1024px]:px-7 max-[1024px]:py-2 max-[1024px]:h-14 max-[1024px]:w-[220px] max-sm:gap-2 max-sm:px-6 max-sm:py-1.5 max-sm:h-12 max-sm:w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{
            width: "249px",
            height: "64px",
            gap: "12px",
            angle: "0deg",
            opacity: 1,
            paddingTop: "9.64px",
            paddingRight: "32.86px",
            paddingBottom: "10.27px",
            paddingLeft: "32.87px",
            borderRadius: "50px",
            borderWidth: "1px",
            background:
              "linear-gradient(107.91deg, #00D8B2 6.31%, #0075C3 95.89%)",
          }}
          aria-label="Book a demo"

        >
          <div>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="play-icon"
              style={{ width: "24px", height: "24px", flexShrink: 0 }}
            >
              <g clipPath="url(#clip0_2501_885)">
                <path
                  d="M21.3109 9.91321L7.13593 1.17547C6.1104 0.544114 4.87051 0.517864 3.81915 1.10525C2.76779 1.69255 2.14014 2.76229 2.14014 3.96655V21.3624C2.14014 23.1833 3.60732 24.6727 5.41061 24.6825L5.42528 24.6826C5.98881 24.6825 6.57606 24.5059 7.12454 24.1712C7.56578 23.902 7.70523 23.3261 7.43603 22.8849C7.16682 22.4436 6.59082 22.3042 6.14973 22.5734C5.89318 22.7299 5.64264 22.8109 5.42068 22.8108C4.74029 22.8071 4.01181 22.2243 4.01181 21.3625V3.9666C4.01181 3.44999 4.28106 2.99122 4.732 2.73927C5.18298 2.48732 5.71478 2.49857 6.15414 2.76908L20.3292 11.5068C20.7552 11.7691 20.999 12.2065 20.998 12.7069C20.997 13.2072 20.7514 13.6436 20.323 13.905L10.0744 20.1801C9.63357 20.45 9.49501 21.0261 9.76492 21.4669C10.0348 21.9077 10.6109 22.0462 11.0517 21.7763L21.2991 15.502C22.2803 14.9035 22.8674 13.86 22.8698 12.7106C22.8721 11.5613 22.2892 10.5155 21.3109 9.91321Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2501_885">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.505005 0.682617)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="text-xl font-semibold leading-7 text-center text-white max-[1024px]:text-lg max-[1024px]:leading-6 max-sm:text-base max-sm:leading-6">
            Book A Demo
          </div>
        </button>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Navigation />
      <AboutHeading />
      <TeamSection />
      <LegacyValuesSection />
      <Footer />
    </div>
  );
}