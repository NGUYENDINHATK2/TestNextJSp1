import React from 'react'

interface Props {
    children: React.ReactNode
}

const Header = (props: Props) => {
    const { children } = props
    return (
        <div className="flex justify-between items-center">
            {children}
        </div>
    )
}

export default Header