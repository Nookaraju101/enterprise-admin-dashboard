import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

const data = {
  labels: [
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
  ],

  datasets: [
    {
      data: [35, 25, 20, 20],

      backgroundColor: [
        "#2563eb",
        "#16a34a",
        "#f59e0b",
        "#dc2626",
      ],
    },
  ],
};

export default function SalesChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">
        Sales Category
      </h2>

      <Doughnut data={data} />
    </div>
  );
}