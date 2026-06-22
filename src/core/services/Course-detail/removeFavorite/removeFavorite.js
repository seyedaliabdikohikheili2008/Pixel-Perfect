import ApiClient from "../../../api/interceptors";

export const removeFavorite = async (userFavoriteId) => {

  try {
    const formData = new FormData();
    formData.append("CourseFavoriteId", userFavoriteId);

    const result = await ApiClient.delete(`/Course/DeleteCourseFavorite`, {
      data: formData
    });

    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};
