import DashboardCard from "./DashboardCard";

import {
  DollarSign,
  ShoppingCart,
  Users,
  Package,
} from "lucide-react";

const cards = [
  {
    title: "Revenue",
    value: "$45,231",
    icon: DollarSign,
    color: "#2563eb",
  },
  {
    title: "Orders",
    value: "1,245",
    icon: ShoppingCart,
    color: "#16a34a",
  },
  {
    title: "Customers",
    value: "3,542",
    icon: Users,
    color: "#dc2626",
  },
  {
    title: "Products",
    value: "768",
    icon: Package,
    color: "#ca8a04",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {cards.map((card) => (
        <DashboardCard
          key={card.title}
          {...card}
        />
      ))}
    </div>
  );
}