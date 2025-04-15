import { ResponsiveNavigationBar } from "@/market/components/ResponsiveNavigationBar/ResponsiveNavigationBar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full  bg-white flex flex-col">
      <main className="mb-16 lg:mb-0 lg:ml-0"> {children}</main>
      <ResponsiveNavigationBar />
    </div>
  );
}
