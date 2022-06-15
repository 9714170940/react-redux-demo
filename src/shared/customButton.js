import React from 'react'

const CustomButton = ({label, onClick, type, ...otherProps}) => {
  return (
    <div className='btn' {...otherProps} >
        <button type={type} onClick={() => onClick && onClick()} >{label}</button>
    </div>
  )
}

export default CustomButton