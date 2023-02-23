import React from 'react'
import Input from './input'

const FormPrint = () => {
    return (
        <div>
            <div className="lg:block hidden">
                <div className="w-full bg-white border p-2 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                        <h5 className="text-gray-600 font-bold mr-2">In vé Dò</h5>
                        <select className="h-[30px] min-w-[100px] rounded-md mr-2 md:my-2 text-xs text-center">
                            <option value="1">Đà Nẵng</option>
                            <option value="2">Cần Thơ</option>
                            <option value="3">Hà Nội</option>
                        </select>
                        <p className="mr-1">-</p>
                        {/* <input
              className="h-[30px] w-[100px] rounded-md mr-2 md:my-2 text-sm text-center "
              placeholder="22-2-2023"
            /> */}
                        <input
                            type="date"
                            className="h-[30px] w-[115px] rounded-md mr-2 md:my-2 text-xs text-center "
                            value={new Date().toISOString().slice(0, 10)}
                        />
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-1">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-6 h-6 mr-2"
                            />
                            <h5 className="text-white font-bold">4 / A4</h5>
                        </div>
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-1 mx-2">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-6 h-6 mr-2"
                            />
                            <h5 className="text-white font-bold">4 / A4</h5>
                        </div>
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-1 ">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-6 h-6 mr-2"
                            />
                            <h5 className="text-white font-bold">4 / A4</h5>
                        </div>
                        <button className=" ml-2 rounded-2xl font-bold py-1 px-2 text-white  bg-[#faad3a]">
                            Cài đặt
                        </button>
                    </div>
                    <div className="flex items-center ">
                        <p className="text-gray-600 mr-2 font-bold">Hotline:</p>{' '}
                        <img src="https://file.kqxs.net/images/hotline.gif" alt="" />
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <div className="flex items-center bg-red-500 p-2">
                    <div className="w-1/2 mr-2">
                        <input
                            className="w-full h-8 rounded-md mb-2 text-center"
                            type="text"
                            placeholder="22-2-2023"
                        />
                        <input
                            className="w-full h-8 rounded-md text-center"
                            type="text" placeholder="Nhập số "
                        />
                    </div>
                    <div className="w-1/2">
                        <select className="w-full h-8 rounded-md  text-xs  mb-2">
                            <option value="volvo">Miền Bắc</option>
                            <option value="volvo">Đà Nẵng</option>
                            <option value="volvo">Đồng Nai</option>
                        </select>
                        <button className="w-full h-8 rounded-md m bg-[#faad3a] uppercase text-white font-bold text-md">
                            Do ve so
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPrint