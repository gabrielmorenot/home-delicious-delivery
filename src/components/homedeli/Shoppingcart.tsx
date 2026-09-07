import shoppingCart from "@/assets/shopping-cart.png.asset.json";

interface ShoppingcartProps {
  className?: string;
}

const Shoppingcart = ({ className }: ShoppingcartProps) => {
  return (
    <img
      className={`w-[18px] h-[18px] ${className ?? ""}`.trim()}
      src={shoppingCart.url}
      alt="shopping-cart"
    />
  );
};

export default Shoppingcart;
