import ApiClient from "../../../api/interceptors";

export const deleteLike = async (courseLikeId) => {
  if (!courseLikeId || courseLikeId === "null" || courseLikeId === "undefined") {
    throw new Error("شناسه لایک معتبر نیست");
  }

  try {
    const formData = new FormData();
    formData.append("CourseLikeId", courseLikeId);

    const result = await ApiClient.delete("Course/DeleteCourseLike", {
      data: formData,
    });

    return result;
  } catch (error) {
    console.error("Error removing course like:", error);
    throw error;
  }
};
