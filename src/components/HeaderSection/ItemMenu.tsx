import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
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

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            key={index} className={`${item.active ? 'text-yellow-300' : 'text-white'
                } menu-pc p-2 relative   text-sm font-semibold`}>
            {/* icon video */}
            <FontAwesomeIcon className='mx-1' icon={item.icon} />
            {item.title}
            {isShowModal && <ModalMain />}
        </li>
    )
}
export default ItemMenu;

const ModalMain = () => {
    return (
        <div className='absolute pt-5 left-0'>
            <div className='bg-green-600'>
                <h1>ok</h1>
            </div>
        </div>
    )
}