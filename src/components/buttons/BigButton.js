import React from 'react'

function BigButton({title}) {
  return (
    <button className='bg-[#FC7008] hover:bg-[#FD8F3A] duration-700 px-[35px] py-[22px] rounded-md uppercase text-[24px] leading-[1] text-[#030303] font-[600]'>
        {title}
    </button>
  )
}

export default BigButton