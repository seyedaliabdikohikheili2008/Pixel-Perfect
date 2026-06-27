import ApiClient from "../../../api/interceptors";

export const postNewsCommentLike = async (CommentId) => {
  try {
    const result = await ApiClient.post(`News/CommentLike/${CommentId}`);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", CommentId, error); 
    throw error;
  }
};