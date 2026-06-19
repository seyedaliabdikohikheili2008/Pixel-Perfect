import ApiClient from "../../../api/interceptors";

export const deleteCommentLike = async (CourseCommandId) => {
  try {
    const result = await ApiClient.delete(`Course/DeleteCourseCommentLike`, null, {
      params: { CourseCommandId }
    });
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", CourseCommandId, error); 
    throw error;
  }
};