import React from 'react'

import LeftListSection from './LeftListSection'

const LeftSection = () => {
    return (
        <div className="w-2/12 md:w-1/5  hidden xl:block md:block px-1 ">
            <LeftListSection />
            <LeftListSection />
            <Banner url={"https://file.kqxs.net/upload/images/banner/diem-ban-hang-minh-chinh.gif"} />
            <Banner url={"https://file.kqxs.net/upload/images/banner/doi-so-trung-minh-chinh.gif"}/>
            <Banner url={"https://file.kqxs.net/upload/images/banner/bat-dong-san-minh-chinh.gif"} />
            <Banner url={"https://file.kqxs.net/upload/images/banner/ket-qua-dien-toan.gif"}/>
        </div>
    )
}

export default LeftSection;


const Banner = ({url}:any) => {
    return (
        <div className="w-full h-[350px] mt-5 ">
            <img src={url} className="w-full h-full" />
        </div>
    )
}