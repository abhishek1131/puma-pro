"use client";
import * as React from "react";

interface TestimonialCardProps {
  quote: string;
  attribution: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  attribution,
}) => {
  return (
    <article
      id="testimonials"
      className="flex flex-col shrink-0 justify-center items-center pt-4 rounded-2xl shadow-sm h-[207px] w-[405px] max-md:w-[350px] max-sm:mx-auto max-sm:my-0 max-sm:w-full max-sm:max-w-[350px]"
      style={{
        background:
          "linear-gradient(96.72deg, #043737 9.12%, #033030 51.8%, #094949 94.48%)",
      }}
    >
      <div className="flex flex-col gap-2 justify-center items-start w-[357px] max-md:w-[310px] max-sm:w-[calc(100%_-_48px)]">
        <div className="flex flex-col gap-2 items-start">
          <div className="flex flex-col items-start h-24 w-[357px] max-md:w-[310px] max-sm:w-full">
            <blockquote
              className="m-0 w-full text-base italic leading-6 text-white"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                verticalAlign: "middle",
              }}
            >
              {quote}
            </blockquote>
          </div>
          <div className="flex flex-col items-start w-[357px] max-md:w-[310px] max-sm:w-full">
            <div className="flex items-center w-full">
              <div className="flex flex-col items-start">
                <div className="flex flex-col items-start w-full">
                  <cite
                    className="m-0 text-base font-bold leading-5 text-white not-italic"
                    style={{
                      fontFamily: "Arial, sans-serif",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: "16px",
                      lineHeight: "24px",
                      letterSpacing: "0%",
                      verticalAlign: "middle",
                    }}
                  >
                    {attribution}
                  </cite>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border flex flex-col items-center px-40 pt-4 pb-0 h-5 w-[357px] max-md:px-28 max-md:pt-4 max-md:pb-0 max-md:w-[310px] max-sm:px-24 max-sm:pt-4 max-sm:pb-0 max-sm:w-full">
          <div
            className="h-1 rounded-[50px] w-[82px]"
            style={{
              background: "linear-gradient(180deg, #00D8B2 0%, #0075C3 100%)",
            }}
          />
        </div>
      </div>
    </article>
  );
};

export const NavigationDots: React.FC = () => {
  return (
    <nav className="flex absolute left-0 justify-center items-start w-full h-3 top-[388px] max-sm:static max-sm:mt-5">
      <div className="box-border flex flex-col items-start px-1 py-0 w-5 h-3">
        <button
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors"
          aria-label="Go to testimonial 1"
        />
      </div>
      <div className="box-border flex flex-col items-start px-1 py-0 w-5 h-3">
        <button
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition-colors"
          aria-label="Go to testimonial 2"
        />
      </div>
    </nav>
  );
};

const testimonials = [
  {
    quote:
      "We've relied on Puma for years. It's dependable, intuitive, and the support team actually listens to feedback and helps solve problems fast.",
    attribution: "( Property Manager, QLD)",
  },
  {
    quote:
      "After using Puma for years, I wouldn't trust my business with anything else. The team understands what property managers need and delivers every time.",
    attribution: "(Long Term User, GC)",
  },
  {
    quote:
      "What I value most about Puma is the peace of mind. I know my bookings and payments are in good hands, and if I ever have a question, support is always there for me.",
    attribution: "(MLR Manager, NZ)",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="box-border flex flex-col items-center px-12 py-20 w-full bg-gray-100 min-h-[560px] max-md:px-6 max-md:py-16 max-sm:px-4 max-sm:py-10">
      <div className="relative mx-auto w-full max-w-screen-xl h-[400px] max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <header className="flex absolute top-0 left-0 flex-col items-center w-full h-10">
          <h2
            className="m-0 text-4xl font-bold leading-10 text-center text-gray-800 max-md:text-3xl max-md:leading-9 max-sm:text-2xl max-sm:leading-7"
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
            Trusted by Industry Professionals
          </h2>
        </header>

        <div className="overflow-hidden absolute left-3 h-[207px] top-[97px] w-[calc(100%_-_24px)] max-md:left-0 max-md:w-full max-sm:overflow-visible max-sm:static max-sm:w-full max-sm:h-auto">
          <div
            className="flex gap-5 items-center h-[207px] w-fit max-sm:flex-col max-sm:gap-4 max-sm:w-full max-sm:h-auto animate-slide"
            style={{
              animation: "slide 20s linear infinite",
            }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                attribution={testimonial.attribution}
              />
            ))}
            {/* Duplicate testimonials for seamless looping */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`duplicate-${index}`}
                quote={testimonial.quote}
                attribution={testimonial.attribution}
              />
            ))}
          </div>
        </div>

        <NavigationDots />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
