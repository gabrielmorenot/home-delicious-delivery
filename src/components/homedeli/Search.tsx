import search from "@/assets/search.png.asset.json";

interface SearchProps {
  className?: string;
}

const Search = ({ className }: SearchProps) => {
  return (
    <img
      className={`w-[30px] h-[30px] ${className ?? ""}`.trim()}
      src={search.url}
      alt="search"
    />
  );
};

export default Search;
