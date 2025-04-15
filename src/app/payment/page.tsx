import { ButtonBack } from "@/market/components/ButtonBack/ButtonBack";
import { ScrollCardItem } from "@/market/components/Card/ScrollCardItem";
import { PaymentGrouped } from "@/market/interface/payment";
import { getItemsForPayment } from "@/market/services/services";
import Link from "next/link";

export const metadata = {
  title: "Payment Products",
  description: "Payment Products",
};

export default async function PaymentPage() {
  const paymentData = (await getItemsForPayment()) as PaymentGrouped;
  const { itemsGrouped } = paymentData;

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="bg-white w-full max-w-md min-h-screen lg:min-h-0 lg:shadow-lg lg:rounded-lg lg:my-8 flex flex-col">
        <header className="p-4 ">
          <div className="flex items-center">
            <ButtonBack />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Payment</h1>
              <p className="text-gray-500 mt-1 text-sm">
                You deserve better meal
              </p>
            </div>
          </div>
        </header>

        <main className="p-4 flex-1 overflow-auto">
          <section className="mb-6">
            <h2 className="font-medium mb-3">Item Ordered</h2>
            <div className="max-h-60 overflow-y-auto pr-1 border rounded-lg">
              {itemsGrouped.map((item) => (
                <ScrollCardItem
                  key={item.name}
                  image={item.image}
                  name={item.name}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </section>

          <section className="mb-6">
            <h2 className="font-medium mb-3">Details Transaction</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-500">Cherry Healthy</span>
                <span>IDR 18.390.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Driver</span>
                <span>IDR 50.000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Tax 10%</span>
                <span>IDR 1.800.390</span>
              </div>
              <div className="flex justify-between pt-2 border-t">
                <span className="font-medium">Total Price</span>
                <span className="font-bold text-green-500">
                  IDR 390.803.000
                </span>
              </div>
            </div>
          </section>
        </main>

        <Link className="p-4 mt-auto" href={"/dashboard/main"}>
          <button className="w-full bg-brand text-white py-3 rounded-lg font-medium">
            Checkout Now
          </button>
        </Link>
      </div>
    </div>
  );
}
