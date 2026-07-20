import api from "../api/api";

export const Getwallet = async () => {
  const response = await api.get("Wallet/getmywallet");
  return response.data;
}
