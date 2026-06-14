import ApiClient from "../../../api/interceptors.jsx";

export const getComments = async (NewsId) => {
  try {
    const result = await ApiClient.get(`News/GetNewsComments`,{params:{NewsId}});
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", NewsId, error); 
    throw error;
  }
};