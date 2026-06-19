import ApiClient from "../../../api/interceptors";

export const removeFavorite = async (deleteEntityId) => {
  try {
    const result = await ApiClient.delete(`News/DeleteFavoriteNews`, {
      params: { deleteEntityId: deleteEntityId }
    });
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
  console.log("Full error:", error);
  console.log("Response:", error.response);
  console.log("Response data:", error.response?.data);
  throw error;
}
};
