import Image from "next/image";
import { StartRating } from "../StartRating/StartRating";
import Link from "next/link";

interface FoodCardProps {
  image: string;
  name: string;
  rating: number;
  path: string;
}

export const BeerCard = ({ image, name, rating, path }: FoodCardProps) => {
  return (
    <Link
      className="inline-block w-64 bg-white rounded-xl shadow-md mr-4 transition-all duration-300 ease-out hover:scale-105"
      href={path}
    >
      <Image
        src={image}
        width={200}
        height={200}
        alt={name}
        className="w-full h-48 object-cover rounded-t-xl"
        priority={false}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-gray-900">{name}</h3>
        <StartRating rating={rating} />
      </div>
    </Link>
  );
};
