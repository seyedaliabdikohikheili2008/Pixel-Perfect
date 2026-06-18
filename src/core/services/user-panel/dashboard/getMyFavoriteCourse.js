import ApiClient from "../../../api/interceptors";

export const getMyFavoriteCourse = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyFavoriteCourses`);
    return {
    data: result.data,
    status: result.status,
    headers: result.headers,
  };
  } catch (error) {
    throw error;
  }
};