
const TopHeader = () => {
    return (
        <div className="bg-[#f6f4f4] px-64">
            <div className="w-full">
                <ul className="flex w-full text-[13px] space-x-1 text-gray-500 ">
                    <li>
                        <a href="">vesoonline.com</a>
                    </li>
                    <li className="border-r-2 border-l-2 px-1">
                        <a href="">doisotrung.com.vn</a>
                    </li>
                    <li>
                        <a href="">sanpham.minhchinh.com</a>
                    </li>
                    <li className="flex flex-1  justify-end">
                        Thay đổi thông tin vé dò 
                        <a href="">Tại đây</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopHeader