import React from 'react'
import { dataTitlePC, dataTitleMobile } from '@/utils/constraint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faVideo } from '@fortawesome/free-solid-svg-icons'

const TopBarMenu = () => {
  return (
    <div>
      {/* pc ipad */}
      <div className="w-full bg-red-600 my-2 rounded-md">
        <ul className="hidden md:flex xl:justify-between md:justify-start  items-center flex-wrap">
          {dataTitlePC.map((item, index) => (
            <li key={index} className={`${item.active ? 'text-yellow-300' : 'text-white'
              } p-2   text-sm font-semibold`}>
              {/* icon video */}
              <FontAwesomeIcon className='mx-2' icon={item.icon} />
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="w-full  my-2 rounded-md">
        <ul className="flex xl:justify-between md:justify-start  items-center flex-wrap">
          {dataTitleMobile.map((item, index) => (
            <li key={index} className={`${item.active ? 'text-yellow-300' : 'text-white'
              } p-2 flex w-1/5 mt-1  text-sm font-semibold bg-red-600 justify-center`}>
              {/* icon video */}
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TopBarMenu