import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import axios from 'axios'

import './index.css'

const CustomerDetails = () => {
  const [details, setDetails] = useState({})
  const [addresses, setAddresses] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const geturl = `https://courageous-wonder-production.up.railway.app/api/customers/${id}/addresses`
    axios
      .get(geturl)
      .then(response => {
        const data = response.data.map(each => ({
          id: each.id,
          firstName: each.first_name,
          lastName: each.last_name,
          phoneNumber: each.phone_number,
          addressDetails: each.address_details,
          state: each.state,
          city: each.city,
          pinCode: each.pin_code,
        }))
        setAddresses(data)
        setDetails(data)
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
  }, [id])

  useEffect(() => {
    const url = `https://courageous-wonder-production.up.railway.app/api/customers/${id}`
    axios
      .get(url)
      .then(response => {
        const {data} = response
        const information = {
          id: data.id,
          firstName: data.first_name,
          lastName: data.last_name,
          phoneNumber: data.phone_number,
        }
        setDetails(information)
      })
      .catch(error => {
        console.error('There was an error fetching the customer!', error)
      })
  })

  const {firstName, lastName, phoneNumber} = details

  return (
    <div className="customer-detail-cont">
      <div className="customer-detail">
        <h1 className="heading">Details</h1>
        <p className="para">
          First Name : <span>{firstName}</span>
        </p>
        <p className="para">
          Last Name : <span>{lastName}</span>
        </p>
        <p className="para">
          Phone Number : <span>{phoneNumber}</span>
        </p>
        <Link to={`/api/customer/form/${id}`}>
          <button>Edit</button>
        </Link>
      </div>

      <ul className="customer-detail-list-cont">
        {addresses.length > 0 ? (
          <h1 className="heading">Addresses</h1>
        ) : (
          <>
            <h1 className="heading">No Addresses</h1>
            <Link to={`/api/customer/${id}/address`}>
              <button type="button">Add</button>
            </Link>
          </>
        )}
        {addresses.map(each => (
          <li key={each.id}>
            <p>{each.addressDetails}</p>
            <p>{each.city}</p>
            <p>{each.state}</p>
            <p>{each.pinCode}</p>
            <Link to={`/api/customer/${id}/address`}>
              <button type="button">Add</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CustomerDetails
