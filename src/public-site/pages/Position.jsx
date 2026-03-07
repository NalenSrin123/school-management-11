import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Position = () => {
  return (
    <div>
      <div className='w-[95%] m-auto mt-5 h-auto'>
        <h1 className='text-3xl font-bold px-3'>Position Fields</h1>
        <div className='w-full h-[420px] mt-5 flex justify-between items-center gap-[10%] p-3'>
            <div className='w-[45%] h-full bg-cyan-500 rounded-2xl'>
                <img className='w-full h-full rounded-2xl object-cover' src="https://i.pinimg.com/736x/65/e1/a2/65e1a2e52a10c4e2a06b617460f88dff.jpg" alt=""/>
            </div>
            <div className='w-[45%] h-full bg-cyan-500 rounded-2xl'>
                <img className='w-full h-full rounded-2xl object-cover' src="https://i.pinimg.com/736x/bf/e0/3e/bfe03e87eacbed794ab1b58f567c00d1.jpg" alt=""/>
            </div>
        </div>
      </div>
      <div className='w-[95%] h-auto m-auto mt-2 flex justify-between items-center gap-[10%] p-2'>
        <div className='w-[45%] h-full flex flex-col px-2'>
            <h1 className='text-4xl font-bold text-yellow-600'>Backend Skills</h1>
            <ul className='flex flex-col mt-2'>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>PHP</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Database (MYSQL)</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>CRUD operations</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Authentication system</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>API development</li>
            </ul>
            <div className='w-full h-auto mt-4'>
                <button className='w-[180px] h-12 bg-blue-800 rounded-3xl text-[17px] text-white'>Get Certificate Now</button>
            </div>
        </div>
        <div className='w-[45%] h-full flex flex-col px-2'>
            <h1 className='text-4xl font-bold text-yellow-600'>Frontend Skills</h1>
            <ul className='flex flex-col mt-2'>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>HTML,CSS,JavaScript</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Frameworks (Bootstrap,React,Vue,etc.)</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Responsive Design</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>API Integration</li>
                <li className='text-[18px] font-bold flex gap-2 items-center'><i class="fa-regular fa-circle-check"></i>Fixing UI bugs</li>
            </ul>
            <div className='w-full h-auto mt-4'>
                <button className='w-[180px] h-12 bg-blue-800 rounded-3xl text-[17px] text-white'>Get Certificate Now</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Position
