import React from "react";
import { useNavigate } from "react-router-dom";
import { capitalized } from "../utils/functions";
import { addData } from "../utils/localStorage";

const CustomCompanyList = ({ list, isRedirect, className, ...props }) => {
    const navigate = useNavigate();

  const handleRedirect = (id, data) => {
    if (isRedirect) {
      addData("user", JSON.stringify(data));
      navigate(`/company-details/${id}`);
    }
  };

  return (
    <>
      {list?.map((data, i) => {
        const { id, name, category, employeeList, isLink, ...otherData } = data;
        return (
          <div key={i} className={className ? "company-list card-component":"card-component"} {...props}>
            {Object.entries({ name, ...otherData }).map(([key, value], index) => {
              return (
                <div className='card-body' key={index}>
                  <p>
                    {capitalized(key)} : {value}
                  </p>
                </div>
              );
            })}
            {isLink ? (
              <span onClick={() => handleRedirect(id, data)}>View Profile</span>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default CustomCompanyList;
