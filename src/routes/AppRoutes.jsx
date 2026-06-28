import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Enterprise Admin Dashboard</h1>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}