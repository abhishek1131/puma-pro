"use client";

import React from "react";

export const BackgroundBlur: React.FC = () => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<svg id="6:3225" width="1770" height="1160" viewBox="0 0 1770 1160" fill="none" xmlns="http://www.w3.org/2000/svg" class="background-blur" style="width: 970px; height: 360px; position: absolute; left: 238px; top: 363px; z-index: -1"> <g filter="url(#filter0_f_6_3225)"> <circle cx="580" cy="580" r="180" fill="#00D8B2" fill-opacity="0.5"></circle> </g> <g filter="url(#filter1_f_6_3225)"> <circle cx="1190" cy="580" r="180" fill="#0075C3" fill-opacity="0.5"></circle> </g> <defs> <filter id="filter0_f_6_3225" x="0" y="0" width="1160" height="1160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_6_3225"></feGaussianBlur> </filter> <filter id="filter1_f_6_3225" x="610" y="0" width="1160" height="1160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend> <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_6_3225"></feGaussianBlur> </filter> </defs> </svg>',
      }}
    />
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  imageTop: number;
  imageLeft: number;
  layout?: "text-top";
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  specialContent?: React.ReactNode;
  isOddRow?: boolean;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  imageWidth,
  imageHeight,
  titleClassName = "",
  descriptionClassName = "",
  imageClassName = "",
  containerClassName = "",
  contentClassName = "",
  specialContent,
  isOddRow = false,
}) => {
  const renderTitle = () => {
    if (title === "Optimized Pricing Automatically") {
      return (
        <h2
          className={`mb-2 text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 ${titleClassName} transition-all duration-300 ease-in-out group-hover:text-[22px] group-hover:leading-6 max-sm:group-hover:text-[18px] max-sm:group-hover:leading-5`}
          style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
        >
          <div className="text-2xl max-sm:text-xl group-hover:text-[22px] max-sm:group-hover:text-[18px]">
            Optimized Pricing Automatically
          </div>
          <div className="text-xs group-hover:text-[10px]">(Live Soon)</div>
        </h2>
      );
    }

    return (
      <h2
        className={`mb-2 text-2xl font-semibold leading-7 text-gray-800 max-md:text-center max-sm:text-xl max-sm:leading-6 ${titleClassName} transition-all duration-300 ease-in-out group-hover:text-[22px] group-hover:leading-6 max-sm:group-hover:text-[18px] max-sm:group-hover:leading-5`}
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        {title}
      </h2>
    );
  };

  const renderContent = () => (
    <div
      className={`flex flex-col justify-center w-full max-md:items-center ${contentClassName}`}
    >
      {renderTitle()}
      <p
        className={`mb-2 text-base leading-6 text-gray-600 max-md:text-center max-sm:text-sm max-sm:leading-5 ${descriptionClassName} transition-all duration-300 ease-in-out group-hover:text-[14px] group-hover:leading-5 max-sm:group-hover:text-[12px] max-sm:group-hover:leading-4`}
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  );

  const renderImage = () => {
    if (specialContent) return specialContent;

    return (
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`shrink-0 max-md:mb-4 max-md:static ${imageClassName} transition-all duration-300 ease-in-out group-hover:scale-105`}
        style={{
          width: `${imageWidth}px`,
          height: `${imageHeight}px`,
        }}
      />
    );
  };

  return (
    <article
      className={`box-border flex flex-col shrink-0 gap-16 justify-center items-center p-2.5 bg-white rounded-2xl shadow-md h-[256px] w-[660px] transition-all duration-300 ease-in-out group hover:shadow-2xl hover:border-teal-500 hover:border-solid ${containerClassName}`}
    >
      <div className="flex items-center w-full max-md:flex-col max-md:text-center">
        {isOddRow ? (
          <>
            <div className="flex flex-col flex-1 gap-2 justify-center items-start pl-4 max-md:items-center max-md:pl-0">
              {renderContent()}
            </div>
            {renderImage()}
          </>
        ) : (
          <>
            {renderImage()}
            <div className="flex flex-col flex-1 gap-2 justify-center items-start pl-4 max-md:items-center max-md:pl-0">
              {renderContent()}
            </div>
          </>
        )}
      </div>
    </article>
  );
};


