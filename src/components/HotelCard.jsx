import scenery from "../images/scenery.svg";
const HotelCard = ({ data }) => {
  const title = data.title;
  const add = data.address;
  let imgSrc = data.photos[0];
  imgSrc = imgSrc ? "http://localhost:5000/uploads/" + imgSrc : scenery;
  const price = data.price;
  //const id = data._id;
  return (
    <div className="card w-56 bg-white shadow-lg card-compact hover:text-gray-500 hover:shadow-2xl transition duration-300 delay-150 ease-in-out">
      <figure>
        <img src={imgSrc} className="h-[200px] w-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title truncate">{title}</h2>
        <p className="truncate">{add}</p>
        <p className="gap-x-2 font-semibold">₹{price} per night</p>
      </div>
    </div>
  );
};

export default HotelCard;
