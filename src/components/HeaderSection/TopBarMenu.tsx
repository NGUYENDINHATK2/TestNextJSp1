import React from 'react'
import { dataTitlePC } from '@/utils/constraint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faVideo } from '@fortawesome/free-solid-svg-icons'

const TopBarMenu = () => {
  return (
    <div className="w-full bg-red-600 my-2 p-1 rounded-md">
        <ul className="flex justify-between items-center">
            {dataTitlePC.map((item, index) => (
                <li key={index} className="text-white text-sm font-semibold">
                   {/* icon video */}
                   <FontAwesomeIcon icon={item.icon} />
                    {item.title}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TopBarMenu