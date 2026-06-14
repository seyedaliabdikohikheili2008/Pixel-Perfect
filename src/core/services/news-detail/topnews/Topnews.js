import ApiClient from "../../../api/interceptors";

export const getTopNews= async (Id) => {
  try {
    const result = await ApiClient.get(`/News/GetNewsCategory/${Id}`);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", Id, error); 
    throw error;
  }
};