import React from 'react'

const RightListSection = (props: any) => {
    const { title } = props
    return (
        <div
            className="w-full p-0 rounded pt-5"
        >
            {/* title */}
            <div className="w-full bg-red-600 overflow-hidden  rounded-t py-1.5 px-2 ">
                <h1 className=" font-bold text-white text-xl">{title}</h1>
            </div>
            {/* content */}
            {
                [1, 2, 3, 4, 5].map((item, index) => {
                    return (
                        <div key={index} className="w-full bg-gray-200 overflow-hidden  rounded-b p-1.5 px-2 flex border-b ">
                            <div className="border-b border-gray-400 flex w-full py-1">
                                <img src="https://www.minhchinh.com/upload/gallery/2023_02/110x76/thong-ke-xsmt(23).png" alt="" />
                                <div className='flex flex-1  '>
                                    {/* content */}
                                    <p className='text-[12px] font-bold'>
                                    Thống kê XSMT 22/02/2023 – Thống kê KQXS Miền Trung ngày 22/02/2023
                                    </p>
                                </div>
                            </div>

                        </div>
                    )
                })
            }

        </div>
    )
}

export default RightListSection