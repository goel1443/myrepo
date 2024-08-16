import React from 'react'

const container = ({children}) => {
  return (
    <div className='w-full max-w-[1280px] mx-auto px-4'>
        {children}
    </div>
  )
}

export default container