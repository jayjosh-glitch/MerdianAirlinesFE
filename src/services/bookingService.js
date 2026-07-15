import api from "../api/api";

export const GetBookings = async () => {
  const response = await api.get("Booking/getbookings");
  return response.data;
}