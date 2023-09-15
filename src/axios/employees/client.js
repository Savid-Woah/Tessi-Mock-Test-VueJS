import axios from "axios";
import { exceptionHandler } from "../../../exceptions/index.js";
import Swal from 'sweetalert2';

export const getAllEmployees = async () => {

  try {
    const response = await axios.get(`http://localhost:8000/api/employees/`, {
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
    const response = await axios.get(`http://localhost:8000/api/employees/get-details-by-id/${id}`, {
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
    const response = await axios.get(`http://localhost:8000/api/employees/get-employee-by-email/${email}`, {
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
    const response = await axios.get(`http://localhost:8000/api/employees/get-all-by-salary-range/${min}/${max}`, {
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
    let addEmployeeResponse = await axios.post(`http://localhost:8000/api/employees/post`, employee, {
      withCredentials: true
    });
    if(addEmployeeResponse.status === 200){
      Swal.fire({
        icon: 'success',
        title: 'Employee added successfully!',
        confirmButtonText: 'Cool'
      }).then(() => {

        window.location.reload();

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
