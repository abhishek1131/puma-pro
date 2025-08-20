"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  return (
    <img
      src="/header/mainlogo.png"
      alt="Puma Pro"
      className={`flex shrink-0 justify-center items-center h-[87px] w-[136px] max-sm:h-[76px] max-sm:w-[120px] ${className}`}
    />
  );
};

const menuItems = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "About Us", href: "/about-us" },
];

export const NavigationMenu: React.FC = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Only prevent default and apply smooth scrolling for hash links
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // Allow default navigation for non-hash links like "/about-us"
  };
const router = useRouter();
  return (
    <nav className="flex gap-3 items-center max-sm:hidden">
      <div className="flex gap-3 items-center max-md:gap-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center h-8 min-w-[95px] max-md:min-w-20"
          >
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-base leading-6 text-center text-gray-700 max-md:text-base hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          </div>
        ))}
        <div className="flex gap-3 justify-center items-center h-10">
          <div className="flex gap-3 items-start h-10">
            <div className="flex flex-col items-end h-10">
              <button onClick={()=>router.push("/contact-form")} className="group flex shrink-0 gap-2 justify-center items-center pt-2 pr-6 pb-2 pl-6 h-10 rounded-[50px] transition-all duration-300 ease-[ease] w-[160px] max-md:w-[180px] max-sm:px-5 max-sm:py-2 max-sm:h-12 max-sm:w-[160px] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden">
                <div className="relative transition-all duration-[0.3s] ease-[ease] group-hover:absolute group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:scale-110">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 flex-shrink-0 group-hover:fill-[#00D8B2] transition-[fill] duration-[0.3s]"
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
                <span className="text-sm font-semibold leading-6 text-center text-white max-sm:text-base max-sm:leading-5 transition-all duration-[0.3s] ease-[ease] group-hover:translate-x-[40px] group-hover:opacity-0">
                  Book A Demo
                </span>
              </button>
            </div>
            <div className="flex flex-col items-end h-10">
              <a
                href="https://my.pumapro.com.au"
                className="group flex shrink-0 gap-2 justify-center items-center pt-2 pr-6 pb-2 pl-6 h-10 rounded-[50px] transition-all duration-300 ease-[ease] w-[160px] max-md:w-[180px] max-sm:px-5 max-sm:py-2 max-sm:h-12 max-sm:w-[160px] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] relative overflow-hidden"
              >
                <span className="text-sm font-semibold leading-6 text-center text-white max-sm:text-base max-sm:leading-5 transition-all duration-[0.3s] ease-[ease]">
                  Login
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const MobileMenuToggle: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <button
      onClick={toggleMenu}
      className="hidden text-2xl text-gray-700 cursor-pointer max-sm:block hover:text-gray-900 transition-colors"
      aria-label="Toggle mobile menu"
      aria-expanded={isMenuOpen}
    >
      <i className="ti ti-menu-2" />
    </button>
  );
};

export const Navigation: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <header className="flex flex-col shrink-0 justify-center items-center px-12 py-4 w-full h-24 bg-white shadow-sm max-md:px-8 max-md:py-4 max-sm:px-5 max-sm:py-4 max-sm:h-20">
        <div className="flex relative justify-between items-center w-full max-w-[1410px] max-md:gap-5 max-sm:justify-between">
          <Logo />
          <NavigationMenu />
          <MobileMenuToggle />
        </div>
      </header>
    </>
  );
};

interface BookDemoButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
}

export function BookDemoButton({
  text = "Book a Demo",
  onClick,
  className = "",
}: BookDemoButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex relative gap-3 justify-center items-center pt-2.5 pr-8 pb-2.5 pl-8 h-10 rounded-[50px] transition-all duration-300 ease-[ease] w-[121px] max-md:px-6 max-md:pt-2.5 max-md:pb-2.5 max-md:w-auto max-md:min-w-[121px] max-sm:px-6 max-sm:py-3 max-sm:w-full max-sm:h-11 max-sm:max-w-[280px] bg-gradient-to-r from-[#00D8B2] to-[#0075C3] hover:!bg-white hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)] ${className}`}
    >
      <span className="relative text-sm font-medium leading-5 text-center text-white max-sm:text-sm">
        <span className="text-sm text-white max-sm:text-sm">{text}</span>
      </span>
    </button>
  );
}

export default function DemoButton() {
  const handleClick = () => {
    console.log("Book a Demo clicked");
  };

  return <BookDemoButton text="Book a Demo" onClick={handleClick} />;
}
