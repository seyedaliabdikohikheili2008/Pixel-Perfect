import ApiClient from "../../../api/interceptors";

export const removeFavorite = async (userFavoriteId) => {
  try {
    const result = await ApiClient.delete(`News/DeleteFavoriteNews`, {
      params: {
        deleteEntityId: userFavoriteId
      }
    });

    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};