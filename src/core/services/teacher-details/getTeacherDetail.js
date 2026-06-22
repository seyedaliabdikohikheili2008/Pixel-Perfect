import ApiClient from "../../api/interceptors";

export const GetTeacherDetail = async (TeacherId) => {
  try {
    const result = await ApiClient.get(`Home/GetTeacherDetails`, {
      params: {
        TeacherId: TeacherId
      }
    });
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error);
    throw error;
  }
};
