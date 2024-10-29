import React from 'react'
import { FaRegClock, FaRegMoneyBillAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SeactionHeading from './SeactionHeading'
import TopSellersCard from './TopSellersCard'

function TopSellersSection() {
  return (
    <div className='py-12 '>
        <SeactionHeading heading='Top Sellers'/>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-7 '>
        <TopSellersCard/>
        <TopSellersCard/>
        <TopSellersCard/>
        <TopSellersCard/>
    </div>
    </div>
  )
}

export default TopSellersSection