import { useContext } from "react";
import { PiHeart, PiHouseSimple, PiSignIn, PiUserCircle } from "react-icons/pi";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function BottomBar() {
  const {user}=useContext(UserContext);
    return (
    <header className="z-20 lg:hidden p-4 w-full bottom-0 fixed flex justify-center gap-20 text-xl bg-white border-t h-15">
      <Link to={"/"}>
        <PiHeart />
      </Link>
      <Link to={"/home"}>
        <PiHouseSimple />
      </Link>
      {!user && (
        <>
          <Link to={"/login"}>
            <PiSignIn />
          </Link>
        </>
      )}
      {!!user && (
        <>
          <Link to={"/account"}>
            <PiUserCircle />
          </Link>
        </>
      )}
    </header>
  );
}
