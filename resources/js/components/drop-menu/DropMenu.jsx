import './dropMenu.style.css';
import { Icon } from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'

export default function DropMenu({ menuIcon, dropMenuItems, title, ...options }) {
    const [isMenuActive, setIsMenuActive] = useState(false);
    function handleActiveDropMenu() {
        setIsMenuActive(!isMenuActive);
    }

    // Event Listener to close when not focused
    let dropMenuRef = useRef(null);
    useEffect(() => {
        const handleClickOutSide = function (e) {
            if (dropMenuRef && !dropMenuRef.current.contains(e.target)) {
                setIsMenuActive(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutSide)
        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [])

    return (
        <div
            className={`drop-menu ${isMenuActive ? "active" : ""}`}
            ref={dropMenuRef}
        >
            <button
                onClick={() => handleActiveDropMenu()}
                type="button"
            >
                <Icon icon={menuIcon} {...options} />
            </button>
            <ul className='drop-list'>
                {renderTitle(title)}
                {dropMenuItems.map(renderDropMenuItem)}
            </ul>
        </div>
    )
}

function renderTitle(title) {
    if (!title) return;
    return (<div className='drop-list__title'>
        {title}
    </div>
    )
}
function renderDropMenuItem(menuItem) {
    return (
        <li key={menuItem.id} className='drop-list__item'>
            {menuItem.item}
        </li>
    )
}
