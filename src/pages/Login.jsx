import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginSuccess } from "../redux/authSlice";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@gmail.com" &&
      password === "admin123"
    ) {
      dispatch(
        loginSuccess({
          token: "sample-token",
          user: {
            name: "Admin User",
            email,
          },
        })
      );

      navigate("/");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="w-96 rounded-xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-6 text-center text-3xl font-bold">
          Admin Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="mb-4 w-full rounded border p-3"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="mb-4 w-full rounded border p-3"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="w-full rounded bg-blue-600 p-3 text-white"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-500">
          Demo Login:
          <br />
          admin@gmail.com
          <br />
          admin123
        </p>
      </form>
    </div>
  );
}