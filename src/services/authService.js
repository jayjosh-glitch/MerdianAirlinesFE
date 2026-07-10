import api from "../api/api";

export const Loginuser = async (formdata) => {
  const response = await api.post("Auth/login", formdata);
  return response.data;
}