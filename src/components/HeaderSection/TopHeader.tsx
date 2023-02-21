
const TopHeader = () => {
    return (
        <div className="bg-[#fff] px-5 md:px-64 w-full">
            <div className="w-full">
                <ul className="flex w-full md:text-[13px] text-[12px] space-x-1 text-gray-500 ">
                    <li>
                        <a href="">vesoonline.com</a>
                    </li>
                    <li className="border-r-2 border-l-2 px-1">
                        <a href="">doisotrung.com.vn</a>
                    </li>
                    <li>
                        <a href="">sanpham.minhchinh.com</a>
                    </li>
                    <li className=" flex-1  justify-end hidden md:flex">
                        Thay đổi thông tin vé dò
                        <a href="" className="text-blue-900"> Tại đây</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader