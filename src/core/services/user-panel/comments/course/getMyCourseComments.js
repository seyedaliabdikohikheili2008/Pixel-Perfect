import ApiClient from "../../../../api/interceptors";

export const getMyCourseComments = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyCoursesComments`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};