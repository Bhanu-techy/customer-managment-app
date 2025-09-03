import {useState, useEffect} from 'react'
import axios from 'axios'
import CustomerFormPage from '../CustomerFormPage'

import './index.css'

function CustomerForm() {
  const [details, setDetails] = useState({})
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')

  const onChangeFirstName = event => setFirstName(event.target.value)

  const onChangeLastName = event => setLastName(event.target.value)
  const onChangeNumber = event => setPhone(event.target.value)

  const onAddDetails = event => {
    event.preventDefault()
    const userDetails = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phone,
    }
    const updatedDetails = {
      firstName,
      lastName,
      phone,
    }
    setDetails(updatedDetails)
    const url =
      'https://courageous-wonder-production.up.railway.app/api/customers'
    axios
      .post(url, userDetails)
      .then(response => {
        console.log('Details added Successfully')
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
    setDetails({})
    setFirstName('')
    setLastName('')
    setPhone('')
  }

  return (
    <CustomerFormPage
      details={details}
      onChangeFirstName={onChangeFirstName}
      onChangeLastName={onChangeLastName}
      onChangeNumber={onChangeNumber}
      onAddDetails={onAddDetails}
    />
  )
}

export default CustomerForm
