import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { setupNewCompany } from '../redux/actions'
import { validation } from '../utils/validation'

const initialData = {
    name:"",
    address: "",
    revenue: "",
    phone: ""
}

const useCreateCompany = () => {

    const dispatch = useDispatch()
    const [profileData, setProfileData] = useState(initialData)
    const [error, setError] = useState({})

    const onSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

    Object.keys(profileData).forEach((field) => {
      const error = validation(field, profileData[field])
      if (error) {
        validationErrors[field] = error;
      }
    })
    if (Object.keys(validationErrors).length) {
      setError({
        ...error,
        ...validationErrors
      });
      return
    }
        dispatch(setupNewCompany({id: Math.random(), ...profileData, employeeList:[]}))
        setProfileData(initialData)
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProfileData({
            ...profileData, [name]: value
        })
        setError({
            ...error, [name]: validation(name, value)
        })
    }

    const formData = {
        data: [
            {
                id: "name",
                label: "name",
                value: profileData?.name,
                onChange: handleChange,
                name: "name"
            },{
                id: "address",
                label: "address",
                value: profileData?.address,
                onChange: handleChange,
                name: "address"
            },{
                id: "revenue",
                label: "revenue",
                value: profileData?.revenue,
                onChange: handleChange,
                name: "revenue"
            },{
                id: "phone",
                label: "phone",
                value: profileData?.phone,
                onChange: handleChange,
                name: "phone"
            }
        ],
        buttonData: [
            {
                key: "profile_btn",
                type: 'submit',
                label: 'Save'
            }
        ]
    }

  return [onSubmit, formData, error]
}

export default useCreateCompany