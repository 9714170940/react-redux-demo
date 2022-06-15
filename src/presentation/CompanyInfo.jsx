import React from 'react'
import useCompanyList from '../components/companyList'
import useCreateCompany from '../components/createCompany'
import useCreateEmployee from '../components/createEmployee'
import CustomCompanyList from '../shared/customCompanyList'
import CustomForm from '../shared/customForm'
import '../style/company_info.scss'
const CompanyInfo = () => {

    const [onSubmit, formData, error] = useCreateCompany()
    const [handleSubmit, employeeFormData, employeeError] = useCreateEmployee()
    const [ companyList ] = useCompanyList()

  return (
    <div className="container" >
        <div className='show-company-data'>
            <div className='company-list' >
                <h4>Companies</h4>
                {
                    companyList.length ? <CustomCompanyList isRedirect list={companyList.map(data => {return {...data, isLink: true}})} /> : <p>Not Found!</p>
                }
            </div>
        </div>
        <div className='form-container'>
            <div className='profile-info' >
                <h4>Create Company Profile</h4>
                <CustomForm {...{onSubmit, formData, error}} />
            </div>
            {companyList.length ? <div className='employee-info' >
                <h4>Create Employee Profile</h4>
                <CustomForm {...{onSubmit: handleSubmit, formData: employeeFormData, error:employeeError}} />
            </div> : null}
        </div>
    </div>
  )
}

export default CompanyInfo