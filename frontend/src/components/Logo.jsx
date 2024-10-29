import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logo() {
    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate('/')} class="text-3xl font-bold tracking-wide bg-gradient-to-r from-[#4ED493] to-[#4bc1b2] bg-clip-text text-transparent">
  BidBazaar
</div>
  )
}

export default Logo