import React, { useState } from 'react'
import OrderProgress from '../components/OrderProgress'
import DeliveryProgress from '../components/DeliveryProgress'

function OrderDetails() {
  const [currentStep, setCurrentStep] = useState(0)

  const [role, setRole] = useState('buyer');

  return (
    <div className='w-full max-w-screen-lg mx-auto pt-[80px] pb-24'>
        <OrderProgress currentStep={currentStep}/>
        <DeliveryProgress setCurrentStep={setCurrentStep} role={role} setRole={setRole}/>
    </div>
  )
}

export default OrderDetails