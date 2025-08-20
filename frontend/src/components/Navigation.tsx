import { useEffect, useState } from "react";
import type { NavigationData } from "../types";
import { urlFor } from "../utils/urlFor";
import { useLocation } from "react-router-dom";

interface NavigationProps {
  content: NavigationData;
}

function Navigation({ content }: NavigationProps) {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log("Current Path:", currentPath);
  console.log(currentPath in ["/", "/home", "/about", "/contact"]);

  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(
    !["/", "/home", "/about", "/contact"].includes(currentPath),
  );

  const toggleNavPanel = () => {
    setNavPanelOpen(!navPanelOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (["/", "/home", "/about", "/contact"].includes(currentPath)) {
        setHasScrolled(scrollPosition > 100);
      } else {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 w-full flex-col ${hasScrolled ? "bg-white/100 text-black shadow-md" : "bg-transparent text-white"} transition-all duration-500`}
    >
      <div className="flex items-center justify-between px-16 py-4 lg:px-32">
        <div className="flex flex-row items-center space-x-2">
          <div className="relative h-12 w-12">
            <img
              src="src/assets/logo_white.svg"
              alt="Logo"
              className={`absolute inset-0 h-12 w-12 transition-opacity duration-500 ${
                hasScrolled ? "opacity-0" : "opacity-100"
              }`}
            />
            <img
              src="src/assets/logo_black.svg"
              alt="Logo"
              className={`absolute inset-0 h-12 w-12 transition-opacity duration-500 ${
                hasScrolled ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <div>
            <h1 className="font-family-inter hidden font-black md:block">
              {content.logoText}
            </h1>
          </div>
        </div>

        <div className="hidden lg:flex">
          <NavBarButton
            label={content.tabNames[0] || "Home"}
            href="/"
            isActive={currentPath === "/" || currentPath === "/home"}
          />
          <NavBarButton
            label={content.tabNames[1] || "About"}
            href="/about"
            isActive={currentPath === "/about"}
          />
          <NavBarButton
            label={content.tabNames[2] || "Services"}
            href="/services"
            isActive={currentPath === "/services"}
          />
          <NavBarButton
            label={content.tabNames[3] || "Contact"}
            href="/contact"
            isActive={currentPath === "/contact"}
          />
        </div>

        <div className="flex lg:hidden">
          <div className="flex lg:hidden">
            <button onClick={toggleNavPanel}>
              <div className="flex flex-col items-center justify-center space-y-1">
                <div
                  className={`h-1 w-6 rounded-full ${hasScrolled ? "bg-black" : "bg-white"} transition-transform duration-300 ${
                    navPanelOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-6 rounded-full ${hasScrolled ? "bg-black" : "bg-white"} transition-opacity duration-300 ${
                    navPanelOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-6 rounded-full ${hasScrolled ? "bg-black" : "bg-white"} transition-transform duration-300 ${
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
                href="/"
                isActive={currentPath === "/home"}
              />
              <NavBarButton
                label="About"
                href="/about"
                isActive={currentPath === "/about"}
              />
              <NavBarButton
                label="Services"
                href="/services"
                isActive={currentPath === "/services"}
              />
              <NavBarButton
                label="Contact"
                href="/contact"
                isActive={currentPath === "/contact"}
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
      className={`font-family-inter mx-2 px-2 py-2 text-sm transition-all duration-300 xl:px-4 ${
        isActive
          ? "font-bold"
          : "decoration-primary hover:text-black/40 hover:underline hover:decoration-black/20 hover:decoration-2 hover:underline-offset-8"
      }`}
    >
      {label}
    </a>
  );
}
