import ApiClient from "../../../api/interceptors";

export const AddRate = async (CourseId,RateNumber) => {
  try {
    const result = await ApiClient.post(`Course/SetCourseRating?CourseId=${CourseId}&RateNumber=${RateNumber}`);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
   console.log("Full error object:", error);
    console.log("Error response:", error.response);
    console.log("Error response data:", error.response?.data);
    throw error;
  }
};