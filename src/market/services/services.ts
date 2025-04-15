import { FireBaseDB } from "@/firebase/firebase";
import {
  DocumentData,
  DocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { Payment, PaymentGrouped } from "../interface/payment";
import { notFound } from "next/navigation";
import { StockItem } from "../interface/stock";
import { GroupedItems, Orders } from "../interface/orders";
import { groupItemsByPaidStatus } from "./utils";

export async function getItemsForPayment(): Promise<PaymentGrouped> {
  try {
    const stockItemRef = doc(FireBaseDB, "orders", "7VihjUyZpco8EKIX278t");
    const stockItemSnap: DocumentSnapshot<DocumentData> = await getDoc(
      stockItemRef
    );

    const order = {
      ...(stockItemSnap.data() as Payment),
    };

    const allItems = order.rounds.flatMap((round) => round.items);

    const grouped = allItems.reduce((acc, item) => {
      const existing = acc.find((i) => i.name === item.name);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        acc.push({ ...item });
      }
      return acc;
    }, [] as { name: string; quantity: number; image: string }[]);

    const finalResult = {
      created: order.created,
      paid: order.paid,
      subtotal: order.subtotal,
      taxes: order.taxes,
      itemsGrouped: grouped,
    };

    return finalResult;
  } catch (error) {
    console.error("Error getting document:", error);
    notFound();
  }
}

export async function getItems(): Promise<StockItem[]> {
  try {
    const ordersCollection = collection(FireBaseDB, "stock");
    const ordersSnapshot = await getDocs(ordersCollection);
    const ordersList: StockItem[] = ordersSnapshot.docs.map((doc) => {
      return {
        ...(doc.data() as StockItem),
        id: doc.id,
      };
    });

    return ordersList;
  } catch (error) {
    console.error("Error getting document:", error);
    notFound();
  }
}

export async function getAllOrders(): Promise<GroupedItems> {
  try {
    const ordersCollection = collection(FireBaseDB, "orders");
    const ordersSnapshot = await getDocs(ordersCollection);
    const ordersList: Orders[] = ordersSnapshot.docs.map((doc) => {
      return {
        ...(doc.data() as Orders),
        id: doc.id,
      };
    });

    return groupItemsByPaidStatus(ordersList);
  } catch (error) {
    console.error("Error getting document:", error);
    notFound();
  }
}
