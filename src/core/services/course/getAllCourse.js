import ApiClient from "../../api/interceptors";

export const getAllCourse = async (params) => {
  try {
    const result = await ApiClient.get(`Home/GetCoursesWithPagination`,{params});
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