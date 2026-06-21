import ApiClient from "../../../../api/interceptors";

export const getMyNewsComments = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyNewsComments`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};