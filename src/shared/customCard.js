import React from 'react'
import { capitalized } from '../utils/functions';

const CustomCard = ({data, ...props}) => {

    const { employeeList, id, isLink, name, ...otherData } = data

  return (
    <div className='company-list card-component' {...props} >
        <h4 className='company-name' >{name}</h4>
        {Object.entries({ ...otherData, employees: employeeList?.length }).map(([key, value], index) => {
              return (
                <div className="card-body" key={index}>
                  <p>
                    {capitalized(key)} : {value}
                  </p>
                </div>
              );
            })}
    </div>
  )
}

export default CustomCard