import React, { useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { database } from '../firebaseConfig';
import '../styles/allcustomers.css'

/*const AllCustomers = () => {

  const data = collection(database, 'customers');

  const [done, setDone] = useState([])

  const getCustomers = async () => {
    const res = await getDocs(data);
    const done = res.docs.map((item) => {
      return { ...item.data() }
    });
    
    setDone(done)
  }
  
  // getCustomers()*/
  const done = [
    {i: 1., name: "Ramesh", account_number: " SBI24745546", Amount_transfered:10000 },
    {i: 1., name: "Ram", account_number: " SBI2474545", Amount_transfered:100000 },
    {i: 1., name: "Kesh", account_number: "SBI24447445", Amount_transfered:100},
    {i: 1., name: "Ramu", account_number: "SBI24447454", Amount_transfered:20000 },
    {i: 1., name: "Jignesh", account_number: "SBI24744535", Amount_transfered:50000}
  ]
  const AllCustomers = () => {
  return (
    <>
      <div></div>

      <table className='customers_table'>
        <tr className='headings'>
          <th>Serial number</th>
          <th>Name</th>
          <th>Account number</th>
          <th>Balance</th>
        </tr>
        {done.map((item, i) => {
          return (
            <tr key={i} className='values'>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.account_number}</td>
              <td>{item.Amount_transfered}</td>
            </tr>
          )
        })}
      </table>

    </>
  )
}

export default AllCustomers