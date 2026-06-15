import ApiClient from "../../../api/interceptors";

export const getCourseComments = async (CourseId) => {
  try {
    const result = await ApiClient.get(`Course/GetCourseCommnets/${CourseId}`);
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching news detail for ID:", CourseId, error); 
    throw error;
  }
};