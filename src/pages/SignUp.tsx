import { ChangeEvent, useState } from "react";
import { supabase } from "../services/supabaseClient";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const handleSignUp = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert("User Created!");
      window.location.href = "/"
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-1/2 p-8 bg-neutral-200 border rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Create new user</h1>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <label htmlFor="">Your email:</label>
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400 mb-5"
              type="email"
              placeholder="antimage@heroes.gg"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Your password:</label>
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400"
              type="password"
              placeholder="iHateMagic100"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label htmlFor="">Confirm password:</label>
            <input
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-400 mb-5"
              type="password"
              placeholder="iHateMagic100"
              value={confirmPassword}
              required={true}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setPasswordsMatch(password === e.target.value);
              }}
            />
            {!passwordsMatch && (
              <p className="text-red-500">Passwords do not match.</p>
            )}
          </div>
          <div>
            <button
              className={`w-full py-2 px-4 rounded bg-red-800 text-white hover:bg-red-600 cursor-pointer`}
              disabled={!passwordsMatch}
            >
              <span>Sign Up</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