export const MarketingCard: React.FC = () => {
  return (
    <div className="flex justify-center items-center shadow-lg h-[115px] w-[283px] max-md:relative max-md:top-0 max-md:left-0 max-md:mt-5 max-md:w-full max-md:h-auto">
      <div className="flex gap-6 items-center px-2.5 py-6 bg-white rounded-lg border border-solid shadow-sm border-black border-opacity-0 h-[115px] w-[283px] max-md:p-5 max-md:w-full max-md:h-auto max-sm:gap-4 max-sm:p-4">
        <div className="relative h-[110px] w-[110px] max-sm:w-20 max-sm:h-20">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I6:3236;857:3765;704:2342" width="110" height="111" viewBox="0 0 110 111" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="chart-svg" style="width: 110px; height: 110px; position: absolute; left: 0; top: 0"> <g clip-path="url(#clip0_6_3469)"> <path d="M26.459 0.548828V108.142" stroke="url(#paint0_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M52.8083 0.548828V108.142" stroke="url(#paint1_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M0 26.8745H31.7228" stroke="url(#paint2_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M0 79.4868H107.593" stroke="url(#paint3_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M0 53.1377H107.593" stroke="url(#paint4_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M79.1577 0.548828V108.142" stroke="url(#paint5_linear_6_3469)" stroke-opacity="0.1" stroke-width="0.92449"></path> <path d="M58.5976 38.8896H58.5976C49.6028 38.8896 42.311 46.1814 42.311 55.1762V55.1762C42.311 64.171 49.6028 71.4627 58.5976 71.4627H58.5976C67.5924 71.4627 74.8841 64.171 74.8841 55.1762V55.1762C74.8841 46.1814 67.5924 38.8896 58.5976 38.8896Z" fill="black" fill-opacity="0.08"></path> <g filter="url(#filter0_d_6_3469)"> <path d="M42.2985 54.petition6C42.5465 55.1341 43.0749 55.6624 43.7449 55.9103C43.0749 56.1583 42.5465 56.6867 42.2985 57.3568C42.0505 56.6867 41.5223 56.1583 40.8521 55.9103C41.5223 55.6624 42.0505 55.1341 42.2985 54.4639Z" fill="#0075C3"></path> </g> <mask id="mask0_6_3469" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="45" y="41" width="27" height="28"> <path d="M71.9661 41.876H45.3647V68.4773H71.9661V41.876Z" fill="white"></path> </mask> <g mask="url(#mask0_6_3469)"> <path d="M79.804 34.0381H37.7644V76.0777H79.804V34.0381Z" fill="url(#pattern0_6_3469)"></path> </g> <mask id="mask1_6_3469" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="42" y="39" width="12" height="17"> <path d="M53.9207 39.7017C50.6089 40.6866 47.696 42.6995 45.6035 45.449C43.5108 48.1986 42.347 51.5426 42.2803 54.9972L42.5 55.0015C42.5658 51.5934 43.7139 48.2946 45.7783 45.5822C47.8426 42.8696 50.716 40.884 53.9834 39.9123L53.9207 39.7017Z" fill="white"></path> </mask> <g mask="url(#mask1_6_3469)"> <path d="M53.9207 39.7017C50.6089 40.6866 47.696 42.6995 45.6035 45.449C43.5108 48.1986 42.347 51.5426 42.2803 54.9972L42.5 55.0015C42.5658 51.5934 43.7139 48.2946 45.7783 45.5822C47.8426 42.8696 50.716 40.884 53.9834 39.9123L53.9207 39.7017Z" stroke="url(#paint6_linear_6_3469)" stroke-width="2"></path> </g> </g> <defs> <filter id="filter0_d_6_3469" x="35.7769" y="49.3887" width="13.0432" height="13.0435" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset></feOffset> <feGaussianBlur stdDeviation="2.5376"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.75 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6_3469"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6_3469" result="shape"></feBlend> </filter> <pattern id="pattern0_6_3469" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_6_3469" transform="translate(0 -0.00025) scale(0.0005)"></use> </pattern> <linearGradient id="paint0_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint1_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint2_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint3_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint4_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint5_linear_6_3469" x1="-nan" y1="-nan" x2="-nan" y2="-nan" gradientUnits="userSpaceOnUse"> <stop stop-color="white" stop-opacity="0"></stop> <stop offset="0.498481" stop-color="white"></stop> <stop offset="1" stop-color="white" stop-opacity="0"></stop> </linearGradient> <linearGradient id="paint6_linear_6_3469" x1="44.296" y1="55.4143" x2="55.1028" y2="40.451" gradientUnits="userSpaceOnUse"> <stop stop-color="#0075C3"></stop> <stop offset="1" stop-color="#0075C3" stop-opacity="0"></stop> </linearGradient> <clipPath id="clip0_6_3469"> <rect width="109.73" height="109.73" fill="white" transform="translate(0 0.548828)"></rect> </clipPath> </defs> </svg>',
            }}
          />
        </div>
        <div className="relative h-[21px] w-[43px] max-sm:h-[18px] max-sm:w-[35px]">
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="I6:3236;857:3765;704:2428" width="44" height="22" viewBox="0 0 44 22" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="avatar-group" style="width: 43px; height: 21px; position: absolute; left: 0; top: 0"> <g clip-path="url(#clip0_6_3490)"> <path d="M9.74648 4.15137C14.4865 4.15137 18.3291 8.02972 18.3291 12.8139C18.3291 17.598 14.4865 21.4764 9.74648 21.4764C5.00642 21.4764 1.16382 17.598 1.16382 12.8139C1.16382 8.02972 5.00642 4.15137 9.74648 4.15137Z" fill="#E0E0E0"></path> <path d="M9.74648 4.15137C14.4865 4.15137 18.3291 8.02972 18.3291 12.8139C18.3291 17.598 14.4865 21.4764 9.74648 21.4764C5.00642 21.4764 1.16382 17.598 1.16382 12.8139C1.16382 8.02972 5.00642 4.15137 9.74648 4.15137Z" fill="url(#pattern0_6_3490)"></path> <path d="M9.74648 4.15137C14.4865 4.15137 18.3291 8.02972 18.3291 12.8139C18.3291 17.598 14.4865 21.4764 9.74648 21.4764C5.00642 21.4764 1.16382 17.598 1.16382 12.8139C1.16382 8.02972 5.00642 4.15137 9.74648 4.15137Z" stroke="white" stroke-width="1.5"></path> <path d="M9.7465 4.54541C14.2711 4.54541 17.939 8.24747 17.939 12.8142C17.939 17.3809 14.2711 21.0829 9.7465 21.0829C5.22189 21.0829 1.55396 17.3809 1.55396 12.8142C1.55396 8.24747 5.22189 4.54541 9.7465 4.54541Z" stroke="black" stroke-opacity="0.08" stroke-width="0.75"></path> <path d="M34.7143 4.15137C39.4543 4.15137 43.2969 8.02972 43.2969 12.8139C43.2969 17.598 39.4543 21.4764 34.7143 21.4764C29.9742 21.4764 26.1316 17.598 26.1316 12.8139C26.1316 8.02972 29.9742 4.15137 34.7143 4.15137Z" fill="#E0E0E0"></path> <path d="M34.7143 4.15137C39.4543 4.15137 43.2969 8.02972 43.2969 12.8139C43.2969 17.598 39.4543 21.4764 34.7143 21.4764C29.9742 21.4764 26.1316 17.598 26.1316 12.8139C26.1316 8.02972 29.9742 4.15137 34.7143 4.15137Z" fill="url(#pattern1_6_3490)"></path> <path d="M34.7143 4.15137C39.4543 4.15137 43.2969 8.02972 43.2969 12.8139C43.2969 17.598 39.4543 21.4764 34.7143 21.4764C29.9742 21.4764 26.1316 17.598 26.1316 12.8139C26.1316 8.02972 29.9742 4.15137 34.7143 4.15137Z" stroke="white" stroke-width="1.5"></path> <path d="M34.7143 4.54541C39.239 4.54541 42.9068 8.24747 42.9068 12.8142C42.9068 17.3809 39.239 21.0829 34.7143 21.0829C30.1897 21.0829 26.5217 17.3809 26.5217 12.8142C26.5217 8.24747 30.1897 4.54541 34.7143 4.54541Z" stroke="black" stroke-opacity="0.08" stroke-width="0.75"></path> <path d="M22.2305 1.35156C27.7366 1.35156 32.2003 5.85669 32.2003 11.4141C32.2003 16.9714 27.7366 21.4766 22.2305 21.4766C16.7244 21.4766 12.2607 16.9714 12.2607 11.4141C12.2607 5.85669 16.7244 1.35156 22.2305 1.35156Z" fill="#E0E0E0"></path> <path d="M22.2305 1.35156C27.7366 1.35156 32.2003 5.85669 32.2003 11.4141C32.2003 16.9714 27.7366 21.4766 22.2305 21.4766C16.7244 21.4766 12.2607 16.9714 12.2607 11.4141C12.2607 5.85669 16.7244 1.35156 22.2305 1.35156Z" fill="url(#pattern2_6_3490)"></path> <path d="M22.2305 1.35156C27.7366 1.35156 32.2003 5.85669 32.2003 11.4141C32.2003 16.9714 27.7366 21.4766 22.2305 21.4766C16.7244 21.4766 12.2607 16.9714 12.2607 11.4141C12.2607 5.85669 16.7244 1.35156 22.2305 1.35156Z" stroke="white" stroke-width="1.5"></path> <path d="M22.2305 1.74512C27.5212 1.74512 31.8102 6.07395 31.8102 11.4139C31.8102 16.7538 27.5212 21.0826 22.2305 21.0826C16.9398 21.0826 12.6509 16.7538 12.6509 11.4139C12.6509 6.07395 16.9398 1.74512 22.2305 1.74512Z" stroke="black" stroke-opacity="0.08" stroke-width="0.75"></path> </g> <defs> <pattern id="pattern0_6_3490" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_6_3490" transform="scale(0.0015625)"></use> </pattern> <pattern id="pattern1_6_3490" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image1_6_3490" transform="scale(0.0015625)"></use> </pattern> <pattern id="pattern2_6_3490" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image2_6_3490" transform="scale(0.0015625)"></use> </pattern> <clipPath id="clip0_6_3490"> <rect width="43" height="21" fill="white" transform="translate(0.730469 0.914062)"></rect> </clipPath> </defs> </svg>',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export const FeaturesGrid: React.FC = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
      />
      <section className="box-border flex flex-col gap-10 justify-center items-center px-12 pt-24 pb-24 w-full bg-[#EBEFF2] min-h-[884px] max-md:px-8 max-md:py-16 max-sm:px-4 max-sm:py-12">
        <div className="flex flex-col gap-12 justify-center items-center w-full max-w-[1294px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full max-w-[1192px]">
              <div className="flex flex-col gap-2 items-center w-full">
                <header className="flex flex-col items-center w-full">
                  <h1 className="w-full text-5xl font-bold leading-10 text-center capitalize bg-clip-text max-w-[1050px] max-md:text-4xl max-md:leading-9 max-sm:text-3xl max-sm:leading-8">
                    PowerFull Features
                  </h1>
                </header>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-24 gap-y-8 max-w-[1334px] w-full  max-md:grid-cols-1 max-md:gap-8">
            {/* Row 1: Text First */}
            <FeatureCard
              title="Integrated Payment Processor"
              description="Puma Pro Pay automates all your bookings and payments—no manual work, no bank fees, no errors. Enjoy seamless, effortless transactions every time."
              imageUrl="/gif/first.gif"
              imageAlt="Animation1"
              imageWidth={237}
              imageHeight={240}
              imageTop={11}
              imageLeft={394}
              isOddRow={true}
            />
            <FeatureCard
              title="Steve Ai Assistant"
              description="AI assistant your intuitive AI assistant that works 24/7 to save you time. From checking the weekend weather forecast to finding local events that could affect your room rates, Steve has it covered. Need to know how many cleans are scheduled this week? Just ask."
              imageUrl="/gif/second.gif"
              imageAlt="Animation4"
              imageWidth={255.51531982421875}
              imageHeight={223.2474365234375}
              imageTop={39}
              imageLeft={404}
              isOddRow={true}
            />

            {/* Row 2: Image First */}
            <FeatureCard
              title="Optimized Pricing Automatically"
              description="Automatically adjust your rates in real time based on demand, events, and market trends—all from one platform."
              imageUrl="/gif/third.gif"
              imageAlt="Animation2"
              imageWidth={355}
              imageHeight={196}
              imageTop={33}
              imageLeft={50}
              isOddRow={false}
            />
            <FeatureCard
              title="Channel Manager"
              description="Manage all your booking platforms from one place with Puma Pro. Our Channel Manager keeps your listings, rates, and availability perfectly synced automatically."
              imageUrl="/gif/fourth.gif"
              imageAlt="Animation7"
              imageWidth={293.67022705078125}
              imageHeight={140}
              imageTop={56}
              imageLeft={45}
              isOddRow={false}
            />

            {/* Row 3: Text First */}
            <FeatureCard
              title="Reporting & Analytics"
              description="Puma Pro instantly generates all the reports you need bookings, payments, performance, and more automatically. Stay on top of your business with accurate, up-to-date insights."
              imageUrl="/gif/fifth.gif"
              imageAlt="Animation8"
              imageWidth={300}
              imageHeight={161}
              imageTop={51}
              imageLeft={358}
              isOddRow={true}
            />
            <FeatureCard
              title="Unified Guest Messaging System"
              description="Easily communicate with guests from one place. Puma Pro automates confirmations, updates, and even sends marketing promotions no manual emails or extra effort needed."
              imageUrl="/gif/sixth.gif"
              imageAlt="Animation5"
              imageWidth={196}
              imageHeight={222}
              imageTop={27}
              imageLeft={385.5}
              isOddRow={true}
            />

            {/* Row 4: Image First */}
            <FeatureCard
              title="Automated Bookings System"
              description="Let Puma Pro handle your reservations for you. Our automated booking system instantly processes new bookings, no manual entry or double bookings."
              imageUrl="/gif/seventh.gif"
              imageAlt="Group 1000004942 (5) 1"
              imageWidth={376}
              imageHeight={184}
              imageTop={38}
              imageLeft={59}
              isOddRow={false}
            />
            <FeatureCard
              title="Marketing"
              description="Need a hand with your marketing? Whether it's building a new website or sending out promotional emails, we're here to help you get noticed and grow your business hassle-free."
              imageUrl="/gif/eight.gif"
              imageAlt=""
              imageWidth={282.7349548339844}
              imageHeight={114.82846069335938}
              imageTop={74}
              imageLeft={59}
              isOddRow={false}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesGrid;
