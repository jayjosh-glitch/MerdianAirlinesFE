import api from "../api/api";

export const GetBookings = async () => {
  const response = await api.get("Booking/getbookings");
  return response.data;
}

export const CreateBookingRequest = async(bookingdata) => {
  const response = await api.post("Booking/initialbooking", bookingdata);
  return response.data;
}

export const Confirmbooking = async(confirmadata) => {
  const response = await api.post("Booking/confirmbooking", confirmadata);
  return response.data;
}