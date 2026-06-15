import ApiClient from "../../../api/interceptors";

export const GetReplyComment = async (CourseId,CommentId) => {
  try {
    const result = await ApiClient.get(`Course/GetCourseReplyCommnets/${CourseId}/${CommentId}`);
    console.log("result:", result);
    return { data: result.data, status: result.status, headers: result.headers };
  } catch (error) {
    console.log(error)   
    throw error;
  }
};
