import { openModal } from "@/store/modalSlice"
import { useDispatch, useSelector } from "react-redux"
import { MODAL_BODY_TYPES } from '@/utils/globalConstantUtil'
import Link from "next/link"
import { fetchUserDetail, setLoggedIn } from "@/store/userSlice"
import { useEffect } from "react"
import CircleStackIcon from '@heroicons/react/24/outline/CircleStackIcon'


function NavProfileLinks() {

  const dispatch = useDispatch()
  const { isLoggedIn, credits, token } = useSelector(state => state.user)

  useEffect(() => {
    if (token) {
      dispatch(fetchUserDetail())
    }
  }, [token])

  const openLoginModal = () => {
    console.log("jere")
    dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.SIGN_IN_MODAL, extraObject: { isSignIn: true } }))
  }

  const openPricingModal = () => {
    console.log("jere")
    dispatch(openModal({ title: "", size: "lg", bodyType: MODAL_BODY_TYPES.PRICING_MODAL, extraObject: { isLoggedIn, darkbg: true } }))
  }

  const logoutUser = async () => {
    // await axios.get(process.env.NEXT_PUBLIC_BASE_URL+'/user/logout')
    localStorage.clear();
    dispatch(setLoggedIn(false))
    window.location = '/'
  }

  const handleDropDownClick = () => {
    const elem = document.activeElement;
    if (elem) {
      elem?.blur();
    }
  };

  return (
    <>

      <Link href="/pricing"><button className='btn md:mt-0 mt-4 btn-block btn-sm text-xs btn-outline normal-case hover:text-white hover:btn-primary'>Verify Certificate / Student </button></Link>

    </>
  )
}


export default NavProfileLinks
