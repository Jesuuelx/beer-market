import Image from "next/image";
import { IoChevronBackCircle } from "react-icons/io5";
import {
  doc,
  getDoc,
  DocumentData,
  DocumentSnapshot,
} from "@firebase/firestore";
import { FireBaseDB } from "@/firebase/firebase";
import Link from "next/link";
import { ContentCard } from "@/market/components/DetailCard/ContentCard";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getItems } from "@/market/services/services";

export interface StockItem {
  name: string;
  image: string;
  path: string;
  price: number;
  rating: number;
  quantity: number;
}

export async function generateStaticParams() {
  const items = await getItems();

  const paths = items.map((item) => ({
    name: item.id,
  }));
  return paths;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  try {
    const { name } = await params;
    const item = await getStockItem(`${name}`);

    return {
      title: item.name,
      description: `Beer ${item.name} now!`,
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Beer product Oops! Try again",
      description: "Beer Oops! Try again",
    };
  }
}

async function getStockItem(itemId: string): Promise<StockItem> {
  try {
    const stockItemRef = doc(FireBaseDB, "stock", itemId);
    const stockItemSnap: DocumentSnapshot<DocumentData> = await getDoc(
      stockItemRef
    );

    return {
      ...(stockItemSnap.data() as StockItem),
    };
  } catch (error) {
    console.error("Error getting document:", error);
    notFound();
  }
}

type Params = Promise<{ name: string }>;

interface PageProps {
  params: Params;
}

export default async function DetailProductPage({ params }: PageProps) {
  const { name } = await params;

  const item = await getStockItem(`${name}`);

  return (
    <div className="w-full h-screen lg:h-auto lg:max-w-md lg:mx-auto lg:my-10 bg-white shadow-lg rounded-lg overflow-hidden flex flex-col relative">
      <div className="relative h-6/8">
        <Link className="absolute top-4 left-4 z-10" href={"/dashboard/main"}>
          <IoChevronBackCircle className="text-brand" size={40} />
        </Link>
        <Image
          src={item.image}
          width={350}
          height={350}
          alt="Food"
          className="w-full h-full object-cover"
        />
      </div>
      <ContentCard name={item.name} rating={item.rating} price={item.price} />
    </div>
  );
}
