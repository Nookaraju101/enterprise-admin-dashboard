import DashboardLayout from "../layouts/DashboardLayout";
import DashboardCards from "../components/dashboard/DashboardCards";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1 className="text-4xl font-bold">
        Dashboard
      </h1>

      <p className="text-gray-500 mt-2 mb-8">
        Welcome back 👋
      </p>

      <DashboardCards />
    </DashboardLayout>
  );
}