import axios from "axios";
import { exceptionHandler } from "../../../exceptions/index.js";

export const getAllSkills = async () => {

  try {
    const response = await axios.get(`http://localhost:8000/api/skills/`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      }
    });
    return response.data.data;
  } catch (error) {
    return exceptionHandler(error)
  }
};
