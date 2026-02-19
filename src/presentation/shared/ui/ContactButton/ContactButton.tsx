import { useTranslation } from "react-i18next";

interface ContactButtonProps {
  text?: string;
  variant?: "default" | "small" | "large";
  className?: string;
  onClick?: () => void;
}

const ContactButton = ({
  text,
  variant = "default",
  className = "",
  onClick,
}: ContactButtonProps) => {
  const { t } = useTranslation();
  
  // Usar texto proporcionado o el estático por defecto
  const buttonText = text || t("contactButton.static");

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      scrollToContact();
    }
  };

  const baseClasses =
    "cursor-pointer transition-all duration-300 border-none font-inherit bg-linear-to-r from-[#6366f1] to-[#8b5cf6] text-white hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(99,102,241,0.4)] hover:scale-105 relative overflow-hidden group animate-pulse-glow";

  const variantClasses = {
    small: "px-6 py-2.5 rounded-lg text-sm font-semibold min-w-[140px]",
    default: "px-6 py-3 rounded-lg text-base font-semibold min-w-[150px]",
    large: "px-10 py-4 rounded-xl text-lg font-bold min-w-[180px]",
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10">{buttonText}</span>
      <div className="absolute inset-0 bg-linear-to-r from-[#8b5cf6] to-[#ec4899] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      {/* Efecto shimmer */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
        }}
      ></div>
    </button>
  );
};

export default ContactButton;
