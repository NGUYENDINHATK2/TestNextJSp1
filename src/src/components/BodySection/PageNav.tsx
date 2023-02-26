import React from 'react'

const PageNav = () => {
    const data = [
        {
            id: '1',
            date: '2021/08/01',
            dateMobile: '01/08',
        },
        {
            id: '2',
            date: '2021/08/02',
            dateMobile: '02/08',
        },
        {
            id: '3',
            date: '2021/08/02',
            dateMobile: '02/08',
        },
        {
            id: '4',
            date: '2021/08/02',
            dateMobile: '02/08',
        },
    ]
    const renderPageNav = () => {
        return data.map((item, index) => {
            return (
                <div key={index} className='flex  bg-red-700 py-2 px-0.5 rounded-md  justify-center items-center'>
                    <h1 className='text-xs text-white font-bold hidden md:block xl:block'>{item.date}</h1>
                    <h1 className='text-xs text-white font-bold md:hidden mx-2 xl:hidden'>{item.dateMobile}</h1>
                </div>
            )
        })
    }

    return (
        <div className='w-full py-2'>
            <div className='flex justify-between flex-wrap'>
                {renderPageNav()}
                <div className='flex  bg-yellow-300    rounded-md  justify-center items-center'>
                    <input
                        type="date"
                        className=" rounded-md p-0 h-full bg-yellow-300 text-white font-bold text-xs text-center "
                        value={new Date().toISOString().slice(0, 10)}
                    />
                </div>
            </div>
        </div>
    )
}

export default PageNav