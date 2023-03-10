import React from 'react'
import Input from './input'

const FormPrint = () => {
    return (
        <div>
            <div className="lg:block hidden">
                <div className="w-full bg-white border p-2 rounded-md flex items-center justify-between">
                    <div className="flex items-center">
                        <h5 className="text-gray-600 font-bold mr-2">In ve do</h5>
                        <Input />
                        <p className="mr-2">-</p>
                        <Input />
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-2">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-7 h-7 mr-2"
                            />
                            <h5 className="text-white">4 / A4</h5>
                        </div>
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-2 mx-2">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-7 h-7 mr-2"
                            />
                            <h5 className="text-white">4 / A4</h5>
                        </div>
                        <div className="flex items-center bg-[#1E93C9]  rounded-md py-[1px] px-2 ">
                            <img
                                src="https://www.minhchinh.com/template/images/printer_green.png"
                                alt=""
                                className="w-7 h-7 mr-2"
                            />
                            <h5 className="text-white">4 / A4</h5>
                        </div>
                        <button className=" ml-2 rounded-2xl py-1 px-2 text-white  bg-[#faad3a]">
                            Cai dat
                        </button>
                    </div>
                    <div className="flex items-center ">
                        <p className="text-gray-600 mr-2 font-bold">Hotline:</p>{' '}
                        <img src="https://file.kqxs.net/images/hotline.gif" alt="" />
                    </div>
                </div>
            </div>
            <div className="md:hidden block">
                <h1>cc</h1>
            </div>
        </div>
    )
}

export default FormPrint