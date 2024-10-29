import React from 'react'
import SeactionHeading from './SeactionHeading'
import { FaShippingFast } from 'react-icons/fa'
import { Ri24HoursLine } from 'react-icons/ri'
import { MdPayments } from 'react-icons/md'
import { AiOutlineSafetyCertificate } from 'react-icons/ai'

function ServiceSection() {
  return (
    <div className='py-10'>
        <SeactionHeading heading='Our Services'/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-5xl text-[#95e5be]'>
                <FaShippingFast/>
                </div>
                <h4 className='text-2xl'>Fast Shipping</h4>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-5xl text-[#95e5be]'>
                <Ri24HoursLine  />
                </div>
                <h4 className='text-2xl'>24/7 Support</h4>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-5xl text-[#95e5be]'>
                <MdPayments />
                </div>
                <h4 className='text-2xl'>Online payment</h4>
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <div className='text-5xl text-[#95e5be]'>
                <AiOutlineSafetyCertificate/>
                </div>
                <h4 className='text-2xl'>100% Safe</h4>
            </div>
        </div>
    </div>
  )
}

export default ServiceSection