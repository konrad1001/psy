"use client";

import { HeaderData } from "@/types/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LogoIcon from "../icons/logo";

interface NavigationProps {
  content: HeaderData;
}

function Navigation({ content }: NavigationProps) {
  const largeScreenBreakpoint = 1024;
  const scrollPositionBreakpoint = 100;

  const currentPath = usePathname();

  const [navPanelOpen, setNavPanelOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(currentPath == "/services");

  const toggleNavPanel = () => {
    setNavPanelOpen(!navPanelOpen);
  };

  useEffect(() => {
    const shouldScroll =
      currentPath == "/services" || window.innerWidth < largeScreenBreakpoint;
    setHasScrolled(shouldScroll);
  }, [currentPath]);

  useEffect(() => {
    if (navPanelOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [navPanelOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < largeScreenBreakpoint) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (
        ["/", "/home", "/about", "/contact"].includes(currentPath) &&
        window.innerWidth > largeScreenBreakpoint
      ) {
        setHasScrolled(scrollPosition > scrollPositionBreakpoint);
      } else {
        setHasScrolled(true);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 w-full flex-col ${hasScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-black"} transition-all duration-500`}
    >
      <div className="flex items-center justify-between px-8 py-4 sm:px-16 lg:px-32">
        <a href="/" className="flex flex-row items-center space-x-2">
          <div className="relative h-12 w-12">
            <LogoIcon
              className={`fill-primary-dark absolute inset-0 h-12 w-12`}
            />
          </div>

          <div>
            <h1
              className={`text-primary-dark text-md hidden font-bold md:block`}
            >
              {content.logoText}
            </h1>
          </div>
        </a>

        <div className="hidden space-x-12 lg:flex">
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
                  className={`bg-primary-dark h-1 w-6 rounded-full transition-transform duration-300 ${
                    navPanelOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></div>
                <div
                  className={`bg-primary-dark h-1 w-6 rounded-full transition-opacity duration-300 ${
                    navPanelOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`bg-primary-dark h-1 w-6 rounded-full transition-transform duration-300 ${
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
                label={content.tabNames[0] || "Home"}
                href="/"
                isActive={currentPath === "/home" || currentPath === "/"}
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
      className={`font-family-inter py-2 text-sm transition-all duration-300 hover:underline hover:decoration-2 hover:underline-offset-8 ${
        isActive
          ? "text-primary-dark font-bold"
          : "decoration-primary hover:text-black/40 hover:decoration-black/20"
      }`}
    >
      {label}
    </a>
  );
}
