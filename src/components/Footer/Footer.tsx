import React from 'react'

const Footer = () => {
  const [active, setActive] = React.useState(false)
  const hanldeClick = () => {
    setActive(!active)
  }
  return (
    <div className="w-full bg-[#e3dfc9] min-h-[200px]b lg:px-64 md:flex md:flex-row  flex flex-col ">
      <div className="left md:w-[70%] md:px-2 md:border-r-2 md:border-red-600 w-full mt-2" >
        <div className="md:flex md:justify-between md:items-center" >
          <div className="flex flex-col " >
            <h1 className="text-red-600 font-bold text-xl md:text-sm" onClick={hanldeClick}>MINH CHINH LOTTERY</h1>
            {/* <p className = {
            active ? "text-sm md:block hidden" : " hidden"
            // "text-sm md:block hidden"
          }>Về Minh Chính Lottery</p> */}
            <p className={`
            ${active ? "text-sm md:block" : " hidden"}
           "text-sm md:block"
          `}>Về Minh Chính Lottery</p>
            {/* <p className = "text-sm md:block hidden">Định hướng phát triển</p>
          <p className = "text-sm md:block hidden">Thông tin khuyến mại</p>
          <p className = "text-sm md:block hidden">Đăng ký mở Vietlott</p> */}
          </div>
          <div className="flex flex-col" >
            <h1 className="text-red-600 font-bold text-xl md:text-sm">MINH CHINH LOTTERY</h1>
            <p className="text-sm md:block hidden">Về Minh Chính Lottery</p>
            {/* <p className = "text-sm md:block hidden">Định hướng phát triển</p>
          <p className = "text-sm md:block hidden">Thông tin khuyến mại</p>
          <p className = "text-sm md:block hidden">Đăng ký mở Vietlott</p> */}
          </div>
          <div className="flex flex-col" >
            <h1 className="text-red-600 font-bold text-xl md:text-sm">MINH CHINH LOTTERY</h1>
            <p className="text-sm md:block hidden">Về Minh Chính Lottery</p>
            {/* <p className = "text-sm md:block hidden">Định hướng phát triển</p>
          <p className = "text-sm md:block hidden">Thông tin khuyến mại</p>
          <p className = "text-sm md:block hidden">Đăng ký mở Vietlott</p> */}
          </div>
        </div>
        <div className="border-t-2 border-red-600 my-2 md:block hidden" >
        </div>
        <div className="flex" >
          <div className="flex-1" >
            <h1 className="text-red-600 font-bold text-xl md:text-sm">CÔNG TY TNHH MINH CHÍNH LOTTERY</h1>
            <h6 className="text-sm">
              Giấy phép kinh doanh số: 0314000089

              Địa chỉ: 39 Đường số 4, Cityland, P.5, Q.Gò Vấp

              Văn phòng: 229 Nguyễn Văn Nghi, P.7, Q.Gò Vấp

              Tổng đài: 028 99990007 - Hotline: 090 9990007

              Email: info@minhchinhlottery.com

            </h6>
            Website: <span className="text-red-600">www.minhchinhlottery.com</span>
          </div>
          {/* <img src = "https://www.minhchinh.com/images/boxMap.png" alt = "" className = "flex-1"/> */}
        </div>
      </div>
      <div className="right w-[30%]  flex flex-col pl-2 mt-2"  >
        <h1 className="text-red-600 font-bold">KẾT NỐI CỘNG ĐỒNGc</h1>
        <img src="https://f23-zpc.zdn.vn/344545933701644225/45b09cef650abf54e61b.jpg" alt="" className="cursor-pointer" />
      </div>
    </div>
  )
}

export default Footer