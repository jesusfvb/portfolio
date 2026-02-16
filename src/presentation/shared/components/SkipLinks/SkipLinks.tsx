import { useTranslation } from "react-i18next";
/**
 * SkipLinks Component
 * 
 * Proporciona links para usuarios que navegan con teclado
 * para saltar a las secciones principales del sitio.
 * 
 * Accesibilidad WCAG 2.1 Nivel AA
 * - Visible cuando recibe focus
 * - No visible normalmente (off-screen)
 * - Permite navegación rápida por teclado
 * - Fundamental para usuarios que usan screen readers o keyboard-only navigation
 */

const SkipLinks = () => {
  const { t } = useTranslation();
  const skipLinks = [
    { href: "#main-content", label: t("skipLinks.mainContent") },
    { href: "#projects", label: t("skipLinks.projects") },
    { href: "#contact", label: t("skipLinks.contact") },
  ];

  return (
    <>
      {skipLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="skip-link bg-[#6366f1] px-4 py-2 text-white font-medium hover:bg-[#8b5cf6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6366f1]"
        >
          {link.label}
        </a>
      ))}
    </>
  );
};

export default SkipLinks;
