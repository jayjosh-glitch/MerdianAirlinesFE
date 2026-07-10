import api from "../api/api";

export const RegisterUser = async (formdata) => {
  const response = await api.post("Auth/register", formdata);
  return response.data;
}