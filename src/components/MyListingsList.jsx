import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import HotelCard from "./HotelCard";
export default function MyListingsList() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios.get("/listing/mylistings").then(({ data }) => {
      setListings(data);
    });
  }, []);

  return (
    <div className="bg-white grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {listings.length > 0 ? (
        listings.map((listing) => (
          <Link
            to={"/account/mylistings/updatelisting/" + listing._id}
            className=""
          >
            <HotelCard data={listing} />
          </Link>
        ))
      ) : (
        <div className="w-full">
          <p className="text-2xl pt-8 pb-20">No Listings</p>
        </div>
      )}
    </div>
  );
}
