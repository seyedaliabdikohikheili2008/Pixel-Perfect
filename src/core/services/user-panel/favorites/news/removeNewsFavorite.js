import ApiClient from "../../../../api/interceptors";

const removeNewsFavorite = async (data) => {
    const response = await ApiClient.delete("/News/DeleteFavoriteNews", { data,});
    return response.data;
};

export default removeNewsFavorite