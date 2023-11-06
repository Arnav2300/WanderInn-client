import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
export default function BookingWidget(place) {
  const optionsMaxGuests = Array.from(
    { length: place.prop.maxGuests },
    (_, index) => <option>{index + 1}</option>
  );
  const { user } = useContext(UserContext);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [redirect, setRedirect] = useState("");
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);
  const stay =
    (place.prop?.price * (checkOutDate.getTime() - checkInDate.getTime())) /
    (1000 * 3600 * 24);
  async function reservePlace() {
    if (!user) {
      return <Navigate to={"/login"} />;
    }
    const data = {
      checkIn,
      checkOut,
      guests,
      name,
      phone,
      place: place.prop._id,
      price: stay,
    };
    const res = await axios.post("/reserve/", data);
    console.log(res.data._id);
    setRedirect(`/account/bookings/${res.data._id}`);
  }
  if (redirect) return <Navigate to={redirect} />;
  return (
    <>
      <div className="flex flex-col border gap-4 p-4 rounded-2xl md:h-[450px]">
        <span className="text-3xl font-semibold">
          ₹{place.prop?.price} per night
        </span>
        <div className="border rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b text-lg">
            <div className="border-b md:border-b-0 md:border-r p-4 overflow-hidden">
              <label className="label text-sm">Check-in</label>
              <input
                type="date"
                className="bg-white border-none focus:outline-none w-full"
                placeholder=""
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>
            <div className="p-4 overflow-hidden">
              <label className="label text-sm">Check-out</label>
              <input
                type="date"
                className="bg-white border-none focus:outline-none w-full"
                placeholder=""
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="">
            <label className="p-4 label text-sm">Number of Guests</label>
            <select
              className="select w-full bg-white focus:outline-none text-lg select-md"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
              required
            >
              <option disabled selected>
                Number of Guests
              </option>
              {optionsMaxGuests}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t text-lg">
            <div className="border-b md:border-b-0 md:border-r p-4 overflow-hidden">
              <label className="label text-sm">Full Name</label>
              <input
                type="text"
                className="bg-white border-none focus:outline-none w-full"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="p-4 overflow-hidden">
              <label className="label text-sm">Phone Number</label>
              <input
                type="tel"
                className="bg-white border-none focus:outline-none w-full"
                placeholder="0123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <button
          className="btn bg-primary text-white hover:bg-primary border-none"
          onClick={reservePlace}
        >
          Reserve
          {stay > 0 && <> for ₹{stay}</>}
        </button>
      </div>
    </>
  );
}
