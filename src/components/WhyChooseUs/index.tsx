"use client";

import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col items-center w-full max-w-[1192px]">
        <div className="flex flex-col gap-2 items-center w-full">
          <header className="flex flex-col items-center w-full">
            <h1
              className="w-full text-[44px] font-bold leading-[40px] text-center capitalize bg-clip-text max-w-[1050px] max-md:text-4xl max-md:leading-9 max-sm:text-3xl max-sm:leading-8"
              style={{
                fontFamily: "Font 1",
                fontWeight: 700,
                fontStyle: "bold",
                letterSpacing: "0%",
                verticalAlign: "middle",
                background:
                  "linear-gradient(114.64deg, #00D8B2 22.88%, #048EEA 88.49%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {title}
            </h1>
          </header>
          <p className="w-full text-lg leading-8 text-center text-gray-600 max-w-[1294px] max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  image: string;
  title: string;
  problem: string;
  solution: string;
  altText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  image,
  title,
  problem,
  solution,
  altText = "",
}) => {
  return (
    <article className="box-border flex flex-col shrink-0 gap-2 justify-center items-start p-2.5 bg-white rounded-2xl shadow-md border-none h-[216px] w-[640px] max-md:w-full max-md:max-w-screen-sm max-md:h-auto max-md:min-h-[200px] max-sm:p-4 transition-all duration-300 hover:shadow-2xl">
      <div className="flex items-center w-full max-md:flex-col max-md:text-center">
        <img
          src={image}
          alt={altText}
          className="shrink-0 h-[154px] w-[174px] max-md:mb-4 max-md:h-[100px] max-md:w-[120px] max-sm:h-20 max-sm:w-[100px] transition-all duration-300 hover:h-[170px] hover:w-[190px] max-md:hover:h-[110px] max-md:hover:w-[130px] max-sm:hover:h-24 max-sm:hover:w-[110px]"
        />
        <div className="flex flex-col flex-1 gap-2 items-start pl-4 max-md:items-center">
          <h3 className="w-full text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 transition-all duration-300 hover:translate-x-2 hover:scale-95">
            {title}
          </h3>
          <div className="flex flex-col items-start w-full max-md:items-center">
            <p className="mb-2 w-full text-base leading-6 text-gray-600 max-md:text-center max-sm:text-sm max-sm:leading-5 transition-all duration-300 hover:translate-x-2 hover:scale-95">
              {problem}
            </p>
            <p className="w-full text-base leading-6 text-teal-600 max-md:text-center max-sm:text-sm max-sm:leading-5 transition-all duration-300 hover:translate-x-2 hover:scale-95">
              {solution}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

interface GetStartedButtonProps {
  text: string;
  onClick?: () => void;
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-center h-14 w-[249px] max-sm:w-full">
      <button
        onClick={onClick}
        className="group flex shrink-0 gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-[210px] max-sm:w-full max-sm:max-w-[300px] transition-all duration-[0.3s] ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden"
      >
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
        <span className="text-xl font-semibold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-[0.3s] ease-[ease] group-hover:translate-x-[50px] group-hover:opacity-0">
          {text}
        </span>
      </button>
    </div>
  );
};

const challengesData = [
  {
    image: "/whychooseus/first.png",
    title: "Too Many Tools",
    problem:
      "Managing bookings, guest communications, and accounting across multiple fragmented platforms creates inefficiencies and increases errors.",
    solution:
      "Puma Pro integrates everything into one simple platform, reducing complexity and preventing unnecessary features that clutter your workflow.",
    altText: "Home investors choosing designs illustration",
  },
  {
    image: "/whychooseus/third.png",
    problem:
      "Operating across fragmented systems limits your ability to manage listings and control expenses effectively.",
    solution:
      "Puma Pro centralizes operations, offering clear insights to reduce unnecessary fees and maximize revenue.",
    altText: "Flat isometric illustration concept notes detail",
  },
  {
    image: "/whychooseus/second.png",
    title: "Outdated Software",
    problem:
      "Legacy property management software is slow, cumbersome, and often outdated.",
    solution:
      "Puma Pro offers a modern, intuitive, cloud-based platform that's always updated, keeping you ahead of industry standards.",
    altText: "Cloud computing technology concept isometric vector",
  },
  {
    image: "/whychooseus/fourth.png",
    title: "Complicated Trust Accounting",
    problem:
      "Manual trust account reconciliation is time-consuming and prone to mistakes.",
    solution:
      "Puma Pro automates trust account reconciliation, ensuring compliance and accuracy, hassle-free.",
    altText: "Choose and look for home designs for the best investment",
  },
];

export const ChallengesSection: React.FC = () => {
  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <section className="box-border flex flex-col gap-10 justify-center items-center px-12 pt-24 pb-24 w-full bg-[#F5F5F5] min-h-[884px] max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12">
      <div className="flex flex-col gap-12 justify-center items-center w-full max-w-[1294px]">
        <SectionHeader
          title="Turning Challenges Into Opportunities"
          subtitle="Puma Pro transforms the usual headaches into seamless, automated workflows so you can focus on what matters most your guests"
        />

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 max-w-[1334px] w-full mx-auto max-md:grid-cols-1 max-md:gap-4">
          {challengesData.map((challenge, index) => (
            <FeatureCard
              key={index}
              image={challenge.image}
              title={challenge.title}
              problem={challenge.problem}
              solution={challenge.solution}
              altText={challenge.altText}
            />
          ))}
        </div>

        <GetStartedButton text="Get Started" onClick={handleGetStarted} />
      </div>
    </section>
  );
};

export default ChallengesSection;
