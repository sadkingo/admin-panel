import React, { useState } from 'react'

export default function Menu({ mainMenu, isMenuActive }) {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    function handleMenuSelect(index) {
        console.log(index);
        setSelectedMenuIndex(index)
    }
    return (
        mainMenu.map((menu, index) =>
            <div key={menu.id}
                onClick={() => { handleMenuSelect(index) }}
                className={`side-menu__section sub-menu ${index === selectedMenuIndex ? "selected" : ""}`}>
                <div className="sub-menu__title" > {isMenuActive ? menu.title : "-"}</div>
                <div className='sub-menu__menu-group'>
                    <SubMenu menuElem={menu.subMenus} />
                </div>
            </div>)
    )
}

function SubMenu({ menuElem }) {
    const [selectedMenuSubIndex, setSelectedMenuSubIndex] = useState(menuElem.map(() => false));
    const handleSelect = (index) => {
        if (index === selectedMenuSubIndex) {
            setSelectedMenuSubIndex(-1);
        } else {
            setSelectedMenuSubIndex(index);
        }
    };
    return (menuElem.map((menu, index) => (
        <div className={`menu-group${selectedMenuSubIndex === index ? " selected" : ""}`} key={menu.id}>
            <button className={`menu-group__menu${selectedMenuSubIndex === index ? " selected" : ""}`}
                onClick={() => handleSelect(index)}>
                {menu.icon ? <menu.icon /> : ""} <span>{menu.title}</span>
            </button>
            {menu.subMenus && (<div className='menu-group__sub-menu'>
                <SubMenu menuElem={menu.subMenus} />
            </div>)}
        </div>
    ))
    )
}

