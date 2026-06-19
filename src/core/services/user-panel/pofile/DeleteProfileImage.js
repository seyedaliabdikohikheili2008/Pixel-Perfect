import ApiClient from "../../../api/interceptors";

const DeleteProfileImage = async (data) => {
    const response = await ApiClient.delete("/SharePanel/DeleteProfileImage", { data,});
    return response.data;
};

export default DeleteProfileImage