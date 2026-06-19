import ApiClient from "../../../api/interceptors";

const SelectProfileImage = async (data) => {
    const response = await ApiClient.post("/SharePanel/SelectProfileImage", data);
    return response.data;
};

export default SelectProfileImage