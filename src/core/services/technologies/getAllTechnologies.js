import ApiClient from "../../api/interceptors";

export const getAllTechnologies = async () => {
  try {
    const result = await ApiClient.get(`Home/GetTechnologies`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};