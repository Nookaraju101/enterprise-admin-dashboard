import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">
      <input
        placeholder="Search..."
        className="w-80 rounded-lg border p-2"
      />

      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
          {user?.name?.charAt(0)}
        </div>

        <div>
          <p className="font-semibold">{user?.name}</p>
          <p className="text-sm text-gray-500">
            Administrator
          </p>
        </div>
      </div>
    </header>
  );
}