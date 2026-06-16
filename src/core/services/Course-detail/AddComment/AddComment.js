import ApiClient from "../../../api/interceptors";

export const PostCourseComments = async (formdata) => {
  try {
    const result = await ApiClient.post(`Course/AddCommentCourse`,formdata);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error)   
    throw error;
  }
};
