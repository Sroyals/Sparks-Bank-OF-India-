import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { app, database } from '../firebaseConfig';
import '../styles/allcustomers.css'

/*const Transactions = () => {

  const data = collection(database, 'transactions');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = [
      {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, S}

    ]
    setDone(done)
  }

  getCustomers();
  */
  const done = [
    {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, Status: true},
    {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, Status: true},
    {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, Status: true},
    {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, Status: true},
    {i: 1., from: "Ramesh", to: " Suresh", Amount_transfered:10000, Status: true}
  ]
function Transactions(){
  
  ///const data = collection(database, 'transactions');
  return (
    <>
      <div></div>

      <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>From</th>
          <th>To</th>
          <th>Amount transfered</th>
          <th>Status</th>
        </tr>
        {done.map((item, i) => {
          return (
            <tr key={i} className='values'>
              <td>{i + 1}</td>
              <td>{item.from}</td>
              <td>{item.to}</td>
              <td>{item.Amount_transfered}</td>
              <td>{item.Status ? 'true' : 'false'}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

export default Transactions