import React from 'react'

const Button = ( {label,iconURl}) => {
  return (
    <>
      <button className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat
      text-lg leading-none bg-coral-red rounded-full text-white '>
      {label}

       <img src={iconURl} 
       alt="Arrow"
        className='ml-2 rounded-none-full
            w-5 h-5'

       />
      </button>
    </>
  )
}

export default Button
