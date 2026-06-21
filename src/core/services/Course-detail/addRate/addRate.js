import ApiClient from "../../../api/interceptors";

export const Reserve = async (CourseId,RateNumber) => {
  try {
    const payload = {
      CourseId: CourseId,
      RateNumber:RateNumber
    };

    const result = await ApiClient.post(`Course/SetCourseRating`, payload);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error)   
    throw error;
  }
};