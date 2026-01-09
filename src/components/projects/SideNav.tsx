"use client";

import { useEffect, useState } from "react";
import { FilterType, filterOptions } from "@/lib/projectFilters";
import { 
  Grid3x3, 
  Code, 
  Database,
  Globe,
  ChevronLeft,
  ChevronRight,
  Zap,
  Atom
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SideNavProps {
  selectedFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const filterIcons: Record<FilterType, React.ReactNode> = {
  "All": <Grid3x3 size={20} />,
  "Next.js": <Zap size={20} />,
  "React": <Atom size={20} />,
  "Full Stack": <Database size={20} />,
  "JavaScript": <Code size={20} />,
  "HTML/CSS": <Globe size={20} />,
};

const SideNav = ({ selectedFilter, onFilterChange, isOpen, onToggle }: SideNavProps) => {
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    // Measure navbar height
    const measureNavbar = () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    measureNavbar();
    window.addEventListener('resize', measureNavbar);
    return () => window.removeEventListener('resize', measureNavbar);
  }, []);

  return (
    <>
      {/* Desktop Sidebar - Full height, fixed on left, starts after navbar */}
      <aside
        className={cn(
          "transition-all duration-300 ease-in-out",
          "hidden lg:flex lg:fixed lg:left-0 lg:z-40 lg:flex-col",
          "bg-[#f0f0f0] dark:bg-[#101622] border-r border-t border-border",
          isOpen ? "lg:w-64" : "lg:w-16"
        )}
        style={{
          top: `${navbarHeight}px`,
          height: `calc(100vh - ${navbarHeight}px)`,
        }}
      >
        <div className="flex flex-col h-full">
          {/* Header with Toggle Button */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            {isOpen && (
              <h2 className="text-lg font-semibold text-foreground dark:text-white">
                Projects
              </h2>
            )}
            <button
              onClick={onToggle}
              className={cn(
                "p-2 rounded-lg hover:bg-accent transition-colors",
                !isOpen && "ml-auto"
              )}
              aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
            >
              {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-2 p-4 overflow-y-auto overflow-x-visible scrollbar-hide flex-1">
            {filterOptions.map((option) => {
              const isActive = selectedFilter === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => onFilterChange(option.id)}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all whitespace-nowrap",
                    "text-foreground dark:text-white",
                    isOpen ? "justify-start" : "justify-center",
                    isActive
                      ? "bg-primary/20 border border-primary/50 dark:bg-primary/20"
                      : "hover:bg-accent dark:hover:bg-white/5 border border-transparent"
                  )}
                  aria-label={`Filter by ${option.label}`}
                  aria-pressed={isActive}
                  title={!isOpen ? option.label : undefined}
                >
                  <span className={cn(
                    "shrink-0",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}>
                    {filterIcons[option.id]}
                  </span>
                  {isOpen && (
                    <span className={cn(
                      "text-sm font-medium",
                      isActive ? "text-foreground dark:text-white" : "text-muted-foreground dark:text-gray-300"
                    )}>
                      {option.label}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile/Tablet Bottom Navigation - Fixed at bottom, icons only */}
      <nav
        className={cn(
          "lg:hidden fixed bottom-0 left-0 right-0 z-50",
          "bg-background border-t border-border",
          "flex flex-row items-center justify-around gap-1 p-2",
          "shadow-lg"
        )}
      >
        {filterOptions.map((option) => {
          const isActive = selectedFilter === option.id;
          return (
            <button
              key={option.id}
              onClick={() => onFilterChange(option.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 p-3 rounded-lg transition-all",
                "min-w-[60px]",
                isActive
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:bg-accent"
              )}
              aria-label={`Filter by ${option.label}`}
              aria-pressed={isActive}
              title={option.label}
            >
              <span className="shrink-0">
                {filterIcons[option.id]}
              </span>
              <span className="text-[10px] font-medium truncate w-full text-center">
                {option.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Spacer for fixed sidebar on desktop - ensures content doesn't overlap */}
      <div 
        className={cn(
          "hidden lg:block transition-all duration-300 shrink-0",
          isOpen ? "w-64" : "w-16"
        )} 
      />

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20" />
    </>
  );
};

export default SideNav;
