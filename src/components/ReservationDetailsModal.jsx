export default function ReservationDetailsModal({ prop }) {
  console.log(prop);
  return (
    <div>
      <h3 className="font-bold text-lg truncate">{prop?.place.title}</h3>
      <p>Address: {prop?.place.address}</p>
      <p>
        {new Date(prop?.checkIn).getDate() +
          "/" +
          (new Date(prop?.checkIn).getMonth() + 1) +
          "/" +
          new Date(prop?.checkIn).getFullYear()}{" "}
        &rarr;{" "}
        {new Date(prop?.checkOut).getDate() +
          "/" +
          (new Date(prop?.checkOut).getMonth() + 1) +
          "/" +
          new Date(prop?.checkIn).getFullYear()}
      </p>
      <p className="">Booked under name: {prop?.name}</p>
      <p>Phone: {prop?.phone}</p>
      <p className="">
        Booked for:{" "}
        {(new Date(prop?.checkOut).getTime() - new Date(prop?.checkIn)) /
          (1000 * 60 * 60 * 24)}{" "}
        nights
      </p>
      <p>Total price: ₹{prop?.price}</p>
      <p>Guests: {prop?.guests}</p>
      <p>
        Perks:{" "}
      {prop?.place.perks.length>0 && prop.place.perks.map((perk)=>(
        <>{perk}, </> 
      ))}
      </p>
    </div>
  );
}
