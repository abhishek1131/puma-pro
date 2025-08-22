"use client";
import * as React from "react";
import { useRouter } from "next/navigation";

interface SocialIconProps {
  svgContent: string;
  className?: string;
}

export const SocialIcon: React.FC<SocialIconProps> = ({
  svgContent,
  className = "",
}) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <div
        dangerouslySetInnerHTML={{
          __html: svgContent,
        }}
      />
    </div>
  );
};

interface FooterSectionProps {
  title: string;
  links: string[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => {
  const router = useRouter();

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    const sectionMap: { [key: string]: string } = {
      Features: "features",
      Pricing: "pricing",
      Testimonials: "testimonials",
    };

    const targetId = sectionMap[link];
    if (targetId) {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Scroll to the top of the element with a smooth behavior
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        // Adjust for fixed header with a manual offset, increase for Testimonials
        const headerOffset = link === "Testimonials" ? 120 : 80; // Larger offset for Testimonials
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - headerOffset,
          behavior: "smooth",
        });
      }
    } else if (link === "Demo") {
      e.preventDefault();
      router.push("/contact-form");
    }
  };

  return (
    <section className="flex flex-col gap-4 items-start self-stretch w-[296px] max-md:w-full">
      <header className="flex flex-col items-start self-stretch">
        <h3 className="self-stretch text-lg font-semibold leading-7 text-white max-sm:text-center">
          {title}
        </h3>
      </header>
      <nav className="flex flex-col gap-2 items-start self-stretch max-sm:items-center">
        {links.map((link, index) => (
         <div key={index} className="flex flex-col items-center md:items-start self-stretch">
            <div className="flex items-start">
              <a
                href={
                  link === "About Us"
                    ? "/about-us"
                    : link === "Contact"
                      ? "/contact-form"
                      : link === "Privacy Policy"
                        ? "/privacy-policy"
                        : "#"
                }
                onClick={(e) => handleLinkClick(e, link)}
                className="text-base leading-6 text-gray-400 hover:text-teal-400 transition-colors duration-200 max-sm:text-center"
              >
                {link}
              </a>
            </div>
          </div>
        ))}
      </nav>
    </section>
  );
};

