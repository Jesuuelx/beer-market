import { ContentTabScrollCard } from "@/market/components/Tabs/ContentTabScrollCard";
import { Tabs } from "@/market/components/Tabs/Tabs";
import { getAllOrders } from "@/market/services/services";

export const metadata = {
  title: "Your Orders",
  description: "Your Orders",
};

export default async function OrdersPage() {
  const paymentData = await getAllOrders();
  const { paid, unpaid } = paymentData;

  const tabs = [
    {
      id: "newTaste",
      label: "In Progress",
      content: <ContentTabScrollCard items={unpaid} />,
    },
    {
      id: "popular",
      label: "Past Orders",
      content: <ContentTabScrollCard items={paid} />,
    },
  ];

  return (
    <div className="w-full h-screen sm:h-auto sm:max-w-md sm:mx-auto bg-white flex flex-col">
      <div className="max-w-lg  w-full flex-1 flex flex-col">
        <div className="mb-8  px-4 py-6 ">
          <h1 className="text-2xl font-bold text-gray-900">Your Orders</h1>
          <p className="text-gray-500 mt-1">Wait for the best meal</p>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
