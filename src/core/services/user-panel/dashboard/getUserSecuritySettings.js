import ApiClient from "../../../api/interceptors";

export const getUserSecuritySettings = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetSecurityInfo`);
    return { 
      data: result.data, 
      status: result.status, 
      headers: result.headers 
    };
  } catch (error) {
    console.error("Error getting security settings:", error);
    throw error;
  }
};
