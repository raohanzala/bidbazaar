import React from 'react'

function SeactionHeading({heading}) {
  return (
    <div className='flex w-full justify-center mb-8'>
        <h2 className='text-center uppercase font-semibold text-[#333] text-3xl'>{heading}</h2>
    </div>
  )
}

export default SeactionHeading