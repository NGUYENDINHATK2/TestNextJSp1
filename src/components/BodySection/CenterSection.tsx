import React from 'react'
import BannerTop from './BannerTop'
import LeftListSection from './LeftListSection'
import Node from './Node'
import PageNav from './PageNav'
import Notifi from './Notifi'
import LiveLottery from './LiveLottery'
const CenterSection = () => {

  

  return (
    <div className="flex-1   px-2 pt-5" >
      <BannerTop />
      <Node />
      <PageNav />
      <Notifi />
      <LiveLottery />
      {/*  */}
    </div>
  )
}

export default CenterSection