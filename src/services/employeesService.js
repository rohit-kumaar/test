import axios from "axios";
const EMPLOYEES_URL = "http://localhost:4000/employees/";

const getEmployeesById = (id) => axios.get(`${EMPLOYEES_URL}${id}`);

const addEmployees = (data) => axios.post(EMPLOYEES_URL, data);

export { getEmployeesById, addEmployees };
