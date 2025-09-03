import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import './index.css'

const Home = () => {
  const [customers, setCustomers] = useState([])
  const [city, setCity] = useState('')

  const onChangeCity = event => {
    setCity(event.target.value)
  }

  const getCustomerList = () => {
    const url = `https://courageous-wonder-production.up.railway.app/api/customers/?city=${city}`
    axios
      .get(url)
      .then(response => {
        const data = response.data.map(each => ({
          id: each.id,
          firstName: each.first_name,
          lastName: each.last_name,
          phoneNumber: each.phone_number,
        }))
        setCustomers(data)
      })
      .catch(error => {
        console.error('There was an error fetching the customers!', error)
      })
  }

  const onClickSearch = () => {
    getCustomerList()
  }

  useEffect(() => {
    getCustomerList()
  }, [city])

  return (
    <div className="home-bg-container">
      <nav>
        <Link to="/api/customer/form">
          <button type="button" className="add-cust">
            Add Customer
          </button>
        </Link>
        <div>
          <input type="search" onChange={onChangeCity} />
          <button type="button" onClick={onClickSearch}>
            search
          </button>
        </div>
      </nav>
      <div className="home-container">
        <div className="head-container">
          <h1 className="heading">Customer List</h1>
        </div>
        <ul>
          {customers.map(customer => (
            <Link to={`/customer/${customer.id}`} className="link">
              <li key={customer.id}>
                {customer.firstName} {customer.lastName}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
