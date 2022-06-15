import React from 'react'

const CustomSelector = ({label, name, value, onChange, id, data, ...otherData}) => {
  return (
    <div className='form-group'  {...otherData}>
        <label for="name">{label}:</label>
        <select name={name} value={value} onChange={onChange} >
            <option aria-hidden hidden>select category</option>
            {
                data?.map(val => <option value={val} >{val}</option>)
            }
        </select>
    </div>
  )
}

export default CustomSelector