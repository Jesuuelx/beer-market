import { BeerCarousel } from "@/market/components/BeerCarousel/BeerCarousel";

import { ContentTab } from "@/market/components/Tabs/ContentTabCard";
import { Tabs } from "@/market/components/Tabs/Tabs";
import { getItems } from "@/market/services/services";
import Image from "next/image";

export default async function MainPage() {
  const items = await getItems();

  const tabs = [
    {
      id: "newTaste",
      label: "New Beers",
      content: <ContentTab items={items} />,
    },
    {
      id: "popular",
      label: "Popular",
      content: <div>Oops! Try again more late</div>,
    },
    {
      id: "recommended",
      label: "Recommended",
      content: <div>Oops! Try again more late</div>,
    },
  ];

  return (
    <div className="flex flex-col mt-2">
      <div className="flex justify-between px-4 max-w-fulls">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-900">Beer Market</h1>
          <p className="text-gray-500 mt-1">Let s get some foods</p>
        </div>
        <Image
          src={"/images/gokuBeer.jpg"}
          alt="Beer"
          width={100}
          height={100}
          className="object-cover rounded-t-xl"
        />
      </div>
      <BeerCarousel beerItems={items} />
      <Tabs tabs={tabs} />
    </div>
  );
}
