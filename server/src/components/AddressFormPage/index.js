import './index.css'

const AddressFormPage = props => {
  const {
    details,
    onChangeAddress,
    onChangeState,
    onChangeCity,
    onChangePincode,
    onAddDetails,
  } = props

  const {address, city, state, pincode} = details

  return (
    <div className="form-container">
      <form onSubmit={onAddDetails}>
        <h1 className="form-heading">Add Details</h1>
        <div className="input-div">
          <label htmlFor="address">Enter Address</label>
          <input
            type="text"
            id="address"
            onChange={onChangeAddress}
            value={address}
          />
        </div>
        <div className="input-div">
          <label htmlFor="city">Enter City</label>
          <input type="text" id="city" onChange={onChangeCity} value={city} />
        </div>
        <div className="input-div">
          <label htmlFor="state">Enter State</label>
          <input
            type="text"
            id="state"
            onChange={onChangeState}
            value={state}
          />
        </div>
        <div className="input-div">
          <label htmlFor="pincode">Enter Pin Code</label>
          <input
            type="text"
            id="pincode"
            onChange={onChangePincode}
            value={pincode}
          />
        </div>
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
    </div>
  )
}

export default AddressFormPage
