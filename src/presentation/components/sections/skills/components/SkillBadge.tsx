import React from "react";

interface SkillBadgeProps {
  icon: React.ReactElement;
  displayName: string;
  url?: string;
}

const SkillBadge = ({ icon, displayName, url }: SkillBadgeProps) => {
  const badgeContent = (
    <>
      <span className="flex items-center justify-center text-lg">{icon}</span>
      <span>{displayName}</span>
    </>
  );

  const badgeClasses =
    "flex items-center gap-2 px-4 py-2 bg-[#121212] border border-[rgba(255,255,255,0.1)] rounded-full text-sm font-medium text-white transition-all duration-300 hover:bg-linear-to-r hover:from-[#6366f1] hover:to-[#8b5cf6] hover:border-transparent hover:-translate-y-0.5 hover:shadow-[0_5px_15px_rgba(99,102,241,0.3)]";

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${badgeClasses} cursor-pointer no-underline`}
      >
        {badgeContent}
      </a>
    );
  }

  return (
    <div className={`${badgeClasses} cursor-default`}>{badgeContent}</div>
  );
};

export default SkillBadge;

