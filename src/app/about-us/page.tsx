import React from "react";

export function TeamSection() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Caveat:wght@400&display=swap"
      />
      <div className="box-border flex flex-col justify-center items-center px-12 py-24 w-full bg-slate-50 min-h-[902px] max-md:px-8 max-md:py-16 max-sm:px-5 max-sm:py-12">
        <div className="flex flex-col gap-20 items-start w-full max-w-[1824px] max-md:gap-16 max-sm:gap-10">
          <div className="flex flex-col gap-6 items-center w-full">
            <div className="flex flex-col gap-2.5 justify-center items-center px-2.5 py-1 h-10 border border-solid border-sky-600 border-opacity-50 rounded-[50px] w-[132px]">
              <div className="flex shrink-0 gap-1 items-center h-[21px]">
                <div className="text-xl tracking-tight leading-7 text-gray-600 max-sm:text-base">
                  Our Team
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center w-full max-w-[1090px]">
              <div className="flex flex-col gap-2 items-start self-stretch">
                <div className="self-stretch text-3xl font-bold tracking-tighter leading-10 text-center text-neutral-700 max-md:text-3xl max-sm:text-2xl max-sm:leading-8">
                  Built by Property Managers, for Property Managers
                </div>
              </div>
              <div className="w-full text-xl leading-7 text-center max-w-[1090px] text-neutral-700 text-opacity-80 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6">
                Our founders are industry insiders who've lived the challenges
                of property management first hand. We know the pain of juggling
                outdated systems, rising booking fees, and the ever-increasing
                costs of modern tech. That's why Puma Pro is designed to give
                you choice and control, letting you run your business your way
                without the extravagant expenses that come with most new
                platforms.
              </div>
            </div>
          </div>
          <div className="relative w-full h-[396px] max-w-[1090px] max-md:flex max-md:static max-md:flex-col max-md:gap-10 max-md:h-auto max-sm:gap-8">
            <div className="absolute top-0 left-0 shrink-0 h-[396px] w-[648px] max-md:static max-md:self-center max-md:w-full max-md:h-auto max-md:max-w-[600px] max-sm:max-w-full">
              <div className="absolute top-0 left-0 shrink-0 border-2 border-solid bg-zinc-300 border-orange-100 border-opacity-60 h-[396px] w-[648px] max-md:static max-md:w-full max-md:h-[300px] max-sm:h-[250px]"></div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8d10b6ec64621ab8055c31c9513ba19f514e9224?width=1297"
                alt=""
                className="object-cover absolute left-0 shrink-0 border-2 border-solid aspect-[648.72/432.21] border-orange-100 border-opacity-60 h-[432px] top-[-18px] w-[649px] max-md:static max-md:top-0 max-md:left-0 max-md:w-full max-md:h-[300px] max-sm:h-[250px]"
              />
            </div>
            <div className="flex absolute flex-col shrink-0 justify-center items-center bg-white border-2 border-sky-200 border-solid shadow-sm h-[343px] left-[557px] top-[27px] w-[533px] max-md:static max-md:self-center max-md:px-5 max-md:py-10 max-md:w-full max-md:h-auto max-md:max-w-[500px] max-sm:px-4 max-sm:py-8 max-sm:max-w-full">
              <div className="flex flex-col gap-6 items-start w-[402px] max-md:w-full max-md:max-w-[380px] max-sm:gap-5">
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
                <div className="self-stretch text-base leading-8 whitespace-pre-line text-black text-opacity-60 max-md:text-base max-md:leading-7 max-sm:text-sm max-sm:leading-6">
                  {`With many years in property investment, property management, and technology, I know firsthand the challenges property managers face. That's why we built Puma Pro: to give you real control, powerful automation, and the freedom to grow your business your way.

-Chrys
Founder, Puma Pro`}
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
      className={`box-border flex gap-20 items-center px-64 py-24 mx-auto my-0 w-full max-w-[1849px] max-md:flex-col max-md:gap-12 max-md:items-center max-md:px-8 max-md:py-12 max-md:max-w-[991px] max-sm:gap-8 max-sm:px-4 max-sm:py-8 max-sm:max-w-screen-sm ${className}`}
      style={{
        width: "1593px",
        height: "531px",
        gap: "74px",
        angle: "0deg",
        opacity: 1,
        top: "96px",
        left: "256px",
        position: "relative",
      }}
    >
      <div className="flex flex-col gap-8 items-start w-[940px] max-md:items-center max-md:w-full max-md:text-center max-md:max-w-[800px]">
        <div
          className="text-6xl font-bold text-left leading-[72px] max-md:text-5xl max-md:text-center max-md:leading-[60px] max-sm:text-4xl max-sm:leading-10"
          style={{
            fontFamily: "Inter",
            fontWeight: 700,
            fontStyle: "Bold",
            fontSize: "56px",
            leadingTrim: "NONE",
            lineHeight: "72px",
            letterSpacing: "0%",
            textAlign: "center",
            background:
              "linear-gradient(138.38deg, #00D8B2 0%, #018EEB 85.77%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          About Us
        </div>
        <div className="flex flex-col gap-2 justify-center items-start w-[902px] max-md:items-center max-md:w-full">
          <div className="flex flex-col gap-9 justify-center items-center w-full max-md:items-center">
            <div className="w-full text-3xl font-bold tracking-tighter leading-10 text-neutral-700 max-md:text-3xl max-md:text-center max-sm:text-2xl max-sm:tracking-tight">
              Our Legacy &amp; Evolution
            </div>
          </div>
          <div className="w-full text-xl leading-7 text-neutral-700 text-opacity-80 max-md:text-lg max-md:leading-7 max-md:text-center max-sm:text-base max-sm:leading-6">
            Puma Pro was built on a solid foundation literally. Our platform is
            the next evolution of the trusted legacy system, Puma, which has
            supported property managers for over 20+ years and remains reliable
            to this day. We took everything that made Puma a favorite
            dependability, customer focus, and practical features and reimagined
            it for the modern era.
          </div>
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-center">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/2501:752?width=579"
          alt="Puma Logo"
          className="w-[579px] h-[531px] object-contain"
        />
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

  return (
    <div
      className="flex flex-col gap-12 justify-center items-start px-5 py-0 mx-auto my-0 w-full max-w-[1408px] max-md:gap-8 max-md:px-6 max-md:py-0 max-md:max-w-[991px] max-sm:gap-6 max-sm:px-4 max-sm:py-0 max-sm:max-w-screen-sm"
      style={{
        width: "1408px",
        height: "310px",
        gap: "48px",
        angle: "0deg",
        opacity: 1,
        top: "1656px",
        left: "256px",
        position: "relative",
      }}
    >
      <div className="flex flex-col gap-4 justify-center items-start w-full">
        <div className="flex flex-col gap-2 justify-center items-start w-full">
          <div
            className="text-3xl tracking-tighter leading-10 text-neutral-700 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:tracking-tight max-sm:leading-8"
            style={{
              fontFamily: "Inter",
              fontWeight: 600,
              fontStyle: "Semi Bold",
              fontSize: "32px",
              leadingTrim: "NONE",
              lineHeight: "130%",
              letterSpacing: "-2%",
            }}
          >
            Legacy Values, Future-Ready Tech
          </div>
        </div>
        <div
          className="w-full max-w-[1090px] text-neutral-700 text-opacity-80 max-md:text-lg max-md:leading-7 max-sm:text-base max-sm:leading-6"
          style={{
            fontFamily: "Inter",
            fontWeight: 400,
            fontStyle: "Regular",
            fontSize: "20px",
            leadingTrim: "NONE",
            lineHeight: "28px",
            letterSpacing: "0%",
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
        <button
          className="flex shrink-0 gap-3 justify-center items-center rounded-lg transition-all cursor-pointer duration-[0.3s] ease-[ease] max-md:px-7 max-md:py-2 max-md:h-14 max-md:w-[220px] max-sm:gap-2 max-sm:px-6 max-sm:py-1.5 max-sm:h-12 max-sm:w-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
            borderRadius: "8px",
            borderWidth: "1px",
            background:
              "linear-gradient(107.91deg, #00D8B2 6.31%, #0075C3 95.89%)",
          }}
          aria-label="Book a demo"
        >
          <div>
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
          </div>
          <div className="text-xl font-semibold leading-7 text-center text-white max-md:text-lg max-md:leading-6 max-sm:text-base max-sm:leading-6">
            Book A Demo
          </div>
        </button>
      </div>
    </div>
  );
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AboutHeading />
      <TeamSection />
      <LegacyValuesSection />
    </div>
  );
}
