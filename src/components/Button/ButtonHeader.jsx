import React from 'react'
import {ArrowLeft, Filter, Search } from 'lucide-react'

const ButtonHeader = () => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg flex items-center space-x-3">
    <button className='flex gap-8 bg-[#A06ECE] text-white rounded-[12px] p-5 w-full'>
        <ArrowLeft/>
        Beranda
        </button>
        <button className='border-2 border-[#7126B5] rounded-[16px] w-[96px] h-[32px] flex items-center p-4'>
            <div className='flex gap-1'>
                 <Filter color="#8A8A8A" strokeWidth={2} absoluteStrokeWidth />Filter
            </div>
        </button>
        <button>
        <Search size={32} color="#7126B5" strokeWidth={3} absoluteStrokeWidth />
        </button>
  </div>
  )
}

export default ButtonHeader
