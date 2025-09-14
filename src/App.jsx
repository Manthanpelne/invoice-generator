import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chart from './components/chart'

function App() {

  return (
    <>
        <header className='bg-[#E7CDE7] py-5'>
             <div className='w-[90%] m-auto px-4 md:px-6 font-semibold tracking-wide text-black/60 flex justify-between'>
                     <a href="">Back</a>
                     <a href="">Dashboard</a>
                     <a href="">user</a>
             </div>
        </header>



      <section className='max-w-screen-2xl mx-auto'>

        <div className='md:w-[90%] m-auto flex justify-between gap-20 pt-16 px-4 md:px-6'>

            <div className='flex flex-col items-center justify-center text-center w-1/2 p-6 bg-[#F2F2F2] rounded-3xl'>
                 <span className='text-5xl'>+</span>
                 <h1 className=' mb-2 text-6xl mt-3 bg-gradient-to-b from-[#BE37B6] to-[#7849EE] bg-clip-text text-transparent font-bold'>Create New Invoice</h1>
                 <p className='text-black/40'>Start by creating and sending new invoice</p>
            </div>
    
      
      <div className='w-1/2 '>
          <h2 className='text-center text-lg text-black/60'>Or Upload an existing invoice and set payment reminder</h2>

            <div className=' mt-8 p-6 border border-black/40 rounded-3xl flex flex-col gap-4'>
               <div className='flex justify-between gap-4 text-sm text-black/50'>
                <p>Time Period</p>
                <p>dd:mm:yyyy - dd:mm:yyyy</p>
               </div>
               <div className='flex gap-5 text-black/50'>
                <p className='border rounded-full px-3 pb-1 pt-0.5 border-black/30'>1 Month</p>
                <p className='border rounded-full px-3 pb-1 pt-0.5 border-black/30 '>3 Months</p>
                <p className='border rounded-full px-3 pb-1 pt-0.5 border-black/30'>1 Year</p>
                <p className='border rounded-full px-3 pb-1 pt-0.5 border-black/30'>Custom</p>
               </div>
            </div>

            <div className=' mt-8 flex flex-col gap-4'>
                <div className='border border-black/40 p-6 rounded-3xl'>
                  <p className='text-sm text-black/50'>Total Earnings</p>
                  <h2 className='mt-2 md:text-xl text-purple-800 font-bold'>$1,25,000</h2>
                </div>
                <div className='flex gap-5'>
                      <div className='border w-full border-black/40 p-6 rounded-3xl'>
                      <p className='text-sm text-black/50'>Payment Awaited</p>
                      <h2 className='mt-2 md:text-xl text-purple-800 font-bold'>$25,000</h2>
                    </div>
                      <div className='border w-full border-black/40 p-6 rounded-3xl'>
                      <p className='text-sm text-black/50'>Payment Overdue</p>
                      <h2 className='mt-2 md:text-xl text-purple-800 font-bold'>$25,000</h2>
                    </div>
                </div>
            </div>
       </div>

    </div>


    <div className="w-[60%] m-auto px-4 md:px-6 mt-20 mb-20">
         {/* Chart */}
        <div className="bg-white rounded-2xl p-6 shadow-md border border-black/5">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Weekly Report</h3>
            <span className="text-sm text-gray-500">Jan 13</span>
          </div>
         <Chart/>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">You have 40% more earnings than last month</p>
          </div>
        </div>
    </div>


      </section>
    </>
  )
}

export default App
