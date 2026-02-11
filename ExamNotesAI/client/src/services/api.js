import axios from "axios"
import { serverUrl } from "../App";

export const getCurrentUser = async () => {
  try {
    const result = await axios.get(
      `${serverUrl}/api/user/currentuser`,
      { withCredentials: true }
    );
    return result.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
