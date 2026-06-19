import ApiClient from "../../../api/interceptors";

export const postChangePassword = async (data) => {
  try {
    const result = await ApiClient.post(`SharePanel/ChangePassword`,data);
    console.log(result)
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
    
  };
  } catch (error) {
    throw error;
  }
};