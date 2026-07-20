import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Login from "./features/auth/Login";
import Register from "./features/auth/Register";
import PassengersList from "./features/passengers/PassengersList";
import Result from "./features/flights/Result";
import WalletPage from "./features/wallet/Wallet";
import AddPassenger from "./features/passengers/AddPassenger";
import BookingHistory from "./features/booking/BookingHistory";
import Search from "./features/flights/Search";
import BookingForm from "./features/booking/BookingForm";
import Payment from "./features/payment/Payment";
import BookingSummary from "./features/booking/BookingSummary";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/searchflights" element={<Result />} />
        <Route path="/passengers" element={<PassengersList />} />
        <Route path="/addpaseenger" element={<AddPassenger />} />
        <Route path="/search" element={<Search />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/wallet" element = {<WalletPage/>}/>
        <Route path="/bookings" element={<BookingHistory />} />
        <Route path="/bookingform" element={<BookingForm/>}/>
        <Route path="/bookingsummary" element={<BookingSummary/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;