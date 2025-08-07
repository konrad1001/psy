import { useEffect, useState } from "react";
import type { NavigationData } from "../types";
import { urlFor } from "../utils/urlFor";

interface NavigationProps {
  content: NavigationData;
}

function Navigation({ content }: NavigationProps) {
  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const handleScroll = () => {
      let currentActiveSection = "home";
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          currentActiveSection = section.id;
        }
      });

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial state

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleNavPanel = () => {
    setNavPanelOpen(!navPanelOpen);
  };

  return (
    <div className="shadow-xs sticky top-0 z-50 w-full flex-col bg-white">
      <div className="flex items-center justify-between bg-white px-16 py-4 text-black sm:px-16 md:px-32 lg:px-52 xl:px-64">
        <div className="flex flex-row items-center space-x-2">
          {content.logoImage != null ? (
            <img
              src={urlFor(content.logoImage).url()}
              alt="Logo"
              className="h-12 w-12"
            />
          ) : (
            <img src="src/assets/logo.svg" alt="Logo" className="h-12 w-12" />
          )}
          <div>
            <h1 className="font-family-body hidden font-black text-slate-500 md:block">
              {content.logoText}
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex">
          <NavBarButton
            label={content.tabNames[0] || "Home"}
            href="#home"
            isActive={activeSection === "home"}
          />
          <NavBarButton
            label={content.tabNames[1] || "About"}
            href="#about"
            isActive={activeSection === "about"}
          />
          <NavBarButton
            label={content.tabNames[2] || "Services"}
            href="#services"
            isActive={activeSection === "services"}
          />
          <NavBarButton
            label={content.tabNames[3] || "Contact"}
            href="#contact"
            isActive={activeSection === "contact"}
          />
        </div>

        <div className="flex lg:hidden">
          <div className="flex lg:hidden">
            <button onClick={toggleNavPanel}>
              <div className="flex flex-col items-center justify-center space-y-1">
                <div
                  className={`h-1 w-6 rounded-full bg-slate-500 transition-transform duration-300 ${
                    navPanelOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-6 rounded-full bg-slate-500 transition-opacity duration-300 ${
                    navPanelOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-6 rounded-full bg-slate-500 transition-transform duration-300 ${
                    navPanelOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-col items-center">
        {navPanelOpen && (
          <div className="fixed left-0 top-20 z-40 h-full w-full bg-white shadow-lg lg:hidden">
            <div className="flex flex-col items-center justify-center space-y-4 p-8">
              <NavBarButton
                label="Home"
                href="#home"
                isActive={activeSection === "home"}
              />
              <NavBarButton
                label="About"
                href="#about"
                isActive={activeSection === "about"}
              />
              <NavBarButton
                label="Services"
                href="#services"
                isActive={activeSection === "services"}
              />
              <NavBarButton
                label="Contact"
                href="#contact"
                isActive={activeSection === "contact"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navigation;

function NavBarButton({
  label,
  href,
  isActive,
}: {
  label: string;
  href: string;
  isActive: boolean;
}) {
  return (
    <a
      href={href}
      className={`mx-2 px-2 py-2 text-black transition-all duration-300 xl:px-4 ${
        isActive ? "font-bold text-slate-500" : "hover:text-slate-500"
      }`}
    >
      {label}
    </a>
  );
}
