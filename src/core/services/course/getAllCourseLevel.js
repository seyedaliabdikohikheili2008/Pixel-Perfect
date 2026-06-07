import ApiClient from "../../api/interceptors";

export const getAllCourseLevel = async () => {
  try {
    const result = await ApiClient.get(`CourseLevel/GetAllCourseLevel`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    console.log(error);
    return [];
  }
};