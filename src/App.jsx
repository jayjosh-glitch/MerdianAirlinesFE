 import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import FlightsPage from "./features/flights/Flights";
import PassengersPage from "./features/passengers/Passengers";
import WalletPage from "./features/wallet/Wallet";
import BookingsPage from "./features/booking/Bookings";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/register" element = {<Register />} />
        <Route path = "/searchflights" element = {<FlightsPage />} />
        <Route path="/passengers" element = {<PassengersPage/>} />
        <Route path="/wallet" element = {<WalletPage/>}/>
        <Route path="/bookings" element = {<BookingsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;