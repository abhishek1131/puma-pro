"use client";
import Image from "next/image";
import * as React from "react";

interface FeatureCardProps {
  image: string;
  altText: string;
  title: string;
  description: string;
  isNoSubscriptions:string
}

export function FeatureCard({
  image,
  altText,
  title,
  description,isNoSubscriptions
}: FeatureCardProps) {
  return (
    // <article className="flex flex-col justify-center items-center pb-6 bg-white rounded-2xl shadow-md h-[436px] w-[380px] max-md:p-6 max-md:w-full max-md:h-auto max-md:max-w-[400px] max-sm:p-5 transition-all duration-300 hover:shadow-2xl hover:border-2 hover:border-teal-500 hover:h-[456px] hover:w-[400px] max-md:hover:h-[420px] max-md:hover:w-[420px] max-sm:hover:h-[380px] max-sm:hover:w-[380px]">
    //   <img
    //     src={image}
    //     alt={altText}
    //     className="shrink-0 aspect-[1/1] h-[200px] w-[200px] max-md:h-[150px] max-md:w-[150px] max-sm:h-[120px] max-sm:w-[120px] transition-all duration-300 hover:h-[220px] hover:w-[220px] max-md:hover:h-[165px] max-md:hover:w-[165px] max-sm:hover:h-[132px] max-sm:hover:w-[132px]"
    //   />
    //   <div className="flex flex-col shrink-0 gap-2 items-center w-full h-[138px] max-md:gap-3 max-md:h-auto">
    //     <header className="flex flex-col items-center w-full transition-all duration-300 hover:translate-y-2 hover:scale-95">
    //       <h2
    //         className="w-full text-xl font-bold leading-7 text-center bg-clip-text text-transparent max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5"
    //         style={{
    //           fontFamily: "Inter, sans-serif",
    //           fontWeight: 600,
    //           fontSize: "20px",
    //           lineHeight: "28px",
    //           letterSpacing: "0%",
    //           textAlign: "center",
    //           verticalAlign: "middle",
    //           backgroundImage:
    //             "linear-gradient(90deg, #00C2A0 0%, #0075C3 100%)",
    //         }}
    //       >
    //         {title}
    //       </h2>
    //     </header>
    //     <div className="flex flex-col items-center px-7 py-0 max-w-screen-md max-md:px-4 max-md:py-0 max-sm:px-2 max-sm:py-0 transition-all duration-300 hover:translate-y-2 hover:scale-95">
    //       <p
    //         className="w-full text-base leading-5 text-center text-gray-600 max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-4"
    //         style={{
    //           fontFamily: "Inter, sans-serif",
    //           fontWeight: 400,
    //           fontSize: "15px",
    //           lineHeight: "20px",
    //           letterSpacing: "0%",
    //           textAlign: "center",
    //           verticalAlign: "middle",
    //         }}
    //       >
    //         {description}
    //       </p>
    //     </div>
    //   </div>
    // </article>
    <article
  className={`flex flex-col justify-center items-center pb-6 bg-white rounded-2xl shadow-md transition-all duration-300 hover:shadow-2xl hover:border-2 hover:border-teal-500 ${
    isNoSubscriptions
      ? "h-[523px] w-[456px] max-md:h-[504px] max-md:w-[504px] max-sm:h-[456px] max-sm:w-[456px] hover:h-[547px] hover:w-[480px] max-md:hover:h-[504px] max-md:hover:w-[504px] max-sm:hover:h-[456px] max-sm:hover:w-[456px]"
      : "h-[436px] w-[380px] max-md:h-auto max-md:w-full max-md:max-w-[400px] hover:h-[456px] hover:w-[400px] max-md:hover:h-[420px] max-md:hover:w-[420px] max-sm:hover:h-[380px] max-sm:hover:w-[380px]"
  }`}
>
  <img
    src={image}
    alt={altText}
    className={`shrink-0 aspect-[1/1] transition-all duration-300 ${
      isNoSubscriptions
        ? "h-[240px] w-[240px] max-md:h-[180px] max-md:w-[180px] max-sm:h-[144px] max-sm:w-[144px] hover:h-[264px] hover:w-[264px] max-md:hover:h-[198px] max-md:hover:w-[198px] max-sm:hover:h-[158px] max-sm:hover:w-[158px]"
        : "h-[200px] w-[200px] max-md:h-[150px] max-md:w-[150px] max-sm:h-[120px] max-sm:w-[120px] hover:h-[220px] hover:w-[220px] max-md:hover:h-[165px] max-md:hover:w-[165px] max-sm:hover:h-[132px] max-sm:hover:w-[132px]"
    }`}
  />
  <div className="flex flex-col shrink-0 gap-2 items-center w-full h-[138px] max-md:gap-3 max-md:h-auto">
    <header className="flex flex-col items-center w-full transition-all duration-300 hover:translate-y-2 hover:scale-95">
      <h2
        className="w-full text-xl font-bold leading-7 text-center bg-clip-text text-transparent max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "20px",
          lineHeight: "28px",
          letterSpacing: "0%",
          textAlign: "center",
          verticalAlign: "middle",
          backgroundImage:
            "linear-gradient(90deg, #00C2A0 0%, #0075C3 100%)",
        }}
      >
        {title}
      </h2>
    </header>
    <div className="flex flex-col items-center px-7 py-0 max-w-screen-md max-md:px-4 max-md:py-0 max-sm:px-2 max-sm:py-0 transition-all duration-300 hover:translate-y-2 hover:scale-95">
      <p
        className="w-full text-base leading-5 text-center text-gray-600 max-md:text-sm max-md:leading-5 max-sm:text-sm max-sm:leading-4"
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "15px",
          lineHeight: "20px",
          letterSpacing: "0%",
          textAlign: "center",
          verticalAlign: "middle",
        }}
      >
        {description}
      </p>
    </div>
  </div>
