interface NavLinkProps {
    sectionId: string;
    children: React.ReactNode;
    scrollToSection: (id: string) => void;
  }
  
  const NavLink = ({ sectionId, children, scrollToSection }: NavLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(sectionId);
    };
  
    return (
      <a 
        href={`#${sectionId}`}
        onClick={handleClick}
        className="text-[#a0a0a0] no-underline font-medium transition-colors duration-300 relative hover:text-white after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-[#6366f1] after:to-[#8b5cf6] after:transition-all after:duration-300 hover:after:w-full"
      >
        {children}
      </a>
    );
  };

  export default NavLink;