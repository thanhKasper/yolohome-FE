import React from 'react'

const ActionList = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='flex flex-col gap-4 mt-6'>{children}</div>
  )
}

export default ActionList