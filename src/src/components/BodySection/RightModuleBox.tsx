import { data12Zodiac } from '@/utils/constraint'
import React from 'react'

const RightModuleBox = () => {
  const [data, setData] = React.useState<any>([data12Zodiac[0]])
  console.log(data)
  const hanldeClick = (item) => {
    const data = data12Zodiac.filter((item1) => item1.title === item)
    setData(data)
  }

  return (
    <div className="min-h-[300px] max-h-[600px] w-full bg-gray-700 mt-5 p-2">
      <div className="flex items-center justify-between">
        {data12Zodiac.map((item: any, index: any) => {
          return (
            <div
              // className="flex-1 mr-2 bg-gray-500 p-1"
              className={`text-sm flex-1 mr-1 p-1  ${
                item.title === data[0].title
                  ? 'bg-white'
                  : 'bg-gray-500 hover:bg-gray-500'
              }`}
              onClick={() => hanldeClick(item.title)}
            >
              <h1 className="text-[12px]">{item.title}</h1>
            </div>
          )
        })}
      </div>
      <div className="max-h-[500px] bg-white    overflow-y-scroll">
        {data.map((item: any, index: any) => {
          return (
            <div className="grid grid-cols-5 gap-2">
              <div className="col-span-2 mt-2 ml-2">
                {item.nameAnimal.map((item, index) => {
                  return (
                    <h1 className="mb-2" key={index}>
                      {item}
                    </h1>
                  )
                })}
              </div>
              <div className="col-span-1 mt-2">
                {item.column1.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-center rounded-full w-[27px] h-[27px] bg-gray-200 mb-2"
                      key={index}
                    >
                      <h1 className="flex items-center justify-center text-sm">
                        {item}
                      </h1>
                    </div>
                  )
                })}
              </div>
              <div className="col-span-1 mt-2">
                {item.column2.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-center rounded-full w-[27px] h-[27px] bg-gray-200 mb-2"
                      key={index}
                    >
                      <h1 className="flex items-center justify-center text-sm">
                        {item}
                      </h1>
                    </div>
                  )
                })}
              </div>
              <div className="col-span-1 mt-2">
                {item.column3.map((item, index) => {
                  return (
                    <div
                      className="flex items-center justify-center rounded-full w-[27px] h-[27px] bg-gray-200 mb-2"
                      key={index}
                    >
                      <h1 className="flex items-center justify-center text-sm">
                        {item}
                      </h1>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h1 className="text-white font-bold mt-2 ml-2">
          Ý nghĩa các con số từ 1 - 100 😘
        </h1>
      </div>
    </div>
  )
}

export default RightModuleBox
