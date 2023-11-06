import { useContext } from "react";
import Topbar from "../components/Topbar";
import { UserContext } from "../context/UserContext";
import BottomBar from "../components/BottomBar";
import { Link, Navigate, Outlet, useParams } from "react-router-dom";

export default function Account() {
  const { user, ready } = useContext(UserContext);
  
  if (!ready) {
    return (
      <div className="text-center h-screen relative bg-white">
        <span className="loading loading-ring loading-lg text-primary absolute top-1/2 left-1/2"></span>
      </div>
    );
  }
  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  return (
    <>
      <Topbar />
      <div className="pt-20 pb-20 bg-white h-screen">
        <div className="text-center text-3xl pt-2">
          Welcome <span className="text-primary">{user?.name}!</span>
        </div>
        <div className="p-8 pb-20 flex gap-4 flex-wrap bg-white justify-center lg:justify-between items-center">
          <Link to={"/account/bookings"} className="accLink">
            <span className="text-4xl p-4 z-10">Bookings</span>
          </Link>
          <Link to={"/account/mylistings"} className="accLink">
            <h1 className="text-4xl p-4 z-10">My Listings</h1>
          </Link>
          <Link to={"/account/listings"} className="accLink">
            <h1 className="text-4xl p-4 z-10">List Property</h1>
          </Link>
          <Link to={"/account/bookmarks"} className="accLink">
            <h1 className="text-4xl p-4 z-10">Bookmarks</h1>
          </Link>
          <Link to={"/account/profile"} className="accLink">
            <h1 className="text-4xl p-4 z-10">Profile</h1>
          </Link>
        </div>
      </div>
      <BottomBar />
    </>
  );
}
