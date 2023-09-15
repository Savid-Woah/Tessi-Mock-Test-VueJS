import axios from "axios";
import { exceptionHandler } from "../../../exceptions/index.js";
import Swal from 'sweetalert2';
import config from '../../../config/index';

const url = `${config.api.host}/${config.api.tessi_mock_api}`

export const getAllEmployees = async () => {

  try {
    const response = await axios.get(`${url}/employees/`, {
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

export const getOneEmployeeDetails = async (id) => {
  try {
    const response = await axios.get(`${url}/employees/get-details-by-id/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    return response.data.data.employee;
  } catch (error) {
    return exceptionHandler(error);
  }
};

export const getOneEmployeeByEmail = async (email) => {
  try {
    const response = await axios.get(`${url}/employees/get-employee-by-email/${email}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    return response.data.data;
  } catch (error) {
    return exceptionHandler(error);
  }
};

export const getAllEmployeesBySalaryRange = async (min, max) => {
  try {
    const response = await axios.get(`${url}/employees/get-all-by-salary-range/${min}/${max}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    return response.data.data;
  } catch (error) {
    return exceptionHandler(error);
  }
};

export const registerOneEmployee = async (employee) => {
  try {
    let addEmployeeResponse = await axios.post(`${url}/employees/post`, employee, {
      withCredentials: true
    });
    if(addEmployeeResponse.status === 200){
      Swal.fire({
        icon: 'success',
        title: 'Employee added successfully!',
        confirmButtonText: 'Cool'
      }).then(() => {

        windows.reload();

      });
    }
    else{
      Swal.fire({
        icon: 'warning',
        title: 'Review the fields',
        text: 'Error',
      })
    }
  } catch (error) {
    return exceptionHandler(error)
  }
};
