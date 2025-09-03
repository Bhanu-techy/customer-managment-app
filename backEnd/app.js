const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

//app.use(cors())

const {open} = require('sqlite')
const sqlite3 = require('sqlite3').verbose()

const dbPath = path.join(__dirname, 'database.db')

let db = null

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    })
    app.listen(3000, () => {
      console.log('Connected to the SQLite database.')
    })
  } catch (e) {
    console.log(`DB Error: ${e.message}`)
    process.exit(1)
  }
}

initializeDBAndServer()

app.use(express.json())

//et all states API call with filters
app.get('/api/customers/', async (request, response) => {
  const {city = '', page = 10} = request.query

  let details
  if (city !== '') {
    const getstatesQuery = `
 select customers.id, customers.first_name, customers.last_name,
  customers.phone_number
from customers inner join addresses on
 customers.id = addresses.customer_id
 where addresses.city LIKE '%${city}%'
 limit '${page}';`
    details = await db.all(getstatesQuery)
    response.send(details)
  } else {
    const query = `select * from customers;`
    details = await db.all(query)
    response.send(details)
  }
})

//Get API call of a Customer
app.get('/api/customers/:id/', async (request, response) => {
  const {id} = request.params
  const getQuery = `
    SELECT
      *
    FROM
      customers
    WHERE
      id = ${id};`
  const details = await db.get(getQuery)
  response.send(details)
})

//POST API call to add customer
app.post('/api/customers/', async (request, response) => {
  const {first_name, last_name, phone_number} = request.body

  const addQuery = `
  insert into customers (first_name, last_name, phone_number)
  values ('${first_name}', '${last_name}', '${phone_number}');`

  const dbResponse = await db.run(addQuery)
  const id = dbResponse.lastID
  response.send({id: id})
})

//DELETE API Call
app.delete('/api/customers/:id/', async (request, response) => {
  const {id} = request.params
  const deleteQuery = `
    DELETE FROM
      customers
    WHERE
      id = ${id};`
  await db.run(deleteQuery)
  response.send('Deleted Successfully')
})

//PUT API Call to edit customer details
app.put('/api/customers/:id/', async (request, response) => {
  const {id} = request.params
  const {first_name, last_name, phone_number} = request.body

  const updateQuery = `
  UPDATE customers
  SET first_name = '${first_name}', 
    last_name = '${last_name}', 
    phone_number= '${phone_number}'
  where id = '${id}';`
  await db.run(updateQuery)
  response.send('customer updated successfully')
})

app.get('/api/addresses/', async (request, response) => {
  const getstatesQuery = `
 SELECT
  *
 FROM
  addresses;`

  const details = await db.all(getstatesQuery)
  response.send(details)
})

//GET API Call for addresses of a particular customer
app.get('/api/customers/:id/addresses', async (request, response) => {
  const {id} = request.params
  const getQuery = `
  select * from customers inner join addresses on
  customers.id=addresses.customer_id
  where customers.id= '${id}';`

  const data = await db.all(getQuery)
  response.send(data)
})

//POST API Call to addresses
app.post('/api/customers/:id/addresses', async (request, response) => {
  const {id} = request.params
  const {address_details, state, city, pin_code} = request.body
  const addQuery = `
  INSERT INTO addresses (customer_id, address_details, city, state, pin_code)
  values ('${id}', '${address_details}', '${city}', '${state}', '${pin_code}'
  )`

  await db.run(addQuery)
  response.send('addresses added Successfully')
})

//PUT API Call to edit address details
app.put('/api/addresses/:addressId/', async (request, response) => {
  const {addressId} = request.params
  const {address_details, city, state, pin_code} = request.body
  const updateQuery = `
  UPDATE addresses
  SET address_details = '${address_details}',
      city='${city}', state='${state}', pin_code='${pin_code}'
  where id= '${addressId}';
  `
  await db.run(updateQuery)
  response.send('updated successfully')
})

app.delete('/api/addresses/:addressId', async (request, response) => {
  const {addressId} = request.params
  const deleteQuery = `
    DELETE FROM
      addresses
    WHERE
      id = ${addressId};`
  await db.run(deleteQuery)
  response.send('Deleted Successfully')
})

module.exports = app
