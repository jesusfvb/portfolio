import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "./components/NavLink";
import { ContactButton } from "@/presentation/shared/ui/ContactButton";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/application/hooks";
import { ROUTES } from "@/application/routes";

interface HeaderProps {
  className?: string;
}

const Header = (props: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation();
  const { currentLanguage, setLanguage, supportedLanguages } = useLocale();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const cvLocale = currentLanguage === "es" ? "ES" : "EN";
  const cvDownloadUrl = `https://raw.githubusercontent.com/jesusfvb/jesusfvb/main/JESUS_VAZQUEZ_BILTRE_CV_${cvLocale}.pdf`;
  const cvDownloadName = `JESUS_VAZQUEZ_BILTRE_CV_${cvLocale}.pdf`;

  return (
    <header
      className={`${props.className} fixed top-0 right-0 left-0 z-1000 backdrop-blur-md transition-all duration-300 ${
        isScrolled
          ? "border-b border-[#6366f1]/50 bg-linear-to-r from-[rgba(18,18,18,0.95)] via-[#4338ca]/70 to-[rgba(18,18,18,0.95)] shadow-lg"
          : "border-b border-transparent bg-linear-to-r from-[rgba(18,18,18,0.85)] via-[#4338ca]/60 to-[rgba(18,18,18,0.85)]"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Link
            to={ROUTES.home}
            onClick={closeMobileMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#d0d0d0] text-lg font-bold transition-all duration-300 hover:scale-110 hover:border-white hover:shadow-[0_0_15px_rgba(208,208,208,0.3)] focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none"
            aria-label="Ir al inicio"
            title="Portfolio - Jesús Francisco Vázquez"
          >
            <span
              className="font-bold"
              style={{
                color: "#d0d0d0",
              }}
            >
              JV
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-4">
            <NavLink sectionId="projects" onNavigate={closeMobileMenu}>
              {t("header.projects")}
            </NavLink>
            <NavLink sectionId="education" onNavigate={closeMobileMenu}>
              {t("header.education")}
            </NavLink>
            <NavLink sectionId="certifications" onNavigate={closeMobileMenu}>
              {t("header.certifications")}
            </NavLink>
            <a
              href={cvDownloadUrl}
              download={cvDownloadName}
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none"
              aria-label={t("header.downloadCVTitle")}
              title={t("header.downloadCVTitle")}
            >
              {t("header.downloadCV")}
            </a>
            <div
              className="flex items-center gap-1 rounded-full border border-white/20 bg-white/5 p-1 text-xs font-semibold text-white"
              aria-label={t("common.language")}
            >
              {supportedLanguages.map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => setLanguage(language)}
                  aria-pressed={currentLanguage === language}
                  className={`rounded-full px-2 py-1 transition-all duration-300 ${
                    currentLanguage === language
                      ? "bg-white text-[#121212]"
                      : "hover:bg-white/10"
                  }`}
                >
                  {language.toUpperCase()}
                </button>
              ))}
            </div>
            <ContactButton variant="small" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="flex cursor-pointer flex-col gap-1.5 rounded border-none bg-transparent p-2 focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 rounded bg-white transition-all duration-300 ${
                isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`absolute top-full right-0 left-0 flex flex-col gap-6 border-t border-white/10 bg-[rgba(18,18,18,0.98)] p-8 transition-all duration-300 md:hidden ${
            isMobileMenuOpen
              ? "visible translate-y-0 transform opacity-100"
              : "invisible -translate-y-full transform opacity-0"
          }`}
        >
          <NavLink sectionId="projects" onNavigate={closeMobileMenu}>
            {t("header.projects")}
          </NavLink>
          <NavLink sectionId="education" onNavigate={closeMobileMenu}>
            {t("header.education")}
          </NavLink>
          <NavLink sectionId="certifications" onNavigate={closeMobileMenu}>
            {t("header.certifications")}
          </NavLink>
          <a
            href={cvDownloadUrl}
            download={cvDownloadName}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label={t("header.downloadCVTitle")}
            title={t("header.downloadCVTitle")}
          >
            {t("header.downloadCV")}
          </a>
          <div
            className="flex items-center gap-1 self-start rounded-full border border-white/20 bg-white/5 p-1 text-xs font-semibold text-white"
            aria-label={t("common.language")}
          >
            {supportedLanguages.map((language) => (
              <button
                key={language}
                type="button"
                onClick={() => setLanguage(language)}
                aria-pressed={currentLanguage === language}
                className={`rounded-full px-2 py-1 transition-all duration-300 ${
                  currentLanguage === language
                    ? "bg-white text-[#121212]"
                    : "hover:bg-white/10"
                }`}
              >
                {language.toUpperCase()}
              </button>
            ))}
          </div>
          <ContactButton
            variant="default"
            className="mt-2 rounded-full"
            onClick={closeMobileMenu}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
