import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loginMsg, setLoginMsg] = useState(false);
  const [alertVis, setAlertVis] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const {user,setUser}=useContext(UserContext);
  const loginUser = async (e) => {
    e.preventDefault();
    if(email.length==0||pass.length==0){
      setAlertVis(true);
      setLoginMsg(false);
      return;
    }
    try {
      const {data} = await axios.post("/auth/login", { email, pass });
      setUser(data);
      setLoginMsg(true);
      setAlertVis(true);
      setRedirect(true);
    } catch (error) {
      setLoginMsg(false);
      setAlertVis(true);
    }
    setTimeout(() => {
      setAlertVis(false);
    }, 5000);
  };
  if (redirect) {
    return <Navigate to={"/home"} />;
  }
  if(user){
    return <Navigate to={"/account"} />;
  }
  return (
    <div className="relative h-screen flex bg-white text-center justify-center">
      {alertVis && loginMsg && (
        <div className="alert alert-success absolute w-1/2 lg:w-1/4 top-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Login Successful!</span>
        </div>
      )}
      {alertVis === true && loginMsg === false && (
        <div className="alert alert-error absolute w-1/2 lg:w-1/4 top-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Login failed!</span>
        </div>
      )}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="font-bold text-3xl">
          Welcome to{" "}
          <Link to={"/home"} className="text-primary">
            WanderInn
          </Link>
          !
        </h3>
        <form
          className="py-4 flex flex-col gap-6 bg-white"
          onSubmit={loginUser}
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="p-3 bg-white border rounded-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
          <input
            type="password"
            placeholder="password"
            className="p-3 bg-white border rounded-full"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required={true}
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
    </div>
  );
}
