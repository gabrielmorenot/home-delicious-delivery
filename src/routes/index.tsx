import { createFileRoute } from "@tanstack/react-router";

import image1 from "@/assets/image-1.png.asset.json";
import rectangle4 from "@/assets/rectangle-4.png.asset.json";
import rectangle6 from "@/assets/rectangle-6.png.asset.json";
import rectangle8 from "@/assets/rectangle-8.png.asset.json";
import Chevronright from "@/components/homedeli/Chevronright";
import Chevronleft from "@/components/homedeli/Chevronleft";
import Search from "@/components/homedeli/Search";
import Shoppingcart from "@/components/homedeli/Shoppingcart";
import Group5 from "@/components/homedeli/Group5";

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

function Homedeli() {
  return (
    <div className="w-full flex justify-center bg-white font-poppins">
      {/* homedeli */}
      <div className="relative w-[1440px] h-[1429px] bg-white overflow-hidden">
        {/* image 1 */}
        <img className="absolute w-[1440px] h-[123px]" src={image1.url} alt="image 1" />
        {/* Lets find your perfect product from USA */}
        <p className="absolute top-[212px] left-[362px] text-4xl font-semibold text-left">
          Lets find your perfect product from USA
        </p>
        {/* Group 1 */}
        <div className="absolute top-[305px] left-[302px] w-[835px] h-[60px]">
          {/* Rectangle 1 */}
          <div className="absolute w-[677px] h-[60px] bg-white rounded-[10px] border-[0.5px] border-[#cbcbcb] shadow-[0px_4px_16px_1px_rgb(0_0_0_/_0.06)]" />
          {/* Rectangle 2 */}
          <div className="absolute left-[690px] w-36 h-[60px] bg-[#34ab3b] rounded-[10px]" />
          {/* Nike Travis Scott */}
          <p className="absolute top-[14px] left-[25px] text-xl font-normal text-center text-black/29 w-[188px] h-8">
            Nike Travis Scott
          </p>
          {/* Send */}
          <p className="absolute top-[14px] left-[728px] text-2xl font-bold text-center text-white w-[69px] h-8">
            Send
          </p>
        </div>
        {/* Write above... */}
        <p className="absolute top-[377px] left-[380px] text-sm font-normal text-center text-[#b5b5b5] w-[679px]">
          Write above what you want buy. If you just know where do your purchase, click HERE to
          continue
        </p>
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
        {/* Rectangle 3 */}
        <div className="absolute top-[449px] left-[297px] w-[272px] h-[333px] bg-gray-100 rounded shadow-[0px_3px_11.399999618530273px_4px_rgb(0_0_0_/_0.09)]" />
        {/* Rectangle 5 */}
        <div className="absolute top-[449px] left-[584px] w-[272px] h-[333px] bg-gray-100 rounded shadow-[0px_3px_11.399999618530273px_4px_rgb(0_0_0_/_0.09)]" />
        {/* Rectangle 7 */}
        <div className="absolute top-[449px] left-[871px] w-[272px] h-[333px] bg-gray-100 rounded shadow-[0px_3px_11.399999618530273px_4px_rgb(0_0_0_/_0.09)]" />
        {/* Rectangle 4 */}
        <img
          className="absolute top-[449px] left-[297px] w-[272px] h-[202px] rounded"
          src={rectangle4.url}
          alt="Rectangle 4"
        />
        {/* Rectangle 6 */}
        <img
          className="absolute top-[449px] left-[584px] w-[272px] h-[202px] rounded"
          src={rectangle6.url}
          alt="Rectangle 6"
        />
        {/* Rectangle 8 */}
        <img
          className="absolute top-[449px] left-[871px] w-[272px] h-[202px] rounded"
          src={rectangle8.url}
          alt="Rectangle 8"
        />
        {/* Nike Travis Scott */}
        <p className="absolute top-[718px] left-[315px] text-xl font-medium text-center text-black">
          Nike Travis Scott
        </p>
        <p className="absolute top-[718px] left-[602px] text-xl font-medium text-center text-black">
          Nike Travis Scott
        </p>
        <p className="absolute top-[718px] left-[889px] text-xl font-medium text-center text-black">
          Nike Travis Scott
        </p>
        {/* $ 120.00 */}
        <p className="absolute top-[748px] left-[315px] text-base font-semibold text-center text-[#0a5c0f]">
          $ 120.00
        </p>
        <p className="absolute top-[748px] left-[602px] text-base font-semibold text-center text-[#0a5c0f]">
          $ 120.00
        </p>
        <p className="absolute top-[748px] left-[889px] text-base font-semibold text-center text-[#0a5c0f]">
          $ 120.00
        </p>
        {/* Ellipse 1-3 */}
        <div className="absolute top-[733px] left-[519px] w-9 h-9 bg-[#0a5c0f] rounded-full" />
        <div className="absolute top-[733px] left-[806px] w-9 h-9 bg-[#0a5c0f] rounded-full" />
        <div className="absolute top-[733px] left-[1093px] w-9 h-9 bg-[#0a5c0f] rounded-full" />
        {/* Shoes */}
        <p className="absolute top-[688px] left-[315px] text-base font-medium text-center text-[#a6a6a6]">
          Shoes
        </p>
        <p className="absolute top-[688px] left-[602px] text-base font-medium text-center text-[#a6a6a6]">
          Shoes
        </p>
        <p className="absolute top-[688px] left-[889px] text-base font-medium text-center text-[#a6a6a6]">
          Shoes
        </p>
        {/* Ellipse 4 */}
        <div className="absolute top-[818px] left-[1058px] w-[34px] h-[34px] bg-white border border-[#dcd6d6] rounded-full" />
        {/* Ellipse 5 */}
        <div className="absolute top-[818px] left-[1099px] w-[34px] h-[34px] bg-white border border-[#dcd6d6] rounded-full" />
        <Chevronright className="absolute top-[826px] left-[1108px]" />
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
        {/* Group 1 - search */}
        <div className="absolute top-[320px] left-[933px] w-[30px] h-[30px]">
          <Search className="absolute" />
        </div>
        <Shoppingcart className="absolute top-[742px] left-[528px]" />
        <Shoppingcart className="absolute top-[742px] left-[815px]" />
        <Shoppingcart className="absolute top-[742px] left-[1102px]" />
        <Chevronleft className="absolute top-[826px] left-[1065px]" />
        <Group5 className="absolute top-[1291px] left-[563px]" />
        {/* Group 2 */}
        <a
          className="absolute top-[997px] left-[284px] w-[252px] h-[154px] cursor-pointer"
          href="#"
        >
          <div className="absolute w-[252px] h-[154px] bg-white rounded-[10px] border-[0.5px] border-[#cacaca] shadow-[0px_1px_20.100000381469727px_1px_rgb(0_0_0_/_0.11)]" />
          <div className="absolute top-[108px] left-[14px] w-56 h-9 bg-[#5297ff] rounded-[30px]" />
          <p className="absolute top-[19px] left-[17px] text-sm font-normal text-left text-black w-[213px] h-[98px]">
            Click the button below to copy your free USA Address.
          </p>
          <p className="absolute top-[118px] left-[67px] text-sm font-medium text-center text-white w-[119px] h-4">
            Copy Address
          </p>
        </a>
      </div>
    </div>
  );
}
