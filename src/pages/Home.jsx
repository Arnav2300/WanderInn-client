import { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import HotelCard from "../components/HotelCard";
import Topbar from "../components/Topbar";
import axios from "axios";
import { Link } from "react-router-dom";
import { PiHeart } from "react-icons/pi";
export default function Home() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios.get("/all").then(({ data }) => {
      setListings(data);
    });
  }, []);
  return (
    <>
      <Topbar />
      <div className="flex align-middle justify-center items-center pt-28 pr-8 pl-8 pb-20 bg-white ">
        <div className="bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {listings.length > 0 ? (
            listings.map((listing) => (
              <div className="flex relative">
                <Link to={"/listing/" + listing._id} >
                  <HotelCard data={listing} />
                </Link>
                <button
                  className="absolute top-2 right-2 text-xl text-white bg-primary rounded-full bg-opacity-50 p-1 hover:bg-opacity-100 transition ease-in-out delay-150 duration-300"
                  onClick={() => {
                    console.log("hello");
                  }}
                >
                  <PiHeart />
                </button>
              </div>
            ))
          ) : (
            <div className="w-full">
              <p className="text-2xl pt-8 pb-20">No Listings</p>
            </div>
          )}
        </div>
      </div>

      <BottomBar />
    </>
  );
}
