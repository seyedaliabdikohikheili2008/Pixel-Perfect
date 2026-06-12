import ApiClient from "../../../api/interceptors";

export const getMyCoursesReserve = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyCoursesReserve`);
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