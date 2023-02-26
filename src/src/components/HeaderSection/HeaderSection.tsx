import { faBars, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './input'
import React from 'react'
import {
  dataDauDuoi,
  dataDienToan,
  dataKQXSTruyenThong,
  dataThongKe,
  dataTrucTiep,
} from '@/utils/constraint'
const HeaderSection = () => {
  const [active, setActive] = React.useState(false)
  const handleClick = () => {
    setActive(!active)
  }
  return (
    <div className=" flex items-center justify-between xl:w-[100%]  lg:w-[80%] md:w-[90%] px-2 mt-2">
      <div className="left lg:w-1/2  md:w-[60%] w-[90%]">
        <img
          src="https://www.minhchinh.com/upload/images/logo_mc.png"
          alt="Logo"
          className=" lg:w-[80%] md:w-[65%] w-[70%] object-contain"
        />
      </div>
      <div
        className="md:flex md:items-center md:justify-center right lg:w-1/2  md:w-[35%] w-[10%] xl:flex items-center justify-center flex-wrap hidden  lg:bg-[#C8C8C8] lg:rounded-l-full lg:rounded-r-full xl:p-1  lg:px-1  md:rounded-md md:bg-white md:border-2 
      "
      >
        <input
          className="h-[30px] w-[100px] rounded-md mr-2 md:my-2 text-xs text-center text-black"
          placeholder="22-2-2023"
        />

        <select className="h-[30px] min-w-[100px] rounded-md mr-2 md:my-2 text-xs">
          <option value="1">Chọn tỉnh</option>
          <option value="2">Đà Nẵng</option>
          <option value="3">Cần Thơ</option>
          <option value="4">Hà Nội</option>
        </select>
        <input
          className="h-[30px] w-[100px] rounded-md mr-2 md:my-2 text-center text-sm "
          placeholder="Nhập số"
        />

        <button className="bg-[#faad3a] text-white rounded-md h-[30px] w-[100px] uppercase md:my-2 md:mr-[8px] ">
          Dò Vé Số
        </button>
      </div>
      <div
        className="bg-[#faad3a] rounded block md:hidden w-[12%] "
        onClick={handleClick}
      >
        <div className="flex flex-col items-center m-0.5  justify-center text-white">
          <h1 className=" text-sm font-bold">Menu</h1>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
        {active && (
          <div className="absolute top-20 left-0 right-0 bg-red-500 p-4 rounded-lg  last:border-none overflow-y-auto">
            <div className="flex items-center">
              <h1
                className="text-white pl-4 
                mb-2
              "
              >
                Truc tiep
              </h1>
              <FontAwesomeIcon
                icon={faSortDown}
                className=" ml-2 text-2xl mb-4 text-[#faad3a]"
              />
            </div>
            {dataTrucTiep.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div
                    className="bg-yellow-500 p-3 border-b-2 
                  border-white 
                  "
                  ><h1 className="text-white font-bold">{item.title}</h1>
                  </div>
                  {/* <h1 className="text-white">{item.time}</h1> */}
                </div>
              )
            })}
            <div className="flex items-center">
              <h1
                className="text-white pl-4 
                mb-2
              "
              >
                Truc tiep
              </h1>
              <FontAwesomeIcon
                icon={faSortDown}
                className=" ml-2 text-2xl mb-4 text-[#faad3a]"
              />
            </div>
            {dataKQXSTruyenThong.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div
                    className="bg-yellow-500 p-3 border-b-2 
                  border-white 
                  "
                  >
                    <h1 className="text-white font-bold">{item.title}</h1>
                  </div>
                  {/* <h1 className="text-white">{item.time}</h1> */}
                </div>
              )
            })}
            <div className="flex items-center">
              <h1
                className="text-white pl-4 
                mb-2
              "
              >
                Truc tiep
              </h1>
              <FontAwesomeIcon
                icon={faSortDown}
                className=" ml-2 text-2xl mb-4 text-[#faad3a]"
              />
            </div>
            {dataDienToan.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div
                    className="bg-yellow-500 p-3 border-b-2 
                  border-white 
                  "
                  >
                    <h1 className="text-white font-bold">{item.title}</h1>
                  </div>
                  {/* <h1 className="text-white">{item.time}</h1> */}
                </div>
              )
            })}
            <div className="flex items-center">
              <h1
                className="text-white pl-4 
                mb-2
              "
              >
                Truc tiep
              </h1>
              <FontAwesomeIcon
                icon={faSortDown}
                className=" ml-2 text-2xl mb-4 text-[#faad3a]"
              />
            </div>
            {dataDauDuoi.map((item) => {
              return (
                <div className="" key={item.id}>
                  <div
                    className="bg-yellow-500 p-3 border-b-2 
                  border-white 
                  "
                  >
                    <h1 className="text-white font-bold">{item.title}</h1>
                  </div>
                  {/* <h1 className="text-white">{item.time}</h1> */}
                </div>
              )
            })}
            <div className="flex items-center">
              <h1
                className="text-white pl-4 
                mb-2
              "
              >Truc tiep
              </h1>
              <FontAwesomeIcon
                icon={faSortDown}
                className=" ml-2 text-2xl mb-4 text-[#faad3a]"
              />
            </div>
            {dataThongKe.map((item,index) => {
              return (
                <div className="" key={item.id}>
                  <div
                    className="bg-yellow-500 p-3 border-b-2 
                  border-white 
                  "
                  >
                    <h1 className="text-white font-bold">{item.title}</h1>
                  </div>
                  {/* <h1 className="text-white">{item.time}</h1> */}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default HeaderSection