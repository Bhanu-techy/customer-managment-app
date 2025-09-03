import {useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import AddressFormPage from '../AddressFormPage'
import './index.css'

const AddressForm = () => {
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setStateName] = useState('')
  const [pincode, setPincode] = useState('')
  const [details, setDetails] = useState({})
  const {id} = useParams()

  const onChangeAddress = event => {
    setAddress(event.target.value)
  }

  const onChangeCity = event => {
    setCity(event.target.value)
  }
  const onChangeState = event => {
    setStateName(event.target.value)
  }

  const onChangePincode = event => {
    setPincode(event.target.value)
  }

  const onAddDetails = event => {
    event.preventDefault()
    const data = {
      address,
      city,
      state,
      pincode,
    }
    setDetails(data)
    console.log(id)

    const addressDetails = {
      address_details: address,
      city,
      state,
      pin_code: pincode,
    }

    console.log(addressDetails)
    const url = `https://courageous-wonder-production.up.railway.app/api/customers/${id}/addresses`
    axios
      .post(url, addressDetails)
      .then(response => {
        console.log('Response:', response.data)
      })
      .catch(error => {
        console.error('There was an error adding the addresses!', error)
      })
  }

  return (
    <AddressFormPage
      details={details}
      onChangeAddress={onChangeAddress}
      onChangeCity={onChangeCity}
      onChangeState={onChangeState}
      onChangePincode={onChangePincode}
      onAddDetails={onAddDetails}
    />
  )
}

export default AddressForm
