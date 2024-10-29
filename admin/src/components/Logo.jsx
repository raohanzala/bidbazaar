import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/')} class="text-3xl font-bold tracking-wide text-[#4ed493]">
  BidBazaar
</div>
  )
}

export default Logo