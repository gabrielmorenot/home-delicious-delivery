import chevronLeft from "@/assets/chevron-left.png.asset.json";

interface ChevronleftProps {
  className?: string;
}

const Chevronleft = ({ className }: ChevronleftProps) => {
  return (
    <img
      className={`w-[18px] h-[18px] ${className ?? ""}`.trim()}
      src={chevronLeft.url}
      alt="chevron-left"
    />
  );
};

export default Chevronleft;
