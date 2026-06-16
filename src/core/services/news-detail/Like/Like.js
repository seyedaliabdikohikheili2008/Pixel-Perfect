import ApiClient from "../../../api/interceptors";

export const getNewsLike = async (NewsId) => {
  try {
    const result = await ApiClient.post(`News/NewsLike/${NewsId}`);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", NewsId, error); 
    throw error;
  }
};