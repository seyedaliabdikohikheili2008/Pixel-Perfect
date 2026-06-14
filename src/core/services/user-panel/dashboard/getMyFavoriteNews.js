import ApiClient from "../../../api/interceptors";

export const getMyFavoriteNews = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyFavoriteNews`);
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