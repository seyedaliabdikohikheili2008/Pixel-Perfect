import ApiClient from "../../../api/interceptors";

const deleteCourseReserve = async (data) => {
    const response = await ApiClient.delete("/CourseReserve", { data,});
    return response.data;
};

export default deleteCourseReserve