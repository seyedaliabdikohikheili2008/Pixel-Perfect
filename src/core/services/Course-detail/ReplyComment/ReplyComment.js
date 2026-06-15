import ApiClient from "../../../api/interceptors";

export const ReplyComment = async (formData) => {
  try {
    const result = await ApiClient.post(`Course/AddReplyCourseComment`,formData);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error)   
    throw error;
  }
};
