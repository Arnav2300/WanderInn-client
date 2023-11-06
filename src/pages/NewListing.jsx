import {
  PiArrowLeft,
  PiCloudArrowUp,
  PiStar,
  PiStarFill,
  PiTrash,
} from "react-icons/pi";
import BottomBar from "../components/BottomBar";
import Topbar from "../components/Topbar";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Perks from "../components/Perks";
import axios from "axios";

export default function NewListing() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState("");
  const [description, setDescription] = useState("");
  const [perks, setPerks] = useState([]);
  const [extraInfo, setExtraInfo] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [maxGuests, setMaxGuests] = useState(1);
  const [price, setPrice] = useState(0);
  const [redirect, setRedirect] = useState(false);
  useEffect(() => {
    if (!id) return;
    axios.get("/listing/" + id).then((res) => {
      const { data } = res;
      setTitle(data.title);
      setAddress(data.address);
      setAddedPhotos(data.photos);
      setDescription(data.description);
      setPerks(data.perks);
      setExtraInfo(data.extraInfo);
      setCheckIn(data.checkIn);
      setCheckOut(data.checkOut);
      setMaxGuests(data.maxGuests);
      setPrice(data.price);
    });
  }, [id]);

  async function savePlace(e) {
    e.preventDefault();
    const placeData = {
      title,
      address,
      addedPhotos,
      photoLink,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    };
    if (id) {
      await axios.put("/listing/addmylisting", { id, ...placeData });
      setRedirect(true);
    } else {
      await axios.post("/listing/addmylisting", placeData);
      setRedirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/account/mylistings"} />;
  }

  function inpTitle(fieldName) {
    return <span className="text-xl">{fieldName}</span>;
  }
  function inpLabel(fieldLabel) {
    return (
      <label className="label">
        <span className="label-text">{fieldLabel}</span>
      </label>
    );
  }
  function preInp(t, d) {
    return (
      <>
        {inpTitle(t)}
        {inpLabel(d)}
      </>
    );
  }

  async function addPhotosByLink(e) {
    e.preventDefault();
    const { data: filename } = await axios.post("/upload-by-link", {
      link: photoLink,
    });
    setAddedPhotos((prev) => {
      return [...prev, filename];
    });
    setPhotoLink("");
  }

  function uploadPhoto(e) {
    const files = e.target.files;
    const data = new FormData();
    for (let i = 0; i < files.length; i++) {
      data.append("photos", files[i]);
    }
    axios
      .post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        const { data: filenames } = res;
        setAddedPhotos((prev) => {
          return [...prev, ...filenames];
        });
      });
  }
  function removePhoto(e,fileName) {
    e.preventDefault()
    setAddedPhotos([...addedPhotos.filter((photo) => photo !== fileName)]);
  }
  function setAsMainPhoto(e,fileName) {
    e.preventDefault()
    const withoutFilename = addedPhotos.filter((photo) => photo !== fileName);
    const newAddedPhotos=[fileName,...withoutFilename]
    setAddedPhotos(newAddedPhotos);
  }
  return (
    <>
      <Topbar />
      <div className="bg-white">
        <div className="pt-20 flex justify-center">
          <div className="pt-2">
            <Link
              to={"/account/mylistings"}
              className="relative h-[50px] w-[80px] border rounded-full flex align-middle items-center justify-center group overflow-hidden ease-in-out duration-[1s]"
            >
              <h1 className="absolute text-xl group-hover:translate-x-[180%] transition-all">
                BACK
              </h1>
              <PiArrowLeft className="absolute text-3xl text-primary -translate-x-[350%] group-hover:translate-x-0 transition-all" />
            </Link>
          </div>
        </div>
        <form onSubmit={savePlace}>
          <div className="pt-10 pb-20 flex flex-col justify-center align-middle items-center pr-8 pl-8 gap-6 lg:pr-20 lg:pl-20">
            <div className="w-full">
              {preInp("Title", "Title should be concise and catchy")}
              <input
                type="text"
                className="p-3 bg-white border rounded-full w-full"
                maxLength={50}
                placeholder="example: My lovely Apartment"
                required={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="w-full">
              {preInp("Address", "Address to this place")}
              <input
                type="text"
                className="p-3 bg-white border rounded-full w-full"
                required={true}
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-full">
              {preInp("Photos", "The more, the merrier")}
              <input
                type="url"
                className="p-3 bg-white border rounded-full w-full mb-3"
                placeholder="Link to image"
                value={photoLink}
                onChange={(e) => setPhotoLink(e.target.value)}
              />
              <div className="flex justify-between">
                <label className="btn bg-white border-gray-200 text-2xl hover:bg-primary hover:border-gray-200 hover:text-white w-[150px] rounded-full">
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={uploadPhoto}
                  />
                  <PiCloudArrowUp />
                </label>
                <button
                  className="btn rounded-full bg-primary text-white border-gray-300 hover:bg-primary hover:border-primary"
                  onClick={addPhotosByLink}
                >
                  Add
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pt-3">
                {addedPhotos.length > 0 &&
                  addedPhotos.map((fileName) => (
                    <div className="flex relative">
                      <img
                        src={"https://wanderinn-api.onrender.com/uploads/" + fileName}
                        className="rounded-md border w-full h-48 object-cover"
                        key={fileName}
                      />
                      <button
                        onClick={(e) => removePhoto(e,fileName)}
                        className="absolute bottom-1 right-1 bg-opacity-50 bg-primary p-1 rounded-full hover:bg-opacity-100 transition ease-in-out delay-150 duration-300"
                      >
                        <PiTrash className="text-xl text-white" />
                      </button>
                      <button
                        
                        onClick={(e) => setAsMainPhoto(e,fileName)}
                        className="absolute top-1 right-1 bg-opacity-50 bg-primary p-1 rounded-full hover:bg-opacity-100 transition ease-in-out delay-150 duration-300"
                      >
                        {fileName === addedPhotos[0] && (
                          <PiStarFill className="text-xl text-white" />
                        )}
                        {fileName !== addedPhotos[0] && (
                          <PiStar className="text-xl text-white" />
                        )}
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <div className="w-full">
              {preInp("Description", "Description of the place")}
              <textarea
                className="rounded-md bg-white border p-3 w-full h-[150px]"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="w-full">
              {preInp("Perks", "Select all that apply")}
              <Perks selected={perks} onChange={setPerks} />
            </div>
            <div className="w-full">
              <span className="text-xl">Check-in & out times, Max guests</span>
              <div>
                <label className="label">
                  <span className="label-text">Check-in</span>
                </label>
                <input
                  type="time"
                  className="p-3 bg-white border rounded-full w-full"
                  required={true}
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Check-out</span>
                </label>
                <input
                  type="time"
                  className="p-3 bg-white border rounded-full w-full"
                  required={true}
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text">Max Guests</span>
                </label>
                <input
                  type="number"
                  className="p-3 bg-white border rounded-full w-full"
                  placeholder="Enter a number"
                  min={1}
                  required={true}
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              {preInp("Extra Info", "House rules, reminders, etc.")}
              <textarea
                className="rounded-md bg-white border p-3 w-full h-[150px]"
                value={extraInfo}
                onChange={(e) => setExtraInfo(e.target.value)}
              />
            </div>
            <div className="w-full">
              {preInp("Price", "Set a price per night (INR)")}
              <input
                type="number"
                className="rounded-full bg-white border p-3 w-full"
                min={0}
                required={true}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="">
              <button
                className="btn bg-primary border-primary text-white focus:bg-primary hover:bg-primary hover:border-primary rounded-full items-center align-middle text-xl"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <BottomBar />
    </>
  );
}