</article>
  );
}

export function GetStartedButton() {
  return (
    <div className="flex flex-col items-center h-14 w-[249px] max-sm:w-full">
      <button
        className="group relative flex justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-[210px] max-sm:w-full max-sm:max-w-[300px] transition-all duration-300 ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] overflow-hidden"
      >
        {/* Text */}
        <span className="text-xl font-semibold leading-7 text-center text-white max-sm:text-lg max-sm:leading-6 transition-all duration-300 ease-[ease] group-hover:-translate-x-[20px]">
          Get Started
        </span>

        {/* Arrow */}
        <span className="absolute right-[20px] translate-x-[40px] opacity-0 transition-all duration-300 ease-[ease] group-hover:translate-x-0 group-hover:opacity-100">
          <Image
            src="/arrow-right.svg"
            alt="Arrow"
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </span>
      </button>
    </div>
  );
}

export function WhyPumaProSection() {
  const features = [
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5617568bd1c620779a5b8c4c95185c01442a083f?width=400",
      altText: "Industry experts illustration",
      title: "Built by Industry Experts",
      description:
        "Developed by a team with over 20 years of experience in proptech, property management, and investing in short-stay rentals. We know the industry inside out and we use Puma Pro ourselves to manage our own properties.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/5c4d4493f9c77c882374cdb51854d382f4a5ebda?width=400",
      altText: "No subscriptions illustration",
      title: "No Subscriptions",
      description:
        "No monthly fees. No subscriptions. No hidden costs. Absolutely free for managers and property owners. With Puma Pro, you only pay when you get bookings—and you can include the booking fee in your guest's accommodation charge at the point of sale, so you pay nothing out of the pocket. If your rooms aren't occupied, you don't pay a thing. Prefer a flat monthly rate? We're flexible to fit your business.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/152b376d1b67be7c9e4ff0ad5aaab4d83b75d63a?width=400",
      altText: "Smart tools illustration",
      title: "Smart Tools, Simple Experience",
      description:
        "No complex menus or unnecessary features—just a streamlined, easy-to-use platform powered by advanced automation and built-in AI. Enjoy a clutter-free experience that handles the heavy lifting, saves you time, and helps boost your revenue.",
    },
  ];

  return (
    <section
      id="pricing"
      className="flex overflow-hidden relative flex-col items-center px-12 py-20 w-full bg-gray-100 min-h-[767px] max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-10"
    >
      <div className="absolute bg-teal-100 rounded-full opacity-20 blur-md h-[297px] right-[calc(50%_+_78.64px)] top-[calc(50%_-_148.445px)] w-[297px]" />
      <div className="absolute bg-blue-100 rounded-full opacity-20 blur-md h-[324px] left-[calc(50%_+_81.81px)] top-[calc(50%_-_162.07px)] w-[324px]" />

      <div className="flex relative flex-col gap-10 justify-center items-center mx-auto w-full max-w-screen-xl z-[1] max-md:gap-8 max-md:max-w-[991px] max-sm:gap-6 max-sm:max-w-screen-sm">
        <header className="flex flex-col items-center w-full">
          <h1
            className="w-full text-4xl font-bold leading-10 text-center text-gray-800 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-7"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontStyle: "normal",
              fontSize: "40px",
              lineHeight: "40px",
              letterSpacing: "0%",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Why{" "}
            <span
              style={{
                background:
                  "linear-gradient(138.38deg, #00D8B2 0%, #018EEB 85.77%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              PumaPro
            </span>{" "}
            is Different
          </h1>
        </header>

        <div className="flex gap-6 justify-center items-center w-full max-md:flex-col max-md:gap-5 max-sm:gap-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              image={feature.image}
              altText={feature.altText}
              title={feature.title}
              description={feature.description}
              isNoSubscriptions={feature.title === "No Subscriptions"}
            />
          ))}
        </div>

        <GetStartedButton />
      </div>
    </section>
  );
}

export default WhyPumaProSection;
