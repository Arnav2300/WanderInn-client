import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";
export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const {user}=useContext(UserContext)
  if(user){
    return <Navigate to={"/account"} />
  }
  const signupUser = async (e) => {
    e.preventDefault();
    if(name.length==0||email.length==0||pass.length==0){
      return;
    }
    try{
      await axios.post("/auth/signup", {
        name,
        email,
        pass,
      });
    } catch(error){
      return;
    }
  };

  return (
    <div className="relative h-screen flex bg-white text-center">
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
          onSubmit={signupUser}
        >
          <input
            type="text"
            placeholder="name"
            className="p-3 bg-white border rounded-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
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
            Sign Up
          </button>
        </form>
        <div className="text-center">
          <span>
            Already signed up?{" "}
            <Link to={"/login"} className="text-primary">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
