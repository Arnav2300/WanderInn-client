import { PiArrowLeft } from "react-icons/pi";
import BottomBar from "../components/BottomBar";
import Topbar from "../components/Topbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import scenery from "../images/scenery.svg";
import ReservationDetailsModal from "../components/ReservationDetailsModal";
export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    axios.get("/reserve/").then((res) => {
      setBookings(res.data);
    });
  }, []);
  console.log(bookings);
  return (
    <div className="min-h-screen bg-white">
      <Topbar />
      <div className="bg-white pt-24">
        <div className="flex items-center align-middle justify-center">
          <Link
            to={"/account"}
            className="relative h-[50px] w-[80px] border rounded-full flex align-middle items-center justify-center group overflow-hidden ease-in-out duration-[1s]"
          >
            <h1 className="absolute text-xl group-hover:translate-x-[180%] transition-all">
              BACK
            </h1>
            <PiArrowLeft className="absolute text-3xl text-primary -translate-x-[350%] group-hover:translate-x-0 transition-all" />
          </Link>
        </div>
      </div>
      <div className="bg-white flex flex-col align-middle items-center gap-4 pt-4 cursor-pointer">
        {bookings?.length > 0 &&
          bookings.map((booking) => (
            <>
              <div
                onClick={() =>
                  document.getElementById("my_modal_2").showModal()
                }
                className="card card-side shadow-lg bg-white w-5/6 hover:shadow-2xl hover:text-gray-500 transition duration-300 delay-150 ease-in-out truncate"
              >
                <figure>
                  <img
                    src={
                      "http://localhost:5000/uploads/" +
                        booking?.place.photos[0] || scenery
                    }
                    alt=""
                    className="object-cover w-64"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title truncate">
                    {booking?.place.title}
                  </h2>
                  <p>
                    {new Date(booking?.checkIn).getDate() +
                      "/" +
                      (new Date(booking?.checkIn).getMonth() + 1) +
                      "/" +
                      new Date(booking?.checkIn).getFullYear()}{" "}
                    &rarr;{" "}
                    {new Date(booking?.checkOut).getDate() +
                      "/" +
                      (new Date(booking?.checkOut).getMonth() + 1) +
                      "/" +
                      new Date(booking?.checkIn).getFullYear()}
                  </p>
                  <p>{booking?.place.address}</p>
                  <div className="flex w-0">
                    <p className="border-r border-primary pr-2">
                      Stay:{" "}
                      {(new Date(booking?.checkOut).getTime() -
                        new Date(booking?.checkIn)) /
                        (1000 * 60 * 60 * 24)}{" "}
                      nights
                    </p>
                    <p className="font-semibold border-primary border-l pl-2">
                      Total price: ₹{booking?.price}
                    </p>
                  </div>
                </div>
              </div>
              <dialog id="my_modal_2" className="modal">
                <div className="modal-box bg-white">
                <ReservationDetailsModal prop={booking} />
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            </>
          ))}
      </div>
      <BottomBar />
    </div>
  );
}
