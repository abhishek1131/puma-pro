"use client";
import * as React from "react";

interface HeroBadgeProps {
  text: string;
}

export const HeroBadge: React.FC<HeroBadgeProps> = ({ text }) => {
  return (
    <div
      className="flex flex-col gap-2.5 items-start px-5 py-2 rounded-3xl"
      style={{
        background: "#00D8B21A",
        fontFamily: "Inter",
        fontWeight: 400,
        fontSize: "16px",
        lineHeight: "130%",
        letterSpacing: "-2%",
      }}
    >
      <div
        className="text-base tracking-tight leading-5 bg-clip-text"
        style={{
          background: "linear-gradient(90deg, #00D8B2 0%, #0075C3 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {text}
      </div>
    </div>
  );
};

interface HeroHeadingProps {
  children: React.ReactNode;
}

export const HeroHeading: React.FC<HeroHeadingProps> = ({ children }) => {
  return (
    <h1
      className="text-center"
      style={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize: "56px",
        lineHeight: "72px",
        letterSpacing: "0%",
        textAlign: "center",
      }}
    >
      <span style={{ color: "#3A3A3A" }}>
        Reduce Costs, Optimize Operations,
      </span>
      <br />
      <span
        style={{
          background: "linear-gradient(123.34deg, #00D8B2 23.38%, #018EEB 83.12%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Maximize Your Revenue
      </span>
    </h1>
  );
};

export const HeroDescription: React.FC = () => {
  return (
    <div>
      <p
        className="w-full text-center max-w-[836px]"
        style={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0%",
          color: "#3A3A3A",
        }}
      >
        The all-in-one platform that manages end to end operational tasks with{" "}
        <span className="font-bold">$0</span> monthly software costs. Puma Pro's
        flexible pricing designed to scale with your business and support your
        success.
      </p>
      <img
        src="/homepage.png"
        style={{ width: "1440px", marginTop: "20px" }}
      />
    </div>
  );
};

export const DemoButton: React.FC = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-16">
      <div className="flex gap-4 items-start h-16">
        <div className="flex flex-col items-end h-16">
          <button className="group flex shrink-0 gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-16 rounded-lg transition-all duration-[0.3s] ease-[ease] w-[249px] max-md:w-[220px] max-sm:px-6 max-sm:py-2 max-sm:h-14 max-sm:w-[200px] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
            <div className="relative transition-all duration-[0.3s] ease-[ease] group-hover:absolute group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-110">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 flex-shrink-0 group-hover:fill-[#00D8B2] transition-[fill] duration-[0.3s]"
              >
                <g clipPath="url(#clip0_6_3357)">
                  <path
                    d="M20.8109 9.81848L6.63593 1.08075C5.6104 0.449388 4.37051 0.423138 3.31915 1.01053C2.26779 1.59783 1.64014 2.66756 1.64014 3.87182V21.2677C1.64014 23.0886 3.10732 24.578 4.91061 24.5878L4.92528 24.5879C5.48881 24.5878 6.07606 24.4112 6.62454 24.0765C7.06578 23.8073 7.20523 23.2314 6.93603 22.7902C6.66682 22.3489 6.09082 22.2095 5.64973 22.4787C5.39318 22.6352 5.14264 22.7161 4.92068 22.7161C4.24029 22.7124 3.51181 22.1295 3.51181 21.2677V3.87187C3.51181 3.35526 3.78106 2.8965 4.232 2.64454C4.68298 2.39259 5.21478 2.40384 5.65414 2.67436L19.8292 11.4121C20.2552 11.6744 20.499 12.1118 20.498 12.6121C20.497 13.1124 20.2514 13.5488 19.823 13.8103L9.57439 20.0853C9.13357 20.3552 8.99501 20.9314 9.26492 21.3721C9.53478 21.813 10.1109 21.9515 10.5517 21.6816L20.7991 15.4073C21.7803 14.8087 22.3674 13.7653 22.3698 12.6159C22.3721 11.4666 21.7892 10.4207 20.8109 9.81848Z"
                    fill="white"
                    className="group-hover:fill-[#00D8B2] transition-[fill] duration-[0.3s]"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_6_3357">
                    <rect
                      width="24"
                      height="24"
                      fill="white"
                      transform="translate(0.00488281 0.587891)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span className="text-xl font-bold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-[0.3s] ease-[ease] group-hover:translate-x-[50px] group-hover:opacity-0">
              Book A Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col gap-8 items-center px-5 py-10 mx-auto my-0 w-full max-w-[1147px] min-h-[377px] max-md:gap-6 max-md:px-4 max-md:py-8 max-sm:gap-5 max-sm:px-4 max-sm:py-6">
      <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[886px]">
        <div className="flex flex-col gap-2 items-center w-full">
          <HeroBadge text="PumaPro" />
          <HeroHeading>
            Reduce Costs, Optimize Operations,
            <br />
            Maximize Your Revenue
          </HeroHeading>
        </div>
        <HeroDescription />
      </div>
      <DemoButton />
    </section>
  );
};

export default HeroSection;