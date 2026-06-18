import ApiClient from "../../../api/interceptors";

export const getProfileInfo = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetProfileInfo`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};