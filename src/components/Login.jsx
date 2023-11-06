import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className="modal-box bg-white">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Welcome to WanderInn!</h3>
        <form className="py-4 flex flex-col gap-6">
          <input
            type="email"
            placeholder="your@email.com"
            className="p-3 bg-white border rounded-full"
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 bg-white border rounded-full"
          />
          <button
            className="btn rounded-full bg-primary text-white border-gray-300 hover:bg-primary hover"
            type="submit"
          >
            Log In
          </button>
        </form>
        <div className="text-center">
          <span>
            Not signed up yet?{" "}
            <Link to={"/signup"} className="text-primary">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}
