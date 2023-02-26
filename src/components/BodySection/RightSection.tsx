import React, { useState } from 'react'
import LeftListSection from './LeftListSection'
import RightListSection from './RightListSection';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


const RightSection = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="w-[30%]  hidden xl:block px-2 pt-5  ">
      <Calendar onChange={onChange} value={value} />
      <LeftListSection />
      <ImageBanner src="https://www.minhchinh.com/upload/images/banner/xoay90.png" alt="" />
      <ImageBanner src="https://file.kqxs.net/upload/images/banner/dat-ve-kien-thiet-2.gif" alt="" />
      <RightListSection title={"THỐNG KÊ XỔ SỐ"}/>
      <RightListSection title={"TIN NỔI BẬT"}/>
      <ImageBanner src="https://file.kqxs.net/upload/images/banner/minh-chinh-coffee.gif" alt="" />
    </div>
  )
}

export default RightSection

const ImageBanner = ({ src }: any) => {
  return (
    <div className='mt-5'>
      <img src={src} alt="" />
    </div>
  )
}