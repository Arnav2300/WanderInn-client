import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { UserContextProvider } from "./context/UserContext";
import Account from "./pages/Account";
import Profile from "./pages/Profile";
import MyListings from "./pages/MyListings";
import NewListing from "./pages/NewListing";
import SingleListing from "./pages/SingleListing";
import MyBookings from "./pages/MyBookings";

axios.defaults.baseURL = "https://wanderinn-api.onrender.com";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/account">
          <Route index element={<Account />} />
          <Route path="profile" element={<Profile />} />
          <Route path="mylistings" element={<MyListings />} />
          <Route path="mylistings/newlisting" element={<NewListing />} />
          <Route path="mylistings/updatelisting/:id" element={<NewListing />} />
          <Route path="bookings/" element={<MyBookings />} />
        </Route>
        <Route path="/listing/:id" element={<SingleListing />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
