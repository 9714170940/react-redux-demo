import React from 'react'

const CustomInput = ({label, name, value, onChange, id, ...props }) => {
    return (
        <div className='form-group' {...props} >
            <label for="name">{label}:</label>
            <input type="text" id={id} name={name} value={value} onChange={onChange} ></input>
        </div>
    )
}

export default CustomInput