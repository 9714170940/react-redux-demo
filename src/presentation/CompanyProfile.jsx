import React from 'react'
import useCompanyPreview from '../components/companyPreview'
import CustomCard from '../shared/customCard'
import CustomCompanyList from '../shared/customCompanyList'
import "../style/company_profile.scss"


const CompanyProfile = ({...props}) => {

    const [previewData] = useCompanyPreview()
    return (
        <div className="container" {...props} >
            <div className='company-list-preview' >
                <CustomCard data={previewData} />
                <div className='company-list card-component'>
                    <h4>Employees</h4>
                    <CustomCompanyList className list={previewData?.employeeList} />
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile
