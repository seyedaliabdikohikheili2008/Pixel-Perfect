import ApiClient from "../../api/interceptors";

export const getCourseDetail = async (CourseId) => {
  try {
    const result = await ApiClient.get(`Home/GetCourseDetails`, { params: { CourseId } });
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching course detail for ID:", CourseId, error); 
    throw error;
  }
};
