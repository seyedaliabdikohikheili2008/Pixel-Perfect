import ApiClient from "../../../api/interceptors";

export const deleteCommentLike = async (CourseCommandId) => {
  try {
    const result = await ApiClient.delete(`Course/DeleteCourseCommentLike`, {
      params: { CourseCommandId }
    });
    return { data: result.data, status: result.status, headers: result.headers };

  } catch (error) {
    console.error("Error removing comment like:", error);
    throw error;
  }
};
