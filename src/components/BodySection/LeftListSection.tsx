import React from 'react'

const LeftListSection = () => {
    return (
        <div
            className="w-full p-0 rounded pt-5"
        >
            {/* title */}
            <div className="w-full bg-gray-800 overflow-hidden  rounded-t p-1.5 ">
                <h1 className=" font-bold text-white text-xs text-center">Tuong Thuat truc tiep</h1>
            </div>
            {/* content */}
            {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => {
                    return (
                        <div className="w-full bg-gray-200 overflow-hidden  rounded-b p-1.5 px-2 flex ">
                            <h1 className="  text-sm ">Xo so mien nam</h1>
                            <img
                                className="w-5 h-5 ml-auto"
                                src="https://la-solargroup.com/wp-content/uploads/2019/02/loading-icon.gif" alt="" />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default LeftListSection