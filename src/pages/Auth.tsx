import { ChangeEvent, useState } from "react";
import { supabase } from '../services/supabaseClient';

export default function Auth(): any {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert(error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8 bg-neutral-200 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Supabase + React</h1>
        <p className="text-gray-600 mb-4">Sign in via magic link with your email below</p>
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
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 rounded bg-blue-500 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
              }`}
              disabled={loading}
            >
              {loading ? <span>Loading</span> : <span>Send magic link</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
