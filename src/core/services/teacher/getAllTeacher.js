import ApiClient from "../../api/interceptors";

export const getAllTeacher = async () => {
  try {
    const result = await ApiClient.get(`Home/GetTeachers`);
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