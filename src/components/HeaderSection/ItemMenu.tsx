import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useState } from "react"

const ItemMenu = ({ index, item }: any) => {

    const [isShowModal, setIsShowModal] = useState(false)

    const handleMouseEnter = () => {
        console.log('enter')
        setIsShowModal(true)
    }
    const handleMouseLeave = () => {
        console.log('leave')
        setIsShowModal(false)
    }
    React.useEffect(() => {
        console.log(item.listItem);
    }, [isShowModal])

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


    const renderItemListMenu = () => {
        return listMenu.map((item: any, index: number) => {
            return (
                <div key={index} className={` p-2 w-auto ${
                    listMenu.length - 1 === index ? '' : 'border-b border-yellow-700'
                } `}>
                    <h1 className='md:whitespace-nowrap px-2 text-white'>{item.title}</h1>
                </div>
            )
        })
    }

    return (
        <div className='absolute pt-5 left-0 w-auto z-50 '>
            <div className='bg-[#faad3a] rounded-md z-50'>
                {renderItemListMenu()}
            </div>
        </div>
    )
}