import ApiClient from "../../../../api/interceptors";

export const AddComment = async (commentData) => {
  try {
    const result = await ApiClient.post("/News/CreateNewsComment", commentData);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", commentData, error); 
    throw error;
  }
};