import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
      <DashboardLayout>
      <h1 className="text-3xl font-bold">
        Dashboard
      </h1>

      <p className="mt-3 text-gray-500">
        Welcome to Enterprise Admin Dashboard
      </p>
    </DashboardLayout>

        /*<button
          onClick={handleLogout}
          className="rounded bg-red-600 px-5 py-2 text-white"
        >
          Logout
        </button>*/
  );
}