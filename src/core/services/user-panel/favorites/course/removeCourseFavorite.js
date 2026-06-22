import ApiClient from "../../../../api/interceptors";

const removeCourseFavorite = async (data) => {
    const response = await ApiClient.delete("/Course/DeleteCourseFavorite", { data:data});
    return response.data;
};

export default removeCourseFavorite