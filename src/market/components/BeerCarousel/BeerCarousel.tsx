import { BeerCard } from "../BeerCard/BeerCard";

interface BeerItems {
  path: string;
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  rating: number;
}

interface BeerCarouselProps {
  beerItems: BeerItems[];
}

export const BeerCarousel = ({ beerItems }: BeerCarouselProps) => {
  return (
    <div className="max-w-full mx-auto my-8">
      <div className="relative">
        <div
          className="overflow-x-auto whitespace-nowrap pb-4 px-4 scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {beerItems.map((item) => (
            <BeerCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
