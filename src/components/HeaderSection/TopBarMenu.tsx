import React from 'react'
import { dataTitlePC, dataTitleMobile } from '@/utils/constraint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faVideo } from '@fortawesome/free-solid-svg-icons'
import ItemMenu from './ItemMenu'
const TopBarMenu = () => {
  
  return (
    <div className='w-full'>
      {/* pc ipad */}
      <div className="w-full bg-red-600 my-2 rounded-md">
        <ul className="hidden md:flex xl:justify-between md:justify-start  justify-between items-center flex-wrap">
          {dataTitlePC.map((item, index) => (
            <ItemMenu key={index} item={item} />
          ))}
        </ul>
      </div>
      {/* mobile */}
      <div className="w-full flex md:hidden  my-2 rounded-md">
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

export default TopBarMenu;

