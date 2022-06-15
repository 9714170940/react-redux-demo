export const validation = (name, value) => {
  switch (name) {
    case "name":
      if (!value || value.trim() === "") {
        return "Company name is required.";
      } else return "";
    case "address":
      if (!value || value.trim() === "") {
        return "Company address is required.";
      } else return "";
    case "revenue":
      if (!value || value.trim() === "") {
        return "Company revenue is required.";
      } else return "";
    case "phone":
      if (!value || value.trim() === "") {
        return "Phone number is required.";
      } else return "";
    case "employee_name":
      if (!value || value.trim() === "") {
        return "Employee name is required.";
      } else return "";
    case "employee_address":
      if (!value || value.trim() === "") {
        return "Employee address is required.";
      } else return "";
    case "category":
      if (!value || value.trim() === "") {
        return "Category is required.";
      } else return "";
    default:
      return "";
  }
};
