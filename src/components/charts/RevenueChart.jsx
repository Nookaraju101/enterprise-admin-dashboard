import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

  datasets: [
    {
      label: "Revenue",

      data: [12000, 18000, 15000, 22000, 26000, 30000],

      borderColor: "#2563eb",

      backgroundColor: "rgba(37,99,235,.2)",

      tension: 0.4,

      fill: true,
    },
  ],
};

export default function RevenueChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Revenue Overview
      </h2>

      <Line data={data} />
    </div>
  );
}