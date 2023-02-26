import React from 'react'
import BannerTop from './BannerTop'
import LeftListSection from './LeftListSection'
import Node from './Node'
import PageNav from './PageNav'
import Notifi from './Notifi'
import LiveLottery from './LiveLottery'
import ResultLiveLottery from './ResultLiveLottery'
import IntroXS from './IntroXS'
import LotteryStatistic from './LotteryStatistic'
const CenterSection = () => {

  

  return (
    <div className="flex-1   px-2 pt-5" >
      <BannerTop />
      <Node />
      <PageNav />
      <Notifi />
      <LiveLottery />
      <ResultLiveLottery />
      
      <IntroXS />
      <LotteryStatistic/>
      {/*  */}
    </div>
  )
}

export default CenterSection