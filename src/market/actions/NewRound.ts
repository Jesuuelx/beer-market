"use server";

import { FireBaseDB } from "@/firebase/firebase";
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { redirect } from "next/navigation";

export async function addRoundAction({
  name,
  quantity,
}: {
  name: string;
  quantity: number;
}) {
  const orderId = "7VihjUyZpco8EKIX278t";

  const orderRef = doc(FireBaseDB, "orders", orderId);

  const round = {
    created: Timestamp.now(),
    items: [{ name: name, quantity: quantity, image: `/images/${name}.jpeg` }],
  };

  await updateDoc(orderRef, {
    rounds: arrayUnion(round),
  });
  redirect("/payment");
}
