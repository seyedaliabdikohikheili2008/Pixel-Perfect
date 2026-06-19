import ApiClient from "../../../api/interceptors";

export const postCommentDisLike = async (CourseCommandId) => {
  try {
    const result = await ApiClient.post(`Course/AddCourseCommentDissLike`, null, {
      params: { CourseCommandId }
    });
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", CourseCommandId, error); 
    throw error;
  }
};