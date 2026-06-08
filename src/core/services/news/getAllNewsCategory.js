import ApiClient from "../../api/interceptors";

export const getAllNewsCategory = async () => {
  try {
    const result = await ApiClient.get(`News/GetListNewsCategory`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    console.log(error);
    return [];
  }
};