export const FooterLogo: React.FC = () => {
  const socialIcons = [
    {
      svgContent: `<svg id="I6:3177;1:126" data-component-name="Component 1" data-variant-name="variant=2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-facebook" style="width: 20px; height: 20px"> <path d="M14.9999 1.66699H12.4999C11.3948 1.66699 10.335 2.10598 9.55364 2.88738C8.77224 3.66878 8.33325 4.72859 8.33325 5.83366V8.33366H5.83325V11.667H8.33325V18.3337H11.6666V11.667H14.1666L14.9999 8.33366H11.6666V5.83366C11.6666 5.61265 11.7544 5.40068 11.9107 5.2444C12.0669 5.08812 12.2789 5.00033 12.4999 5.00033H14.9999V1.66699Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      className: "self-stretch",
    },
    {
      svgContent: `<svg id="I6:3179;1:132" data-component-name="Component 1" data-variant-name="variant=4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-twitter" style="width: 20px; height: 20px; flex-shrink: 0"> <path d="M18.3334 3.33368C18.3334 3.33368 17.7501 5.08368 16.6667 6.16701C18.0001 14.5003 8.83341 20.5837 1.66675 15.8337C3.50008 15.917 5.33341 15.3337 6.66675 14.167C2.50008 12.917 0.416748 8.00034 2.50008 4.16701C4.33341 6.33368 7.16675 7.58368 10.0001 7.50034C9.25008 4.00034 13.3334 2.00034 15.8334 4.33368C16.7501 4.33368 18.3334 3.33368 18.3334 3.33368Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      className:
        "flex flex-col justify-center items-start self-stretch pl-4 max-sm:pl-3",
    },
    {
      svgContent: `<svg id="I6:3181;1:140" data-component-name="Component 1" data-variant-name="variant=6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-instagram" style="width: 20px; height: 20px; flex-shrink: 0"> <path d="M14.1667 1.66699H5.83341C3.53223 1.66699 1.66675 3.53247 1.66675 5.83366V14.167C1.66675 16.4682 3.53223 18.3337 5.83341 18.3337H14.1667C16.4679 18.3337 18.3334 16.4682 18.3334 14.167V5.83366C18.3334 3.53247 16.4679 1.66699 14.1667 1.66699Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M13.3333 9.47525C13.4361 10.1688 13.3176 10.8771 12.9947 11.4994C12.6718 12.1218 12.1609 12.6264 11.5346 12.9416C10.9083 13.2569 10.1986 13.3666 9.50641 13.2552C8.81419 13.1438 8.17472 12.817 7.67895 12.3212C7.18318 11.8255 6.85636 11.186 6.74497 10.4938C6.63359 9.80154 6.74331 9.09183 7.05852 8.46556C7.37374 7.8393 7.87841 7.32837 8.50074 7.00545C9.12307 6.68254 9.83138 6.56407 10.5249 6.66692C11.2324 6.77182 11.8873 7.10147 12.393 7.60717C12.8987 8.11288 12.2283 8.76782 13.3333 9.47525Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M14.5833 5.41699H14.5916" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      className:
        "flex flex-col justify-center items-start self-stretch pl-4 max-sm:pl-3",
    },
    {
      svgContent: `<svg id="I6:3183;1:150" data-component-name="Component 1" data-variant-name="variant=8" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="social-linkedin" style="width: 20px; height: 20px; flex-shrink: 0"> <path d="M13.3333 6.66699C14.6593 6.66699 15.9311 7.19378 16.8688 8.13146C17.8065 9.06914 18.3333 10.3409 18.3333 11.667V17.5003H14.9999V11.667C14.9999 11.225 14.8243 10.801 14.5118 10.4885C14.1992 10.1759 13.7753 10.0003 13.3333 10.0003C12.8912 10.0003 12.4673 10.1759 12.1547 10.4885C11.8422 10.801 11.6666 11.225 11.6666 11.667V17.5003H8.33325V11.667C8.33325 10.3409 8.86004 9.06914 9.79772 8.13146C10.7354 7.19378 12.0072 6.66699 13.3333 6.66699Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.00008 7.5H1.66675V17.5H5.00008V7.5Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M3.33341 5.00033C4.25389 5.00033 5.00008 4.25413 5.00008 3.33366C5.00008 2.41318 4.25389 1.66699 3.33341 1.66699C2.41294 1.66699 1.66675 2.41318 1.66675 3.33366C1.66675 4.25413 2.41294 5.00033 3.33341 5.00033Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`,
      className:
        "flex flex-col justify-center items-start self-stretch pl-4 max-sm:pl-3",
    },
  ];

  return (
    <section className="flex flex-col gap-4 items-start self-stretch w-[296px] max-md:w-full">
      <header className="flex items-center self-stretch max-sm:flex-col max-sm:gap-2 max-sm:items-center max-sm:text-center">
        <div className="flex flex-col items-start pr-2 w-12 max-w-[304px]">
          <img
            src="/footer/footers.png"
            alt=""
            className="w-10 h-10 max-w-[296px]"
          />
        </div>
        <div className="flex flex-col items-start">
          <h2 className="text-xl font-bold leading-7 text-teal-400">
            Puma Pro
          </h2>
        </div>
      </header>
      <div className="flex flex-col items-start self-stretch">
        <p className="self-stretch text-base leading-6 text-gray-400 max-sm:text-center">
          Built by property managers, for property managers. The smarter way to
          run your short-term rental business.
        </p>
      </div>
      <div className="flex items-start self-stretch max-md:justify-center max-md:mt-4 max-sm:justify-center">
        {socialIcons.map((icon, index) => (
          <SocialIcon
            key={index}
            svgContent={icon.svgContent}
            className={icon.className}
          />
        ))}
      </div>
    </section>
  );
};

export const Footer: React.FC = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "Demo"],
    },
    {
      title: "Resources",
      links: ["Help Center", "Guides", "Testimonials"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Privacy Policy"],
    },
  ];

  return (
    <footer className="box-border flex flex-col items-center p-12 w-full bg-gray-900 max-md:px-6 max-md:py-8 max-sm:px-4 max-sm:py-6">
      <div className="flex flex-col gap-8 items-start w-full max-w-screen-xl">
        <div className="flex gap-8 justify-center items-start self-stretch w-full max-md:flex-col max-md:gap-6 max-sm:gap-5">
          <FooterLogo />
          {footerSections.map((section, index) => (
            <FooterSection
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        <div className="flex flex-col items-start self-stretch pt-8 border-t border-solid border-t-gray-800">
          <div className="flex flex-col items-center self-stretch">
            <p className="self-stretch text-base leading-6 text-center text-gray-400">
              © 2025 Puma Pro. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
