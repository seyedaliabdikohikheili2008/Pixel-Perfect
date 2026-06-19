import ApiClient from "../../../api/interceptors";

export const addFavorite = async (courseId) => {
  try {
    const result = await ApiClient.post(`Course/AddCourseFavorite`, {
      courseId: courseId
    });
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", courseId, error); 
    throw error;
  }
};