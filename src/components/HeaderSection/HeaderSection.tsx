import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Input from './input'

const HeaderSection = () => {
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
        <Input />
        <Input />
        <Input />

        <button className="bg-[#faad3a] text-white rounded-md h-[30px] w-[100px] uppercase md:my-2 md:mr-[8px]">
          Do ve so
        </button>
      </div>
      <div className="bg-[#faad3a] rounded block md:hidden w-[12%]">
        <div className="flex flex-col items-center m-0.5  justify-center text-white">
          <h1 className=" text-sm font-bold">Menu</h1>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </div>
      </div>
    </div>
  )
}

export default HeaderSection;