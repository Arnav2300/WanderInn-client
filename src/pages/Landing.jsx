import vid from "../images/vid2.mp4";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Link to="/home">
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <video
            className="min-w-full min-h-full absolute object-cover"
            src={vid}
            type="video/mp4"
            autoPlay
            muted
          ></video>
        </div>
        <span
          className=" text-white flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
          
        >
          <div className="font-Great text-8xl md:text-9xl font-bold text-gray-100">
            Wander
          </div>
          <div className="font-Raleway text-6xl md:text-7xl text-white font-bold -mt-10 md:-mt-14 drop-shadow-[3px_-4px_1px_rgba(0,0,0,0.5)] ">
            Inn
          </div>
        </span>
        <div className="font-Raleway text-xl md:text-4xl absolute flex top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 py-14 text-gray-300">
          WHERE YOUR JOURNEY BEGINS
        </div>
      </section>
    </Link>
  );
};

export default Landing;
