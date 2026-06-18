import ApiClient from "../../api/interceptors";

export const getAllNews = async (params) => {
  try {
    const result = await ApiClient.get(`News`,{params});
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};