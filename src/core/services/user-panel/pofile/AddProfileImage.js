import ApiClient from "../../../api/interceptors";

const AddProfileImage = async (data) => {
    const response = await ApiClient.post("/SharePanel/AddProfileImage", data);
    return response.data;
};

export default AddProfileImage