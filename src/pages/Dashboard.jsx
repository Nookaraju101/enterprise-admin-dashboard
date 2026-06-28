import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Welcome
          </h1>

          <p className="text-gray-500">
            {user?.name}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="rounded bg-red-600 px-5 py-2 text-white"
        >
          Logout
        </button>
      </div>
    </div>
  );
}