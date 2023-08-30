import { ChangeEvent, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";

export default function LogIn() {
  const navigate = useNavigate();

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("Login success");
      window.location.href = "/bag";
    }
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8 bg-neutral-200 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 rounded bg-red-800 text-white hover:bg-red-600`}
            >
              <span>Login!</span>
            </button>
          </div>
        </form>
        <h1 className="text-2xl font-bold mt-4 mb-4">Don't have an account?</h1>
        <a
          className={`py-2 px-4 rounded bg-red-800 text-white hover:bg-red-600 cursor-pointer`}
          onClick={() => {
            navigate("/signup");
          }}
         >
          Signup
        </a>
      </div>
    </div>
  );
}
