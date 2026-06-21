import ApiClient from "../../../api/interceptors";

export const Reserve = async (courseId) => {
  try {
    const payload = {
      courseId: courseId
    };

    const result = await ApiClient.post(`CourseReserve/ReserveAdd`, payload);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error)   
    throw error;
  }
};
