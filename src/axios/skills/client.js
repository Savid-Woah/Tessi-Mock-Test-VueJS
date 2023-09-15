import axios from "axios";
import { exceptionHandler } from "../../../exceptions/index.js";
import config from '../../../config/index';

const url = `${config.api.host}/${config.api.tessi_mock_api}`

export const getAllSkills = async () => {

  try {
    const response = await axios.get(`${url}/skills/`, {

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
