import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCards from "../components/dashboard/DashboardCards";
import RevenueChart from "../components/charts/RevenueChart";
import salesChart from "../components/charts/SalesChart";
import SalesChart from "../components/charts/SalesChart";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-500 mb-8">
        Welcome back 👋
      </p>
        <div className="mt-8">
           <DashboardCards />
        </div>
        
      <div className="grid lg:grid-cols-3 gap-6 mt-8">

        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <SalesChart />
      </div>
    </DashboardLayout>
  );
}