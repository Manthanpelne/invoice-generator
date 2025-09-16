import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Chart from "./components/chart";
import InvoiceList from "./components/invoiceList";

function App() {
  return (
    <>
      <header className="bg-[#E7CDE7] py-14 md:py-6 mb-10 md:mb-6">
        <div className="w-[90%] m-auto px-4 md:px-6 font-semibold tracking-wide text-black/60 flex justify-between">
          <a href="">Back</a>
          <a href="" className="font-bold">Dashboard</a>
          <a href="">user</a>
        </div>
      </header>

      <section className="max-w-screen-2xl mx-auto">

        <div className="md:w-[90%] relative m-auto flex flex-col md:flex-row justify-between gap-20 pt-10 px-4 md:px-6">
          <div className="bg-white md:hidden absolute -top-20 pt-5 rounded-t-[50px] left-0 w-full">
            <div className="flex  flex-col items-center justify-center text-center w-[90%] m-auto md:w-1/2 p-6 bg-[#F2F2F2] rounded-4xl">
              <span className="text-4xl text-purple-700 border-3 rounded-full pb-2 px-3">+</span>
              <h1 className=" mb-2 text-3xl md:text-6xl mt-3 bg-gradient-to-b from-[#BE37B6] to-[#7849EE] bg-clip-text text-transparent font-bold">
                Create New Invoice
              </h1>
              <p className="text-black/40">
                Start by creating and sending new invoice
              </p>
            </div>
          </div>

        <div className="hidden md:block w-1/2">
          <div className="flex items-center w-full flex-col justify-center h-full p-6 bg-[#F2F2F2] rounded-3xl">
            <span className="text-4xl text-purple-700 border-3 rounded-full pb-2 px-3">+</span>
            <h1 className=" mb-2 text-3xl md:text-5xl mt-3 bg-gradient-to-b from-[#BE37B6] to-[#7849EE] bg-clip-text text-transparent font-bold">
              Create New Invoice
            </h1>
            <p className="text-black/40">
              Start by creating and sending new invoice
            </p>
          </div>
          </div>

          <div className="md:w-1/2 mt-28 md:mt-0">
            <h2 className="text-center text-purple-700 text-sm md:text-lg">
              Or Upload an existing invoice and set payment reminder
            </h2>

            <div className=" mt-8 p-6 border border-black/20 rounded-3xl flex flex-col gap-4">
              <div className="flex justify-between gap-4 text-sm text-black/50">
                <p>Time Period</p>
                <p>dd:mm:yyyy - dd:mm:yyyy</p>
              </div>
              <div className="flex flex-wrap gap-3 text-black/50">
                <p className="border rounded-full px-3 pb-1 pt-0.5 border-black/20">
                  1 Month
                </p>
                <p className="border text-purple-700 bg-purple-50  rounded-full px-3 pb-1 pt-0.5 border-purple-200 ">
                  3 Months
                </p>
                <p className="border rounded-full px-3 flex gap-1 items-center pb-1 pt-0.5 border-black/20">
                  1 Year
                  <span><svg xmlns="http://www.w3.org/2000/svg" className="text-purple-700" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 20v-2h14v2zm0-3.5L3.725 8.475q-.05 0-.113.013T3.5 8.5q-.625 0-1.062-.438T2 7t.438-1.062T3.5 5.5t1.063.438T5 7q0 .175-.038.325t-.087.275L8 9l3.125-4.275q-.275-.2-.45-.525t-.175-.7q0-.625.438-1.063T12 2t1.063.438T13.5 3.5q0 .375-.175.7t-.45.525L16 9l3.125-1.4q-.05-.125-.088-.275T19 7q0-.625.438-1.063T20.5 5.5t1.063.438T22 7t-.437 1.063T20.5 8.5q-.05 0-.112-.012t-.113-.013L19 16.5zm1.7-2h10.6l.65-4.175l-2.625 1.15L12 6.9l-3.325 4.575l-2.625-1.15zm5.3 0"/></svg></span>
                </p>
                <p className="border flex gap-1 items-center rounded-full px-3 pb-1 pt-0.5 border-black/20">
                  <span><svg xmlns="http://www.w3.org/2000/svg" className="opacity-50" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M6 1h2v1H6zm10 0h2v1h-2zm6 4V4h-3V2h-1v5h-2V2h-1v2H9V2H8v5H6V2H5v2H2v1H1v17h1v1h20v-1h1V5zm-1 3v3h-3V8zm0 8h-3v-3h3zm0 5h-3v-3h3zM3 18h3v3H3zm0-5h3v3H3zm13 3h-3v-3h3zm-5 0H8v-3h3zm-3 2h3v3H8zm5 0h3v3h-3zm3-7h-3V8h3zm-5-3v3H8V8zm-5 3H3V8h3z"/></svg></span>
                  Custom
                </p>
              </div>
            </div>

            <div className=" mt-3 md:mt-8 flex flex-col gap-3">
              <div className="border border-black/20 p-4 md:p-6 rounded-3xl">
                <p className="text-sm text-black/50">Total Earnings</p>
                <h2 className="mt-2 md:text-xl text-purple-800 font-bold">
                  $1,25,000
                </h2>
              </div>
              <div className="flex gap-5 md:mt-3">
                <div className="border w-full border-black/20 p-4 md:p-6 rounded-3xl">
                  <p className="text-sm text-black/50">Payment Awaited</p>
                  <h2 className="mt-2 md:text-xl text-purple-800 font-bold">
                    $25,000
                  </h2>
                </div>
                <div className="border w-full border-black/20 p-4 md:p-6 rounded-3xl">
                  <p className="text-sm text-black/50">Payment Overdue</p>
                  <h2 className="mt-2 md:text-xl text-purple-800 font-bold">
                    $25,000
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-[60%] m-auto px-4 md:px-6 mt-20 mb-20">
          {/* Chart */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-black/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">
                Weekly Report
              </h3>
              <span className="text-sm text-gray-500">Jan 13</span>
            </div>
            <Chart />
            <div className="mt-4 text-center">
              <p className="text-xs text-gray-400">
                You have 40% more earnings than last month
              </p>
            </div>
          </div>
        </div>

        {/* Past Invoices */}
        <div className="w-[90%] m-auto px-4 md:px-6 ">
          <div className="border-b border-gray-100">
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-black/30">
                Your Invoices
              </h3>
              <button className="text-sm text-purple-600 font-medium">
                View All
              </button>
            </div>
          </div>
          <InvoiceList />
        </div>
      </section>
    </>
  );
}

export default App;
