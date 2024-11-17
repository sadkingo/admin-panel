import './sideMenu.style.css'
import React, { useState } from 'react'
import Logo from '@components/logo/Logo'
import LeftArrow from '@images/icons/arrow-left.svg?react'
import Category from '@images/icons/category.svg?react'
import Menu from '@components/menu/menu'
export default function SideMenu() {
    const [isMenuActive, setIsMenuActive] = useState(true)
    function handleOpenClose() {
        setIsMenuActive(!isMenuActive);
    }
    const menu = [
        {
            id: 1, title: "Home", subMenus: [
                { id: 11, title: "Dashboard", icon: Category, },
                {
                    id: 12, title: "Menu Style", icon: Category, subMenus: [
                        { id: 121, title: "test", icon: "", }
                    ]
                },
            ]
        },
        {
            id: 2, title: "Pages", subMenus: [
                {
                    id: 21, title: "Example", icon: Category, subMenus: [
                        { id: 211, title: "test", icon: "", },
                        { id: 212, title: "test", icon: "", }
                    ]
                },
                {
                    id: 22, title: "Widgets", icon: Category, subMenus: [
                        { id: 221, title: "test", icon: "", }
                    ]
                },
                {
                    id: 23, title: "Maps", icon: Category, subMenus: [
                        { id: 231, title: "test", icon: "", }
                    ]
                },
                {
                    id: 24, title: "Authentication", icon: Category, subMenus: [
                        { id: 241, title: "test", icon: "", }
                    ]
                },
                {
                    id: 25, title: "Users", icon: Category, subMenus: [
                        { id: 251, title: "test", icon: "", }
                    ]
                },
                {
                    id: 26, title: "Error 404", icon: Category, subMenus: [
                        { id: 261, title: "test", icon: "", }
                    ]
                },
                {
                    id: 27, title: "Error 505", icon: Category, subMenus: [
                        { id: 271, title: "test", icon: "", }
                    ]
                },
                {
                    id: 28, title: "Maintence", icon: Category, subMenus: [
                        { id: 281, title: "test", icon: "", }
                    ]
                },
            ]
        },
        {
            id: 3, title: "Elements", subMenus: [
                {
                    id: 31, title: "Components", icon: Category, subMenus: [
                        { id: 311, title: "test", icon: "", }
                    ]
                },
                {
                    id: 32, title: "Form", icon: Category, subMenus: [
                        { id: 321, title: "test", icon: "", }
                    ]
                },
                {
                    id: 33, title: "Table", icon: Category, subMenus: [
                        { id: 331, title: "test", icon: "", }
                    ]
                },
                {
                    id: 34, title: "Icons", icon: Category, subMenus: [
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
                    <LeftArrow />
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

