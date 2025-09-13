import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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

        <div className='md:w-[90%] m-auto px-4 md:px-6'>
            <div className='text-center py-4 bg-[#F2F2F2] mt-10 rounded-4xl'>
                 <span className='text-5xl'>+</span>
                 <h1 className=' mb-2 mt-3 bg-gradient-to-b from-[#BE37B6] to-[#7849EE] bg-clip-text text-transparent font-bold text-3xl'>Create New Invoice</h1>
                 <p className='text-black/40'>Start by creating and sending new invoice</p>
            </div>
        </div>

          <h2 className='text-center px-4 md:px-6 text-lg mt-8 text-black/60'>Or Upload an existing invoice and set payment reminder</h2>

        <div className='md:w-[90%] m-auto px-4 mt-8 md:px-6'>
            <div className='text-center py-4 bg-[#F2F2F2] rounded-4xl'>
                 <span className='text-5xl'>+</span>
                 <h1 className=' mb-2 mt-3 bg-gradient-to-b from-[#BE37B6] to-[#7849EE] bg-clip-text text-transparent font-bold text-3xl'>Create New Invoice</h1>
                 <p className='text-black/40'>Start by creating and sending new invoice</p>
            </div>
        </div>

      </section>
    </>
  )
}

export default App
