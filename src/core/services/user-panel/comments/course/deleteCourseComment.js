import ApiClient from "../../../../api/interceptors";

const deleteCourseComment = async (params) => {
    const response = await ApiClient.delete(`Course/DeleteCourseComment`, { params});
    return response.data;
};

export default deleteCourseComment