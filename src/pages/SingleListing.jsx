import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Topbar from "../components/Topbar";
import BottomBar from "../components/BottomBar";
import { PiHeart } from "react-icons/pi";
import ImageGallery from "../components/ImageGallery";
import BookingWidget from "../components/BookingWidget";

export default function SingleListing() {
  const { id } = useParams();
  //console.log(param.id)
  const [place, setPlace] = useState("");
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get("/listing/" + id).then((res) => {
      const { data } = res;
      setPlace(data);
    });
  }, [id]);
  //console.log(place);
  //const title=place.title;
  return (
    <div>
      <Topbar />
      <div className="h-full bg-white pt-24 pb-20 flex flex-col pr-10 pl-10 items-center w-full">
        <div className="text-4xl w-full text-center md:text-left">
          {place?.title}
        </div>
        <div className="flex justify-between items-center align-middle w-full pt-6">
          <div className="text-2xl underline">
            <a
              href={"https://maps.google.com/?q=" + place.address}
              target="_blank"
              rel="noreferrer"
            >
              {place?.address}
            </a>
          </div>
          <div className="text-2xl">
            <span className="flex items-center align-middle gap-2">
              <PiHeart className="text-primary" /> Like
            </span>
          </div>
        </div>
        <div className="bg-white">
          <div className="h-full w-full pt-6 pb-6">
            <ImageGallery prop={place} />
          </div>
        </div>
        <div className="bg-white w-full md:grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="hidden md:block text-justify text-xl">
            <div className="text-2xl font-bold">Description</div>{" "}
            {place?.description}
          </div>
          <BookingWidget prop={place} />
          <div className="md:hidden text-justify text-xl pt-4">
            <div className="text-2xl font-bold">Description</div>{" "}
            {place?.description}
          </div>
        </div>
        <div></div>
        <div className="w-full text-xl pt-6">
          <h1 className="text-2xl font-bold">Extra Information</h1>
          <div className="flex flex-col pt-1 pb-1 gap-2">
            <div className="badge badge-lg badge-outline">
              Check-In time: {place?.checkIn}
            </div>
            <div className="badge badge-lg badge-outline">
              Check-Out time:{place?.checkOut}
            </div>
            <div className="badge badge-lg badge-outline">
              Maximum guests: {place?.maxGuests}
            </div>
          </div>
          <div>{place?.extraInfo}</div>
        </div>
      </div>

      <BottomBar />
    </div>
  );
}
