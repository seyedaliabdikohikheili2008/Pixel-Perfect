import ApiClient from "../../../api/interceptors";

export const deleteLike = async (newsLikeId) => {
  if (!newsLikeId || newsLikeId === "null" || newsLikeId === "undefined") {
    throw new Error("شناسه لایک معتبر نیست");
  }

  try {
    const result = await ApiClient.delete("News/DeleteLikeNews", {
      data: {
        deleteEntityId: newsLikeId
      }
    });

    return result;
  } catch (error) {
    console.error("Error removing news like:", error);
    throw error;
  }
};
