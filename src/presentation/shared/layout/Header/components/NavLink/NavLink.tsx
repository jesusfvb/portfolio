import { Link } from "react-router-dom";
import { SECTION_ROUTES } from "@/application/routes";

interface NavLinkProps {
  sectionId: string;
  children: React.ReactNode;
  onNavigate?: () => void;
}

const NavLink = ({ sectionId, children, onNavigate }: NavLinkProps) => {
  const to = SECTION_ROUTES[sectionId] ?? SECTION_ROUTES.hero;

  return (
    <Link
      to={to}
      onClick={onNavigate}
      className="relative rounded px-2 py-1 font-medium no-underline transition-colors duration-300 after:absolute after:bottom-[-5px] after:left-0 after:h-0.5 after:w-0 after:bg-linear-to-r after:from-[#6366f1] after:to-[#8b5cf6] after:transition-all after:duration-300 after:content-[''] hover:text-white hover:after:w-full focus-visible:ring-2 focus-visible:ring-[#6366f1] focus-visible:ring-offset-0 focus-visible:outline-none"
      style={{ color: "#d0d0d0" }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
