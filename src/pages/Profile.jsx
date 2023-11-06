import { useContext, useState } from "react";
import BottomBar from "../components/BottomBar";
import Topbar from "../components/Topbar";
import { UserContext } from "../context/UserContext";
import { PiArrowLeft } from "react-icons/pi";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

export default function Profile() {
  const { user, ready, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  const logout = async () => {
    await axios.post("/auth/logout");
    setRedirect("/home");
    setUser(null);
  };
  if (!ready) {
    return (
      <div className="text-center h-screen relative bg-white">
        <span className="loading loading-ring loading-lg text-primary absolute top-1/2 left-1/2"></span>
      </div>
    );
  }
  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (
    <>
      <Topbar />
      <div className="flex items-center align-middle h-screen bg-white relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 flex-col items-center align-middle">
          <span className="text-3xl">
            {" "}
            Logged in as {user?.name}
          </span>
          <span className="text-2xl">
            ({user?.email})
          </span>
          <button
            onClick={logout}
            className="btn rounded-full bg-primary text-white border-primary hover:border-primary hover:bg-primary w-1/2 text-xl"
          >
            Logout
          </button>
          <Link
            to={"/account"}
            className="relative h-[50px] w-1/4 border rounded-full flex align-middle items-center justify-center group overflow-hidden ease-in-out duration-[1s]"
          >
            <h1 className="absolute text-xl translate-x-[] group-hover:translate-x-[180%] transition-all">
              BACK
            </h1>
            <PiArrowLeft className="absolute text-3xl text-primary -translate-x-[350%] group-hover:translate-x-0 transition-all" />
          </Link>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
