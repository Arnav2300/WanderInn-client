import { PiDotsNine } from "react-icons/pi";
import scenery from "../images/scenery.svg";
export default function ImageGallery({ prop }) {
  const { photos } = prop;
  const url = "https://wanderinn-api.onrender.com/uploads/";
  return (
    <div className="h-[400px] relative">
      <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 bg-white gap-2">
        {photos?.length >= 1 ? (
          <img
            src={url + photos[0]}
            alt=""
            className="lg:rounded-l-xl col-span-4 h-[400px] w-[800px] lg:w-full object-cover hover:brightness-75 transition duration-300 cursor-pointer"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          />
        ) : (
          <img
            src={scenery}
            alt=""
            className="lg:rounded-l-xl col-span-4 h-[400px] w-[800px] lg:w-full object-cover grayscale"
          />
        )}
        <div className="lg:flex flex-col gap-2 hidden">
          {photos?.length >= 2 ? (
            <img
              src={url + photos[1]}
              alt=""
              className="h-[196px] object-cover hover:brightness-75 transition duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          ) : (
            <img
              src={scenery}
              alt=""
              className="h-[196px] object-cover grayscale"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          )}
          {photos?.length >= 3 ? (
            <img
              src={url + photos[2]}
              alt=""
              className="h-[196px] object-cover hover:brightness-75 transition duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          ) : (
            <img
              src={scenery}
              alt=""
              className="h-[196px] object-cover grayscale"
            />
          )}
        </div>
        <div className="lg:flex flex-col hidden gap-2">
          {photos?.length >= 4 ? (
            <img
              src={url + photos[3]}
              alt=""
              className="h-[196px] object-cover rounded-tr-xl hover:brightness-75 transition duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          ) : (
            <img
              src={scenery}
              alt=""
              className="h-[196px] object-cover rounded-tr-xl grayscale"
            />
          )}
          {photos?.length >= 5 ? (
            <img
              src={url + photos[4]}
              alt=""
              className="h-[196px] object-cover rounded-br-xl hover:brightness-75 transition duration-300 cursor-pointer"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            />
          ) : (
            <img
              src={scenery}
              alt=""
              className="h-[196px] object-cover rounded-br-xl grayscale"
            />
          )}
        </div>
      </div>
      <div className="absolute bottom-2 right-2 items-center align-middle">
        <button
          className="btn btn-xs bg-white hover:bg-white rounded-full border-none"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          <PiDotsNine className="text-md" />
          Show all photos
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box bg-white">
            <h3 className="font-bold text-lg truncate pb-2">{prop?.title}</h3>
            <div>
              {photos?.length > 0 &&
                photos.map((photo) => (
                  <div>
                    <img src={url + photo} className="pt-2" />
                  </div>
                ))}
            </div>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
