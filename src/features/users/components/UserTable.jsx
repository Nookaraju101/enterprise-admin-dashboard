import { Pencil, Trash2 } from "lucide-react";

export default function UserTable({ users }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-4 text-left">ID</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Role</th>
            <th className="p-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t hover:bg-gray-50"
            >
              <td className="p-4">{user.id}</td>

              <td className="p-4">{user.name}</td>

              <td className="p-4">{user.email}</td>

              <td className="p-4">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {user.role}
                </span>
              </td>

              <td className="p-4">
                <div className="flex justify-center gap-4">
                  <button>
                    <Pencil
                      size={18}
                      className="text-green-600"
                    />
                  </button>

                  <button>
                    <Trash2
                      size={18}
                      className="text-red-600"
                    />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}