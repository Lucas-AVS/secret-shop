// import { Navigate, Outlet } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { supabase } from "./supabaseClient";

// export default function ProtectedRoutes() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function getUser() {
//       const { data } = await supabase.auth.getUser();
//       setUser(data.user);
//       setLoading(false);
//     }

//     getUser();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return !user ? (
//     <>
//       <Navigate to="/login" />
//       {console.log(user, "oi billau")}
//     </>
//   ) : (
//     <Outlet />
//   );
// }

import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import UseAuth from "./UseAuth";
import { AuthContext } from "../context/AuthContext";

export default function ProtectedRoutes() {
  const { loading, user } = useContext(AuthContext);

  if (loading) {
    return <UseAuth></UseAuth>;
  }

  return user ? <Outlet /> : <Navigate to="/login" />;
}
