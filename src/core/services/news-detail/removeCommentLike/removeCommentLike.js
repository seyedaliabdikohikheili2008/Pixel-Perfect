import ApiClient from "../../../api/interceptors";

export const deleteNewsCommentLike = async (NewsCommandId) => {
  if (!NewsCommandId) {
    throw new Error("آیدی کامنت نامعتبر است");
  }

  try {
    const result = await ApiClient.delete(`Course/DeleteCommentLikeNews`, {
      params: { NewsCommandId }
    });
    return { data: result.data, status: result.status, headers: result.headers };

  } catch (error) {
    console.error("Error removing comment like:", error);
    throw error;
  }
};
