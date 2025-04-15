import Image from "next/image";

interface Props {
  name: string;
  image: string;
  quantity: number;
}

export const ScrollCardItem = ({ name, image, quantity }: Props) => {
  return (
    <div key={name} className="flex items-center p-3 border-b last:border-b-0">
      <div className="w-16 h-16 rounded-lg overflow-hidden mr-3">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-700">2.99</p>
      </div>
      <div className="text-gray-500">{quantity} items</div>
    </div>
  );
};
