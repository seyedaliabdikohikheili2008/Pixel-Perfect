import ApiClient from "../../../api/interceptors";

const updateProfileInfoApi = async (data) => {
    const response = await ApiClient.put("/SharePanel/UpdateProfileInfo", data);
    return response.data;
};

export default updateProfileInfoApi