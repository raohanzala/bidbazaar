import React from 'react'
import SellerInfo from '../components/SellerInfo'
import SellerPostSection from '../components/SellerPostSection'
import SignupEmail from '../components/SignupEmail'

function SellerDetails() {
  return (
    <div className='w-full max-w-screen-md mx-auto py-10'>
        <SellerInfo/>
        <hr />

        <SellerPostSection/>
        <SignupEmail/>
    </div>
  )
}

export default SellerDetails