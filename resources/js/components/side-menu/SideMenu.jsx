import './sideMenu.style.css'
import React, { useEffect, useState } from 'react'
import Logo from '@components/logo/Logo'
import { Icon } from '@iconify/react'
export default function SideMenu() {
    const [isMenuActive, setIsMenuActive] = useState(true);
    useEffect(() => {
        if(!isMenuActive){
            document.documentElement.style.setProperty('--color-side-menu-margin', '77px');
        }else{
            document.documentElement.style.setProperty('--color-side-menu-margin', '277px');
        }
        return () => document.documentElement.style.removeProperty('--color-side-menu-margin');;
    }, [isMenuActive]);
    function handleOpenClose() {
        setIsMenuActive(!isMenuActive);
    }
    const menu = [
        {
            id: 1, title: "Home", subMenus: [
                { id: 11, title: "Dashboard", icon: "tabler:category-filled", },
                {
                    id: 12, title: "Menu Style", icon: "mage:filter-fill", subMenus: [
                        { id: 121, title: "test", icon: "", }
                    ]
                },
            ]
        },
        {
            id: 2, title: "Pages", subMenus: [
                {
                    id: 21, title: "Example", icon: "icon-park-solid:gamepad", subMenus: [
                        { id: 211, title: "test", icon: "", },
                        { id: 212, title: "test", icon: "", }
                    ]
                },
                {
                    id: 22, title: "Widgets", icon: "mdi:ticket", subMenus: [
                        { id: 221, title: "test", icon: "", }
                    ]
                },
                {
                    id: 23, title: "Maps", icon: "mdi:location", subMenus: [
                        { id: 231, title: "test", icon: "", }
                    ]
                },
                {
                    id: 24, title: "Authentication", icon: "solar:shield-check-bold", subMenus: [
                        { id: 241, title: "test", icon: "", }
                    ]
                },
                {
                    id: 25, title: "Users", icon: "fa-solid:users", subMenus: [
                        { id: 251, title: "test", icon: "", }
                    ]
                },
                {
                    id: 26, title: "Error 404", icon: "ic:baseline-error", subMenus: [
                        { id: 261, title: "test", icon: "", }
                    ]
                },
                {
                    id: 27, title: "Error 505", icon: "pajamas:warning-solid", subMenus: [
                        { id: 271, title: "test", icon: "", }
                    ]
                },
                {
                    id: 28, title: "Maintence", icon: "bi:bookmark-dash-fill", subMenus: [
                        { id: 281, title: "test", icon: "", }
                    ]
                },
            ]
        },
        {
            id: 3, title: "Elements", subMenus: [
                {
                    id: 31, title: "Components", icon: "solar:wallet-bold", subMenus: [
                        { id: 311, title: "test", icon: "", }
                    ]
                },
                {
                    id: 32, title: "Form", icon: "solar:document-bold", subMenus: [
                        { id: 321, title: "test", icon: "", }
                    ]
                },
                {
                    id: 33, title: "Table", icon: "fa6-solid:gear", subMenus: [
                        { id: 331, title: "test", icon: "", }
                    ]
                },
                {
                    id: 34, title: "Icons", icon: "bi:info-lg", subMenus: [
                        { id: 341, title: "test", icon: "", }
                    ]
                },
            ]
        },
    ]


    return (
        <aside className={'side-menu' + (!isMenuActive ? " side-menu--closed" : "")}>
            <div className='side-menu__header'>
                <button type='button'
                    onClick={() => handleOpenClose()}
                    className={'header__slide-btn' + (isMenuActive ? " header__slide-btn--closed" : "")}
                >
                    <Icon icon="line-md:arrow-left" fontSize={18} />
                </button>
                <Logo scale={0.5} />
                <span className='side-menu-title'>Hope UI</span>
            </div>
            <div className="side-menu__content">
                <Menu mainMenu={menu} isMenuActive={isMenuActive} />
            </div>
        </aside>
    )
}

// sub menu
function Menu({ mainMenu, isMenuActive }) {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    function handleMenuSelect(index) {
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
                <div className='menu-group__menu--title'>
                    {menu.icon ? <Icon icon={menu.icon} width={28} textAnchor='left' /> : ""}
                    <span >{menu.title}</span>
                </div>
                {
                    menu.subMenus &&
                    (<Icon icon="weui:arrow-filled"
                        className={selectedMenuSubIndex === index ? "active" : ""}
                    />)
                }
            </button>
            {menu.subMenus && (<div className='menu-group__sub-menu'>
                <SubMenu menuElem={menu.subMenus} />
            </div>)}
        </div>
    ))
    )
}
