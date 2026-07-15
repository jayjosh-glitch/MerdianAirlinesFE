import api from "../api/api";

export const GetPassengersbyuserid = async () => {
  const response = await api.get("Passenger/my-passengers");
  return response.data;
}

export const GetPassengersbypassid = async (passid) => {
  const response = await api.get("Passenger", passid);
  return response.data;
}