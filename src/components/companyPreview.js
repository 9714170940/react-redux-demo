import { useEffect } from 'react'
import {useState} from 'react'
import { getData } from '../utils/localStorage'
import { useParams } from 'react-router-dom'

const useCompanyPreview = () => {

    const [previewData, setPreviewData] = useState([])
    const params = useParams()
    const getAllData = getData('user')

    useEffect(() => {
        if(getAllData && params?.id){
            const cloneData = JSON.parse(getAllData)
            setPreviewData(cloneData)
        }
    },[getAllData, params.id])

  return [previewData]
}

export default useCompanyPreview