import ApiClient from "../../../api/interceptors";

export const TopCourse = async (Count) => {
  try {
    const result = await ApiClient.get(`Home/GetCoursesTop`, { params: { Count } });
    return { data: result.data, status: result.status, headers: result.headers };
   
  } catch (error) {
    console.error("Error fetching course detail for ID:", Count, error); 
    throw error;
  }
};
