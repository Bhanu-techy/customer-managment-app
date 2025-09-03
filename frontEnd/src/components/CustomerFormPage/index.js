import axios from 'axios'
import './index.css'

const CustomerFormPage = props => {
  const {
    details,
    onChangeFirstName,
    onChangeLastName,
    onChangeNumber,
    onAddDetails,
  } = props

  const {firstName, lastName, phone} = details
  return (
    <div className="form-container">
      <form onSubmit={onAddDetails}>
        <h1 className="form-heading">Add Details</h1>
        <div className="input-div">
          <label htmlFor="first_name">Enter First Name</label>
          <input
            type="text"
            id="first_name"
            onChange={onChangeFirstName}
            value={firstName}
          />
        </div>
        <div className="input-div">
          <label htmlFor="last_name">Enter Last Name</label>
          <input
            type="text"
            id="last_name"
            onChange={onChangeLastName}
            value={lastName}
          />
        </div>
        <div className="input-div">
          <label htmlFor="phone">Enter Phone Number</label>
          <input
            type="text"
            id="phone"
            onChange={onChangeNumber}
            value={phone}
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  )
}

export default CustomerFormPage
