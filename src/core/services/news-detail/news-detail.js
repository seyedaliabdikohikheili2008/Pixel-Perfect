import ApiClient from "../../api/interceptors";

export const getNewsDetail = async (Id) => {
  try {
    const result = await ApiClient.get(`/News/${Id}`);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", Id, error); 
    throw error;
  }
};