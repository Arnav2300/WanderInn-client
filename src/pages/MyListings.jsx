import { Link } from "react-router-dom";
import BottomBar from "../components/BottomBar";
import Topbar from "../components/Topbar";
import { PiArrowLeft, PiPlus } from "react-icons/pi";
import MyListingsList from "../components/MyListingsList";
export default function MyListings() {
  
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <div className="flex-col pt-20 pb-20 bg-white align-middle items-center w-full h-screen">
        <div className="flex items-center align-middle gap-4 flex-wrap justify-center pt-4">
          <Link
            to={"/account"}
            className="relative h-[50px] w-[80px] border rounded-full flex align-middle items-center justify-center group overflow-hidden ease-in-out duration-[1s]"
          >
            <h1 className="absolute text-xl group-hover:translate-x-[180%] transition-all">
              BACK
            </h1>
            <PiArrowLeft className="absolute text-3xl text-primary -translate-x-[350%] group-hover:translate-x-0 transition-all" />
          </Link>
          <Link
            to={"/account/mylistings/newlisting"}
            className="btn bg-primary border-primary text-white focus:bg-primary hover:bg-primary hover:border-primary rounded-full flex items-center align-middle text-xl"
          >
            <PiPlus />
            Add another property
          </Link>
        </div>
        <div className="flex align-middle justify-center items-center pt-8 pr-8 pl-8 pb-20 bg-white">
          <MyListingsList />
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
