import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setupNewEmployee } from "../redux/actions";
import { validation } from "../utils/validation";

const initialData = {
  employee_name: "",
  employee_address: "",
  category: "",
};

const useCreateEmployee = () => {
  const dispatch = useDispatch();
  const companyList = useSelector(({ companyData }) => companyData?.list);
  const [employeeData, setEmployeeData] = useState(initialData);
  const [employeeError, setEmployeeError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};
    const { employee_name, employee_address, category } = employeeData;
    Object.keys(employeeData).forEach((field) => {
      const error = validation(field, employeeData[field]);
      if (error) {
        validationErrors[field] = error;
      }
    });
    if (Object.keys(validationErrors).length) {
      setEmployeeError({
        ...employeeError,
        ...validationErrors,
      });
      return;
    }
    const cloneData = [...companyList];
    const index = cloneData.findIndex((data) => data?.name === category);
    const newData = cloneData[index];
    const particularData = newData["employeeList"];
    particularData.push({
      id: Math.random(),
      name: employee_name,
      address: employee_address,
      category,
    });
    dispatch(setupNewEmployee(cloneData));
    setEmployeeData(initialData)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({
      ...employeeData,
      [name]: value,
    });
    setEmployeeError({
      ...employeeError,
      [name]: validation(name, value),
    });
  };

  const employeeFormData = {
    data: [
      {
        id: "employee_name",
        label: "name",
        value: employeeData?.employee_name,
        onChange: handleChange,
        name: "employee_name",
      },
      {
        id: "employee_address",
        label: "address",
        value: employeeData?.employee_address,
        onChange: handleChange,
        name: "employee_address",
      },
      {
        id: "category",
        label: "category",
        value: employeeData?.category,
        onChange: handleChange,
        isSelector: true,
        data: companyList?.map((value) => value?.name),
        name: "category",
      },
    ],
    buttonData: [
      {
        key: "employee_btn",
        type: "submit",
        label: "Save",
      },
    ],
  };

  return [handleSubmit, employeeFormData, employeeError];
};

export default useCreateEmployee;
