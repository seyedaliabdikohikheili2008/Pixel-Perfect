import ApiClient from "../../api/interceptors";

export const getAllCourseType = async () => {
  try {
    const result = await ApiClient.get(`CourseType/GetCourseTypes`);
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