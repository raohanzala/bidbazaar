import React from 'react'
import Logo from './Logo'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'

function AboutSection() {

    const navigate = useNavigate()

  return (

    <div className='grid gap-5 grid-cols-2 py-8'>

        <div>
            <h2 className='text-4xl font-semibold mb-6'>Whats is BidBazaar?</h2>
            
            <p className='text-lg text-[#555] mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, repellendus. Tempore harum natus beatae nobis iure sint qui veniam magnam ducimus voluptatibus! Placeat molestiae quia non voluptatibus cupiditate aspernatur delectus, qui labore dolor aliquid, voluptatem in saepe quas porro, itaque voluptate repellendus atque culpa! Minima.</p>
            {/* <Link to='/about' className='text-[#4ED493] hover:underline'>Read More &rarr;</Link> */}
            <button onClick={()=>navigate('/about')} type="submit" className="bg-gradient-to-r from-[#4ED493] to-[#4bc1b2] flex items-center gap-2 hover:from-[#4bc1b2] hover:to-[#4ED493] border-none text-[#fff] rounded-full py-2 px-4 font-semibold text-md shadow-sm">Read More <span><FaArrowRightLong/></span> </button>
        </div>

        <div className='flex items-center justify-center border shadow-md'>
            <Logo/>
        </div>

    </div>
  )
}

export default AboutSection