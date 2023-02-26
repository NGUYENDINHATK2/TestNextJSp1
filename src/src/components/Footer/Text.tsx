import React from 'react'

const Text = () => {
  const [active, setActive] = React.useState(true)
  const hanldeClick = () => {
    setActive(!active)
  }
  return (
    <div className="flex items-center justify-between  border-b-2 border-red-600 md:border-none">
      <div>
        <h1
          className="text-red-600 md:font-bold text-xl md:text-sm cursor-pointer text-[15px] 
           
        "
          onClick={hanldeClick}
        >
          MINH CHINH LOTTERY
        </h1>
        <div
          className={`
              'md:block  '
              ${active ? 'hidden' : 'block'}
              md:block
            `}
        >
          <p className="text-sm ">Về Minh Chính Lottery</p>
          <p className="text-sm ">Định hướng phát triển</p>
          <p className="text-sm ">Thông tin khuyến mại</p>
          <p className="text-sm ">Đăng ký mở Vietlott</p>
        </div>
      </div>
    </div>
  )
}

export default Text