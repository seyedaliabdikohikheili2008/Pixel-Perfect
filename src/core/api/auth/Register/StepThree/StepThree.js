import ApiClient from "../../../interceptors";
const RegisterStepThree = async (data) => {
    const payload = {
        password: data.password,
        gmail:data.gmail,
        phoneNumber:data.phoneNumber
    };

    console.log(" ارسال داده به سرور:", payload); 

    const response = await ApiClient.post(`/Sign/Register`, payload);
    return response.data;
};

export default RegisterStepThree;
