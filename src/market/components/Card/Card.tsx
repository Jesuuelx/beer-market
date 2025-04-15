import Image from "next/image";
import { StartRating } from "../StartRating/StartRating";
import Link from "next/link";

interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  id?: number;
  path: string;
}

export const Card = ({ image, name, price, rating, path }: CardProps) => {
  return (
    <Link
      className="flex items-center p-4 bg-white rounded-xl shadow-sm mb-4 w-full transition-all duration-300 ease-out hover:scale-105"
      href={path}
    >
      <div className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 flex-shrink-0">
        <Image
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-lg"
          width={200}
          height={200}
          priority={false}
        />
      </div>

      <div className="flex flex-col flex-grow ml-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{name}</h3>
        <p className="text-gray-500 text-lg">{price}</p>
      </div>

      <div className="flex items-center">
        <div className="w-20 h-5 flex justify-end">
          <StartRating rating={rating} />
        </div>
      </div>
    </Link>
  );
};
