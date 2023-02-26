import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import React from "react"
import { useState } from "react"

const ItemMenu = ({ index, item }: any) => {

    const [isShowModal, setIsShowModal] = useState(false)

    const handleMouseEnter = () => {
        setIsShowModal(true)
    }
    const handleMouseLeave = () => {
        setIsShowModal(false)
    }
    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={index} className={`${item.active ? 'text-yellow-300' : 'text-white'
                } menu-pc p-2 relative   text-sm font-semibold`}>
            {/* icon video */}
            <FontAwesomeIcon className='mx-1' icon={item.icon} />
            {item.title}
            {isShowModal && <ModalMain listMenu={
                item.listItem ? item.listItem : []
            } />}
        </li>
    )
}
export default ItemMenu;

const ModalMain = ({ listMenu }: any) => {

    const [isShowModalMnini, setIsShowModalMini] = useState(false)

    const renderItemListMenu = () => {
        return (
            <ul className={` h-full  '}
                } `}>
                {
                    listMenu.map((item: any, index: number) => (
                        <ItemModalMain key={index} index={index} item={item} isEnd={listMenu.length - 1 === index} />
                    ))
                }
            </ul>
        )
    }

    return (
        <div className='absolute pt-5 left-0 w-auto z-50 '>
            <div className='bg-[#faad3a] rounded-md z-50 '>
                {renderItemListMenu()}
            </div>
        </div>
    )
}

const ItemModalMain = ({ index, item, isEnd }: any) => {
    const [isShowModalMnini, setIsShowModalMini] = useState(false)
    return (
        <li
            onMouseEnter={() => setIsShowModalMini(true)}
            onMouseLeave={() => setIsShowModalMini(false)}
            className={` ${isEnd ? '' : 'border-b border-yellow-700'
                }relative  p-2 w-auto h-full flex  items-center justify-between hover:bg-[#d3e7a446]`}>
            <h1 className='md:whitespace-nowrap px-2  text-white'>{item.title}</h1>
            {
                item.titleMini ? (
                    <FontAwesomeIcon className='mx-1' icon={faCircleArrowRight} />
                ) : null
            }
            {
                item.titleMini && isShowModalMnini ? <ModalMini
                    index={index}
                    item={item.titleMini}
                /> : null
            }
        </li>
    )
}

const ModalMini = ({ index, item }: any) => {
    return (
        // modal in right tag li
        <div className='absolute top-5
        left-[100%] w-auto z-50  pl-3 
        '>
            <div className='bg-[#faad3a] rounded-md z-50  '>
                {
                    item?.map((item: any, index: number) => (
                        <li key={index} className='relative  p-2 w-auto h-full flex  items-center justify-between hover:bg-[#d3e7a446]'>
                            <h1 className='md:whitespace-nowrap px-2  text-white'>{item?.title}</h1>
                        </li>
                    ))
                }
            </div>
        </div>
    )
}