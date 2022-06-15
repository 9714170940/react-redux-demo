import React from "react";
import CustomButton from "./customButton";
import CustomInput from "./customInput";
import CustomSelector from "./customSelector";

const CustomForm = ({ onSubmit, formData, error, ...props }) => {
  return (
      <form {...props} onSubmit={onSubmit}>
        {formData?.data?.map(
          ({ label, name, value, onChange, id, isSelector, data, ...otherData }, i) => {
            return (
              <React.Fragment key={i}>
                {!isSelector ? <CustomInput
                  {...{ label, name, value, onChange, id, ...otherData }}
                />: <CustomSelector {...{label, name, value, onChange, id, data, ...otherData}} />}
                <span>{error ? error?.[name]: null}</span>
              </React.Fragment>
            );
          }
        )}
        {formData?.buttonData?.map(
          ({ label, type, onClick, ...otherData }, i) => (
            <CustomButton key={i} {...{ label, type, onClick, ...otherData }} />
          )
        )}
      </form>
  );
};

export default CustomForm;
