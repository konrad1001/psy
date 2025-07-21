import { useEffect, useState } from "react";

interface NavigationProps {
  content: any;
}

function Navigation({ content }: NavigationProps) {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // Set the active section based on the `id`
          }
        });
      },
      { threshold: 0.5 }, // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <div className="shadow-xs sticky top-0 z-50 flex items-center justify-between bg-white px-64 py-4 text-black">
      <div className="flex flex-row items-center space-x-2">
        <img src="src/assets/logo.svg" alt="Logo" className="h-12 w-12" />
        <div>
          <h1 className="font-family-body text-celadon-dark font-black">
            Ealing Psychotherapy
          </h1>
        </div>
      </div>

      <div className="flex">
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
      className={`mx-2 px-4 py-2 text-black transition-all duration-300 ${
        isActive ? "text-celadon-dark font-bold" : "hover:text-celadon-dark"
      }`}
    >
      {label}
    </a>
  );
}
