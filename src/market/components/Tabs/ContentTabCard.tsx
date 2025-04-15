import { Card } from "../Card/Card";

interface Props {
  items: CardProps[];
}

interface CardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  rating: number;
  path: string;
}

export const ContentTab = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <Card
          key={item.id}
          image={item.image}
          name={item.name}
          price={item.price}
          rating={item.rating}
          path={item.path}
        />
      ))}
    </>
  );
};
