import React from "react";

interface FilterBarProps {
  onGrid?: () => void;
  onList?: () => void;
  activeView?: "grid" | "list";
}

const FilterBar: React.FC<FilterBarProps> = ({
  onGrid,
  onList,
  activeView,
}) => (
  <div className="bg-[#181818] border-b border-[#232323] px-3 sm:px-4 md:px-6 lg:px-10 py-3 flex items-center justify-between gap-2 sm:gap-3 flex-wrap">
    {/* Filters icon */}
    <div className="flex items-center gap-2 order-1">
      <button className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-[#232323] bg-[#232323] hover:bg-[#C6A15B] transition">
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 20 20"
          className="sm:w-5 sm:h-5"
        >
          <g fill="currentColor">
            <rect x="2" y="4" width="16" height="2" rx="1" />
            <rect x="5" y="9" width="10" height="2" rx="1" />
            <rect x="8" y="14" width="4" height="2" rx="1" />
          </g>
        </svg>
      </button>
      <span className="text-xs sm:text-sm text-[#888] hidden sm:inline">
        فیلترها
      </span>
    </div>

    {/* Grid/List toggle and count */}
    <div className="flex items-center gap-2 order-2 sm:order-3">
      <button
        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-[#232323] bg-[#232323] transition-colors hover:text-[#00C16A] ${
          activeView === "grid" ? "text-[#00C16A]" : "text-[#888]"
        }`}
        onClick={onGrid}
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 20 20"
          className="sm:w-5 sm:h-5"
        >
          <g fill="currentColor">
            <rect x="2" y="2" width="4" height="4" rx="1" />
            <rect x="8" y="2" width="4" height="4" rx="1" />
            <rect x="14" y="2" width="4" height="4" rx="1" />
            <rect x="2" y="8" width="4" height="4" rx="1" />
            <rect x="8" y="8" width="4" height="4" rx="1" />
            <rect x="14" y="8" width="4" height="4" rx="1" />
            <rect x="2" y="14" width="4" height="4" rx="1" />
            <rect x="8" y="14" width="4" height="4" rx="1" />
            <rect x="14" y="14" width="4" height="4" rx="1" />
          </g>
        </svg>
      </button>
      <button
        className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded border border-[#232323] bg-[#232323] transition-colors hover:text-[#00C16A] ${
          activeView === "list" ? "text-[#00C16A]" : "text-[#888]"
        }`}
        onClick={onList}
      >
        <svg
          width="16"
          height="16"
          fill="none"
          viewBox="0 0 20 20"
          className="sm:w-5 sm:h-5"
        >
          <g fill="currentColor">
            <rect x="2" y="4" width="16" height="2" rx="1" />
            <rect x="2" y="9" width="16" height="2" rx="1" />
            <rect x="2" y="14" width="16" height="2" rx="1" />
          </g>
        </svg>
      </button>
      <span className="text-xs sm:text-sm text-[#888] whitespace-nowrap ml-2">
        نمایش: ۲۴ / ۳۶
      </span>
    </div>

    {/* Sort options - Hidden on small screens */}
    <div className="hidden lg:flex items-center gap-4 text-sm font-yekan order-3 sm:order-2">
      <button className="text-[#00C16A] font-bold">پیش فرض</button>
      <button className="text-white hover:text-[#00C16A] transition-colors">
        کمترین قیمت
      </button>
      <button className="text-white hover:text-[#00C16A] transition-colors">
        بیشترین قیمت
      </button>
      <button className="text-white hover:text-[#00C16A] transition-colors">
        جدیدترین ها
      </button>
      <button className="text-white hover:text-[#00C16A] transition-colors">
        بیشترین تخفیف
      </button>
      <button className="text-white hover:text-[#00C16A] transition-colors">
        بیشترین فروش
      </button>
    </div>
  </div>
);

export default FilterBar;
