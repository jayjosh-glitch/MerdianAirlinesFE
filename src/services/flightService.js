import api from "../api/api";

export const GetSearchFlights = async (source, destination, departure,isroundtrip, isonewaytrip,  flightclass) => {
  const response = await api.post("Flight/search", {
    source,
    destination,
    departure,
    isroundtrip,
    isonewaytrip,
    flightclass,
});
console.log(response.data)
  return response.data;
}