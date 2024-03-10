import { useState } from "react"
import CheckIcon from '@heroicons/react/24/outline/CheckIcon'
import Link from "next/link"
import { MODAL_BODY_TYPES } from "@/utils/globalConstantUtil"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { openModal } from "@/store/modalSlice"

const freePointers = [
  "2 months long traning",
  "50 live class",
  "50+-/ live Job facility "
]

const advancePointers = [

  " 3 months long traning",
  "64 live class",
  "64+-/ live Job facility ",
  "Four Exam ",
  "Private seesion with our mentor"


]

const professionalPointers = [
  " 1.5 month long traning",
  "40 live class",
  "39+-/ live Job facility ",


]

const NormalPointers = [
  "2 month long traning",
  "50 live class",
  "50+-/ live Job facility ",


]




function PricingPlans() {

  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")
  const { isLoggedIn } = useSelector(state => state.user)
  const dispatch = useDispatch()

  const openPaymentPage = async (paymentType) => {
    if (!isLoggedIn) {
      dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }))
      return 1;
    }
    setLoading(true)
    console.log("Handle payment here")
    setLoading(false)
  }

  const [toggleActive, setToogleActive] = useState(true)


  return (
    <>
      <div className='grid md:grid-cols-3 grid-cols-1 mt-2 w-full gap-8'>


        <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body pt-12 pb-16  items-center text-center ">
            <h2 className="card-title text-xl">1G-To-6G</h2>
            <h2 className="font-bold mt-4 text-4xl">37000 taka</h2>
            <Link href='/start-designing' className="w-full"><button className="btn !hover:text-white hover:bg-primary btn-sm mt-8 w-full  btn-outline normal-case ">Start Your Jounery</button></Link>

            <ul className="text-left mt-4">
              {
                freePointers.map((p, k) => {
                  return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" />  {p}</li>
                })
              }
            </ul>
          </div>
        </div>


        <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body pt-12 pb-16 items-center  ">
            <div className="badge badge-secondary badge-sm absolute text-white mt-1 ml-1 left-2 top-2">Most Popular</div>
            <h2 className="card-title text-xl text-center">1G-To-TIG </h2>
            <h2 className="font-bold mt-4 text-4xl text-center inline-block">{toggleActive ? `60000 taka` : `$8`} {toggleActive && <span className="text-xl line-through text-secondary align-middle mr-2"></span>}<span className="text-xs align-middle font-light text-slate-500"></span></h2>
            <button className="btn btn-sm mt-8 btn-primary normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
            <ul className="text-left mt-4">
              {
                advancePointers.map((p, k) => {
                  return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                })
              }
            </ul>
          </div>
        </div>




        <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body pt-12 pb-16 items-center  ">
            <h2 className="card-title text-xl text-center">1G-To-MIG </h2>
            <h2 className="font-bold mt-4 text-4xl text-center inline-block">{toggleActive ? `35000 taka` : `$15`} {toggleActive && <span className="text-xl line-through text-secondary align-middle mr-2"></span>}<span className="text-xs align-middle font-light text-slate-500"></span></h2>
            <button className="btn btn-sm mt-8 btn-outline normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
            <ul className="text-left mt-4">
              {
                professionalPointers.map((p, k) => {
                  return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                })
              }
            </ul>
          </div>
        </div>
        <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body pt-12 pb-16 items-center  ">
            <h2 className="card-title text-xl text-center"> Electrician   </h2>
            <h2 className="font-bold mt-4 text-4xl text-center inline-block">{toggleActive ? `30000 taka` : `$15`} {toggleActive && <span className="text-xl line-through text-secondary align-middle mr-2"></span>}<span className="text-xs align-middle font-light text-slate-500"></span></h2>
            <button className="btn btn-sm mt-8 btn-outline normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
            <ul className="text-left mt-4">
              {
                NormalPointers.map((p, k) => {
                  return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                })
              }
            </ul>
          </div>
        </div>
        <div className="card w-full mt-6  bg-base-100 shadow-xl hover:shadow-2xl">
          <div className="card-body pt-12 pb-16 items-center  ">
            <h2 className="card-title text-xl text-center"> Plumber   </h2>
            <h2 className="font-bold mt-4 text-4xl text-center inline-block">{toggleActive ? `30000 taka` : `$15`} {toggleActive && <span className="text-xl line-through text-secondary align-middle mr-2"></span>}<span className="text-xs align-middle font-light text-slate-500"></span></h2>
            <button className="btn btn-sm mt-8 btn-outline normal-case w-full" onClick={() => openPaymentPage("SUBSCRIPTION")}>Subscribe</button>
            <ul className="text-left mt-4">
              {
                NormalPointers.map((p, k) => {
                  return <li key={k} className="mt-2"><CheckIcon className="w-4 h-4 text-green-500 inline-block" /> {p}</li>
                })
              }
            </ul>
          </div>
        </div>


      </div>
    </>
  )

}


export default PricingPlans
