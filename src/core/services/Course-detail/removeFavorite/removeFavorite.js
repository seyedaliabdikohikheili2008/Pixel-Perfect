import ApiClient from "../../../api/interceptors";

export const removeFavorite = async () => {
  try {
    const result = await ApiClient.delete(`/Course/DeleteCourseFavorite`);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.error("Error removing favorite:", error);
    throw error;
  }
};