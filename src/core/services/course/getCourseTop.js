import ApiClient from "../../api/interceptors";

export const getCourseTop = async (params) => {
  try {
    const result = await ApiClient.get(`Home/GetCoursesTop`,{params});
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