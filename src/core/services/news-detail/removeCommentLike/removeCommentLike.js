import ApiClient from "../../../api/interceptors";

export const deleteNewsCommentLike = async (deleteEntityId) => {
  try {
    const result = await ApiClient.delete(`News/DeleteCommentLikeNews`,{params: { deleteEntityId: deleteEntityId }});
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.error("Error deleting comment like for ID:", deleteEntityId, error);
    throw error;
  }
};