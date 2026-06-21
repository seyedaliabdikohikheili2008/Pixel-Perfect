
import ApiClient from "../../../api/interceptors";

export const getSecurityStatus = async () => {
  try {
    const result = await ApiClient.get(`SharePanel/GetSecurityInfo`);
    return result.data;
  } catch (error) {
    console.error("Error fetching security status:", error);
    throw error;
  }
};
