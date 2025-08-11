"use client";
import * as React from "react";

interface FeatureCardProps {
  image: string;
  altText: string;
  title: string;
  description: string;
}

export function FeatureCard({
  image,
  altText,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="flex flex-col justify-center items-center pb-6 bg-white rounded-2xl shadow-md h-[436px] w-[380px] max-md:p-6 max-md:w-full max-md:h-auto max-md:max-w-[400px] max-sm:p-5 transition-all duration-300 hover:shadow-2xl hover:border-2 hover:border-teal-500 hover:h-[456px] hover:w-[400px] max-md:hover:h-[420px] max-md:hover:w-[420px] max-sm:hover:h-[380px] max-sm:hover:w-[380px]">
      <img
        src={image}
        alt={altText}
        className="shrink-0 aspect-[1/1] h-[200px] w-[200px] max-md:h-[150px] max-md:w-[150px] max-sm:h-[120px] max-sm:w-[120px] transition-all duration-300 hover:h-[220px] hover:w-[220px] max-md:hover:h-[165px] max-md:hover:w-[165px] max-sm:hover:h-[132px] max-sm:hover:w-[132px]"
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
    <div className="flex flex-col shrink-0 items-center h-14 w-[249px]">
      <button className="group flex shrink-0 gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-14 rounded-[100px] w-[210px] max-md:px-6 max-md:py-2 max-md:h-12 max-md:w-[180px] max-sm:w-40 max-sm:h-11 transition-all duration-[0.3s] ease-[ease] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
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
        <span className="text-xl font-bold leading-7 text-center text-white max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-5 transition-all duration-[0.3s] ease-[ease] group-hover:translate-x-[50px] group-hover:opacity-0">
          Get Started
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
        "No monthly fees or fixed costs. Only pay a small fee when you get bookings and you can include it in your accommodation price, so guests cover the cost. Prefer a flat monthly rate? We're flexible to fit your business.",
    },
    {
      image:
        "https://api.builder.io/api/v1/image/assets/TEMP/152b376d1b67be7c9e4ff0ad5aaab4d83b75d63a?width=400",
      altText: "Smart tools illustration",
      title: "Smart Tools, Simple Experience",
      description:
        "No complex menus or unnecessary features just a streamlined, easy-to-use platform powered by advanced automation and built-in AI. Enjoy a clutter-free experience that handles the heavy lifting, saves you time, and helps boost your revenue.",
    },
  ];

  return (
    <section className="flex overflow-hidden relative flex-col items-center px-12 py-20 w-full bg-gray-100 min-h-[767px] max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-10">
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
            Why Puma Pro is Different
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
            />
          ))}
        </div>

        <GetStartedButton />
      </div>
    </section>
  );
}

export default WhyPumaProSection;
