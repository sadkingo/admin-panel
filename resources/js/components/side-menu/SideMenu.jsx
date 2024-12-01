import "./sideMenu.style.css";
import React, { useState } from "react";
import Logo from "@components/logo/Logo";
import { Icon } from "@iconify/react";
import { SIDE_BAR_MARGIN } from "@constants/marginConst";
const menu = [
    {
        id: 1,
        title: "Home",
        subMenus: [
            { id: 11, title: "Dashboard", icon: "tabler:category-filled" },
            {
                id: 12,
                title: "Menu Style",
                icon: "mage:filter-fill",
                subMenus: [{ id: 121, title: "test", icon: "" }],
            },
        ],
    },
    {
        id: 2,
        title: "Pages",
        subMenus: [
            {
                id: 21,
                title: "Example",
                icon: "icon-park-solid:gamepad",
                subMenus: [
                    { id: 211, title: "test", icon: "" },
                    { id: 212, title: "test", icon: "" },
                ],
            },
            {
                id: 22,
                title: "Widgets",
                icon: "mdi:ticket",
                subMenus: [{ id: 221, title: "test", icon: "" }],
            },
            {
                id: 23,
                title: "Maps",
                icon: "mdi:location",
                subMenus: [{ id: 231, title: "test", icon: "" }],
            },
            {
                id: 24,
                title: "Authentication",
                icon: "solar:shield-check-bold",
                subMenus: [{ id: 241, title: "test", icon: "" }],
            },
            {
                id: 25,
                title: "Users",
                icon: "fa-solid:users",
                subMenus: [{ id: 251, title: "test", icon: "" }],
            },
            {
                id: 26,
                title: "Error 404",
                icon: "ic:baseline-error",
                subMenus: [{ id: 261, title: "test", icon: "" }],
            },
            {
                id: 27,
                title: "Error 505",
                icon: "pajamas:warning-solid",
                subMenus: [{ id: 271, title: "test", icon: "" }],
            },
            {
                id: 28,
                title: "Maintence",
                icon: "bi:bookmark-dash-fill",
                subMenus: [{ id: 281, title: "test", icon: "" }],
            },
        ],
    },
    {
        id: 3,
        title: "Elements",
        subMenus: [
            {
                id: 31,
                title: "Components",
                icon: "solar:wallet-bold",
                subMenus: [{ id: 311, title: "test", icon: "" }],
            },
            {
                id: 32,
                title: "Form",
                icon: "solar:document-bold",
                subMenus: [{ id: 321, title: "test", icon: "" }],
            },
            {
                id: 33,
                title: "Table",
                icon: "fa6-solid:gear",
                subMenus: [{ id: 331, title: "test", icon: "" }],
            },
            {
                id: 34,
                title: "Icons",
                icon: "bi:info-lg",
                subMenus: [{ id: 341, title: "test", icon: "" }],
            },
        ],
    },
];

export default function SideMenu({ isMenuActive, setIsMenuActive }) {
    const sideBarStyleWidth = isMenuActive
        ? SIDE_BAR_MARGIN.OPENED
        : SIDE_BAR_MARGIN.CLOSED;

    return (
        <aside
            className={
                "side-menu" + (!isMenuActive ? " side-menu--closed" : "")
            }
            style={{ marginRight: sideBarStyleWidth, width: sideBarStyleWidth }}
        >
            {renderHeader()}
            <Menu menuItems={menu} isMenuActive={isMenuActive} />
        </aside>
    );

    function renderHeader() {
        return (
            <div className="side-menu__header">
                <button
                    type="button"
                    onClick={() => setIsMenuActive(!isMenuActive)}
                    className={
                        "header__slide-btn" +
                        (isMenuActive ? " header__slide-btn--closed" : "")
                    }
                >
                    <Icon icon="line-md:arrow-left" fontSize={18} />
                </button>
                <Logo scale={0.5} />
                <span className="side-menu-title">Hope UI</span>
            </div>
        );
    }
}

function Menu({ menuItems, isMenuActive }) {
    const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);

    function handleMenuSelect(index) {
        setSelectedMenuIndex(index);
    }

    return (
        <div className="side-menu__content">
            {menuItems.map(renderMenuItem)}
        </div>
    );

    function renderMenuItem(menu, index) {
        return (
            <div
                key={menu.id}
                onClick={() => {
                    handleMenuSelect(index);
                }}
                className={`side-menu__section sub-menu ${
                    index === selectedMenuIndex ? "selected" : ""
                }`}
            >
                <div className="sub-menu__title">
                    {isMenuActive ? menu.title : "-"}
                </div>
                <SubMenu menuItem={menu.subMenus} />
            </div>
        );
    }
}

function SubMenu({ menuItem }) {
    const [selectedMenuSubIndex, setSelectedMenuSubIndex] = useState(
        menuItem.map(() => false)
    );

    const handleSelect = (index) => {
        if (index === selectedMenuSubIndex) {
            setSelectedMenuSubIndex(-1);
        } else {
            setSelectedMenuSubIndex(index);
        }
    };

    return (
        <div className="sub-menu__menu-group">
            {menuElem.map(renderMenuItem)}
        </div>
    );

    function renderMenuItem(menu, index) {
        return (
            <div
                className={`menu-group${
                    selectedMenuSubIndex === index ? " selected" : ""
                }`}
                key={menu.id}
            >
                {renderMenuItemButton()}
                {renderSubMenuItems()}
            </div>
        );
    }

    function renderMenuItemButton() {
        return (
            <button
                className={`menu-group__menu${
                    selectedMenuSubIndex === index ? " selected" : ""
                }`}
                onClick={() => handleSelect(index)}
            >
                {renderMenuItemTitle()}
                {renderShowMoreIcon()}
            </button>
        );
    }

    function renderMenuItemTitle() {
        return (
            <div className="menu-group__menu--title">
                {menu.icon ? (
                    <Icon icon={menu.icon} width={28} textAnchor="left" />
                ) : (
                    ""
                )}
                <span>{menu.title}</span>
            </div>
        );
    }

    function renderShowMoreIcon() {
        if (!menu.subMenus) {
            return null;
        }

        return (
            <Icon
                icon="weui:arrow-filled"
                className={selectedMenuSubIndex === index ? "active" : ""}
            />
        );
    }

    function renderSubMenuItems() {
        if (!menu.subMenus) {
            return null;
        }

        return (
            <div className="menu-group__sub-menu">
                <SubMenu menuElem={menu.subMenus} />
            </div>
        );
    }
}
