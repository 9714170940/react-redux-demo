import {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'

const useCompanyList = () => {
    const companyData = useSelector(({companyData}) => companyData?.list)
    const [companyList, setCompanyList] = useState([])

    useEffect(() => {
        if(companyData?.length){
            setCompanyList(companyData)
        }
    },[companyData])

  return [companyList]
}

export default useCompanyList