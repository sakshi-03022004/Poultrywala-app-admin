import React from 'react'

function Accounts() {
  return (
   <div className="p-2">
    <div className='mx-2 '>
            <h1 className='font-bold text-xl'>Accounts</h1>
    </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        <div className="bg-white shadow-lg rounded-xl p-6 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 ">
          <h2 className="text-xl font-semibold mb-1 ">Total Payment</h2>
         <p className="text-gray-600 font-semibold text-lg">₹24,565</p>
         <p className="text-green-600 font-semibold text-lg">+15% from last month</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-105  ">
          <h2 className="text-xl font-semibold mb-1">Pending Payment</h2>
          <p className="text-gray-600 text-lg">₹24,565</p>
          <p className="text-red-600 font-semibold text-lg">4 Pending payments</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-105 ">
          <h2 className="text-xl font-semibold mb-1">Recieved</h2>
          <p className="text-gray-600">247</p>
           <p className="text-green-600 font-semibold text-lg">12 Completed payments</p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 cursor-pointer  transition-transform duration-300 ease-in-out hover:scale-105">
          <h2 className="text-xl font-semibold mb-1">Invoice</h2>
          <p className="text-gray-600">20</p>
          <p className="text-gray-600 font-semibold text-lg">Generated this month</p>
        </div>
      </div>

      <div className='mx-2 mt-5'>
            <h1 className='font-medium text-xl'>Recent Trancsactions</h1>
    </div>
    

<div class="relative overflow-x-auto mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Order Id
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Date
                </th>
                 <th scope="col" class="px-6 py-3">
                    Branch Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
               
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   #Ord-12344-34
                </th>
                <td class="px-6 py-4">
                    Green Valley Farms
                </td>
                <td class="px-6 py-4">
                    May 09,2025
                </td>
                 <td class="px-6 py-4">
                    Indore branch
                </td>
                <td class="px-6 py-4">
                    ₹4345
                </td>
               
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #Ord-12345-11
                </th>
                <td class="px-6 py-4">
                    Sunrise Polutry
                </td>
                <td class="px-6 py-4">
                    May 09,2025
                </td>
                 <td class="px-6 py-4">
                    Bhopal branch
                </td>
                <td class="px-6 py-4">
                    ₹2100
                </td>
               
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    #Ord-12345-11
                </th>
                <td class="px-6 py-4">
                    Sunrise Polutry
                </td>
                <td class="px-6 py-4">
                    May 09,2025
                </td>
                 <td class="px-6 py-4">
                    Bhopal branch
                </td>
                <td class="px-6 py-4">
                    ₹2100
                </td>
            </tr>
        </tbody>
    </table>
</div>

    </div>
  )
}

export default Accounts

