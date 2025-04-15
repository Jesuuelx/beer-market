import { Item } from "@/market/interface/orders";
import { ScrollCardItem } from "../Card/ScrollCardItem";

interface Props {
  items: Item[];
}

export const ContentTabScrollCard = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <ScrollCardItem key={item.name} {...item} />
      ))}
    </>
  );
};
