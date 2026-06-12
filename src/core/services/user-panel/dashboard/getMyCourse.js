import ApiClient from "../../../api/interceptors";

export const getMyCourse = async (params) => {
  try {
    const result = await ApiClient.get(`SharePanel/GetMyCourses`,{params});
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