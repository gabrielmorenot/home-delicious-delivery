import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import image1 from "@/assets/image-1.png.asset.json";
import rectangle4 from "@/assets/rectangle-4.png.asset.json";
import rectangle6 from "@/assets/rectangle-6.png.asset.json";
import rectangle8 from "@/assets/rectangle-8.png.asset.json";
import Chevronright from "@/components/homedeli/Chevronright";
import Chevronleft from "@/components/homedeli/Chevronleft";
import Search from "@/components/homedeli/Search";
import Shoppingcart from "@/components/homedeli/Shoppingcart";
import Group5 from "@/components/homedeli/Group5";
import { searchProducts, sendWebhook, type Product } from "@/lib/product-search.functions";

const USA_ADDRESS = "1250 NW 84th Ave, Suite 12, Doral, FL 33126, USA";

const FALLBACK_PRODUCTS: Product[] = [
  {
    id: "demo-1",
    title: "Nike Travis Scott",
    price: "$ 120.00",
    image: rectangle4.url,
    link: "#",
    source: "Shoes",
    category: "Shoes",
  },
  {
    id: "demo-2",
    title: "Nike Travis Scott",
    price: "$ 120.00",
    image: rectangle6.url,
    link: "#",
    source: "Shoes",
    category: "Shoes",
  },
  {
    id: "demo-3",
    title: "Nike Travis Scott",
    price: "$ 120.00",
    image: rectangle8.url,
    link: "#",
    source: "Shoes",
    category: "Shoes",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Home Delivery USA — Shop US Stores, Delivered to You" },
      {
        name: "description",
        content:
          "Get a free USA address, shop any US store, and sync your order so we deliver it straight to your door.",
      },
      { property: "og:title", content: "Home Delivery USA — Shop US Stores, Delivered to You" },
      {
        property: "og:description",
        content:
          "Get a free USA address, shop any US store, and sync your order so we deliver it straight to your door.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Homedeli,
});

const CARD_LEFT = [297, 584, 871];
const TEXT_LEFT = [315, 602, 889];
const CIRCLE_LEFT = [519, 806, 1093];
const CART_LEFT = [528, 815, 1102];

function Homedeli() {
  const runSearch = useServerFn(searchProducts);
  const runWebhook = useServerFn(sendWebhook);

  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<Product[]>(FALLBACK_PRODUCTS);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const pageCount = Math.max(1, Math.ceil(products.length / 3));
  const visible = useMemo(() => products.slice(page * 3, page * 3 + 3), [products, page]);

  async function handleSend() {
    const value = query.trim();
    if (!value || loading) return;

    setLoading(true);
    void runWebhook({ data: { status: "Search", query: value } });

    try {
      const result = await runSearch({ data: { query: value } });
      if (result.error === "missing_serper_key") {
        toast.error("Search is not configured yet.");
      } else if (result.error) {
        toast.error("We couldn't search right now. Try again.");
      } else if (result.products.length === 0) {
        toast("No products found for that search.");
      } else {
        setProducts(result.products);
        setPage(0);
      }
    } catch {
      toast.error("We couldn't search right now. Try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleSync() {
    if (syncing) return;
    setSyncing(true);
    const result = await runWebhook({ data: { status: "Sync" } });
    setSyncing(false);
    if (result.ok) toast.success("Sync sent!");
    else toast.error("We couldn't sync right now. Try again.");
  }

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(USA_ADDRESS);
      toast.success("USA address copied!");
    } catch {
      toast.error("Copy failed — please copy it manually.");
    }
  }

  return (
    <div className="w-full flex justify-center bg-white font-poppins">
      {/* homedeli */}
      <div className="relative w-[1440px] h-[1429px] bg-white overflow-hidden">
        {/* image 1 */}
        <img className="absolute w-[1440px] h-[123px]" src={image1.url} alt="image 1" />
        {/* Lets find your perfect product from USA */}
        <h1 className="absolute top-[212px] left-[362px] text-4xl font-semibold text-left">
          Lets find your perfect product from USA
        </h1>
        {/* Group 1 - search field */}
        <form
          className="absolute top-[305px] left-[302px] w-[835px] h-[60px]"
          onSubmit={(event) => {
            event.preventDefault();
            void handleSend();
          }}
        >
          {/* Rectangle 1 */}
          <div className="absolute w-[677px] h-[60px] bg-white rounded-[10px] border-[0.5px] border-[#cbcbcb] shadow-[0px_4px_16px_1px_rgb(0_0_0_/_0.06)]" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nike Travis Scott"
            aria-label="What do you want to buy?"
            className="absolute top-0 left-[25px] h-[60px] w-[590px] bg-transparent text-xl font-normal text-black outline-none placeholder:text-black/29"
          />
          <Search className="absolute top-[15px] left-[631px]" />
          {/* Rectangle 2 + Send */}
          <button
            type="submit"
            disabled={loading}
            className="absolute left-[690px] w-36 h-[60px] bg-[#34ab3b] rounded-[10px] text-2xl font-bold text-white disabled:opacity-70"
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
        {/* Write above... */}
        <p className="absolute top-[377px] left-[380px] text-sm font-normal text-center text-[#b5b5b5] w-[679px]">
          Write above what you want buy. If you just know where do your purchase, click HERE to
          continue
        </p>

        {/* Product cards */}
        {visible.map((product, index) => (
          <div key={product.id}>
            <a
              href={product.link}
              target={product.link === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="absolute top-[449px] w-[272px] h-[333px] bg-gray-100 rounded shadow-[0px_3px_11.399999618530273px_4px_rgb(0_0_0_/_0.09)] overflow-hidden block"
              style={{ left: CARD_LEFT[index] }}
            >
              {product.image ? (
                <img
                  className="absolute top-0 left-0 w-[272px] h-[202px] rounded object-cover"
                  src={product.image}
                  alt={product.title}
                  loading="lazy"
                />
              ) : null}
            </a>
            <p
              className="absolute top-[688px] text-base font-medium text-left text-[#a6a6a6] w-[190px] truncate pointer-events-none"
              style={{ left: TEXT_LEFT[index] }}
            >
              {product.category}
            </p>
            <p
              className="absolute top-[712px] text-xl font-medium text-left text-black w-[190px] line-clamp-1 pointer-events-none"
              style={{ left: TEXT_LEFT[index] }}
            >
              {product.title}
            </p>
            <p
              className="absolute top-[748px] text-base font-semibold text-left text-[#0a5c0f] pointer-events-none"
              style={{ left: TEXT_LEFT[index] }}
            >
              {product.price}
            </p>
            <a
              href={product.link}
              target={product.link === "#" ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={`Open ${product.title}`}
              className="absolute top-[733px] w-9 h-9 bg-[#0a5c0f] rounded-full"
              style={{ left: CIRCLE_LEFT[index] }}
            />
            <Shoppingcart
              className="absolute top-[742px] pointer-events-none"
              style={{ left: CART_LEFT[index] }}
            />
          </div>
        ))}

        {/* Pagination */}
        <button
          type="button"
          aria-label="Previous products"
          onClick={() => setPage((current) => (current - 1 + pageCount) % pageCount)}
          className="absolute top-[818px] left-[1058px] w-[34px] h-[34px] bg-white border border-[#dcd6d6] rounded-full"
        />
        <button
          type="button"
          aria-label="Next products"
          onClick={() => setPage((current) => (current + 1) % pageCount)}
          className="absolute top-[818px] left-[1099px] w-[34px] h-[34px] bg-white border border-[#dcd6d6] rounded-full"
        />
        <Chevronleft className="absolute top-[826px] left-[1065px] pointer-events-none" />
        <Chevronright className="absolute top-[826px] left-[1108px] pointer-events-none" />

        {/* Found what you looking for? ... */}
        <p className="absolute top-[888px] left-[361px] text-lg font-normal text-center text-[#909090] w-[717px]">
          Found what you looking for? To continue your purchase follow the steps bellow.
          <br />
          You just need copy your USA Adress and place at buy time
        </p>
        {/* We'll receive your order ... */}
        <p className="absolute top-[1198px] left-[288px] text-sm font-normal text-center text-black w-[865px]">
          We’ll receive your order and deliver it to you! Check your email for the information we
          send you so you can track your delivery and complete the payment for your shipment.
        </p>

        <Chevronright className="absolute top-[1061px] left-[551px]" />
        <Chevronright className="absolute top-[1061px] left-[862px]" />

        {/* Group 3 */}
        <div className="absolute top-[997px] left-[594px] w-[252px] h-[154px]">
          <div className="absolute w-[252px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-[#cacaca] shadow-[0px_1px_20.100000381469727px_1px_rgb(0_0_0_/_0.11)]" />
          <p className="absolute top-[14px] left-[19px] text-sm font-normal text-left text-black w-[214px] h-[126px]">
            Found the product you want to buy in the USA?
            <br />
            <br />
            Complete your purchase using your free USA Address as the shipping address.
          </p>
        </div>
        {/* Group 4 */}
        <div className="absolute top-[997px] left-[901px] w-[252px] h-[154px]">
          <div className="absolute w-[252px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-[#cacaca] shadow-[0px_1px_20.100000381469727px_1px_rgb(0_0_0_/_0.11)]" />
          <p className="absolute top-[19px] left-[19px] text-sm text-left text-black w-[214px] h-[98px]">
            After completing your purchase, enter the name or <strong>URL</strong> of the store
            where you made your purchase and click the <strong>SYNC</strong> button.
          </p>
        </div>

        {/* SYNC */}
        <button type="button" onClick={() => void handleSync()} disabled={syncing}>
          <Group5 className="absolute top-[1291px] left-[563px]" />
        </button>

        {/* Group 2 - copy address */}
        <div className="absolute top-[997px] left-[284px] w-[252px] h-[154px]">
          <div className="absolute w-[252px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-[#cacaca] shadow-[0px_1px_20.100000381469727px_1px_rgb(0_0_0_/_0.11)]" />
          <p className="absolute top-[19px] left-[17px] text-sm font-normal text-left text-black w-[213px] h-[98px]">
            Click the button below to copy your free USA Address.
          </p>
          <button
            type="button"
            onClick={() => void handleCopyAddress()}
            className="absolute top-[108px] left-[14px] w-56 h-9 bg-[#5297ff] rounded-[30px] text-sm font-medium text-center text-white"
          >
            Copy Address
          </button>
        </div>
      </div>
    </div>
  );
}
