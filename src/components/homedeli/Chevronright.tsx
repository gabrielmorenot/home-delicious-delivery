import chevronRight from "@/assets/chevron-right.png.asset.json";

interface ChevronrightProps {
  className?: string;
}

const Chevronright = ({ className }: ChevronrightProps) => {
  return (
    <img
      className={`w-[18px] h-[18px] ${className ?? ""}`.trim()}
      src={chevronRight.url}
      alt="chevron-right"
    />
  );
};

export default Chevronright;
