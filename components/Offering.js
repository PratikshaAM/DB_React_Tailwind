import React from 'react'
import Dailymeal from '../assets/dailymeal.png'
import Privilegemeal from '../assets/Privilegemeal.png';
function Offering() {
  return (
    <div>
        <h1 className='text-3xl my-4
         ml-5  font-medium'>OUR OFFERINGS</h1>

        <div className='mt-5 h-[500px] flex'>

        <div className=' bg-pink-600 ml-12 rounded-tl-2xl w-80 h-96 flex flex-col' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY MEALS</p>
            <img className='flex mb-1 py-6' src={Privilegemeal}/>
        </div>
        
        <div className=' bg-pink-600 ml-12 rounded-tl-2xl w-80 h-96 flex flex-col' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY MEALS</p>
            <img className='flex mb-1 py-6' src={Privilegemeal}/>
        </div>

         <div className=' bg-pink-600 ml-12 rounded-tl-2xl w-80 h-96 flex flex-col' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY MEALS</p>
            <img className='flex mb-1 py-6' src={Privilegemeal}/>
        </div>

        <div className=' bg-pink-600 ml-12 rounded-tl-2xl w-80 h-96 flex flex-col' >
            <p className='text-6xl  text-white  pt-4 pl-4 font-bold'>HEALTHY MEALS</p>
            <img className='flex mb-1 py-6' src={Privilegemeal}/>
        </div>  
        
    </div>
   
        
        
    
    </div>
  )
}

export default Offering;