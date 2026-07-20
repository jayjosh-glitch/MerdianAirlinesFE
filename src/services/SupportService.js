import api from "../api/api";

export const CreateRequest = async (formdata) => {
  const response = await api.post("SupportRequest", formdata);
  return response.data;
}