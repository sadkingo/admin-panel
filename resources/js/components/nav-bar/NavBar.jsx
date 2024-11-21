import "./navBar.style.css";
import React from 'react';
import { Icon } from "@iconify/react";
import DropMenu from "@components/drop-menu/DropMenu";
export default function NavBar() {
    const langItems = [
        { id: 1, item: renderDropDownItems("twemoji:flag-algeria", "Arabic") },
        { id: 2, item: renderDropDownItems("twemoji:flag-spain", "Spanish") },
        { id: 3, item: renderDropDownItems("twemoji:flag-germany", "German") },
    ]
    const notificationsItems = [
        { id: 1, item: renderDropDownItems("mage:box-3d-notification-fill", "Your password has ben changed") },
        { id: 2, item: renderDropDownItems("mage:box-3d-notification-fill", "Spanish") },
        { id: 3, item: renderDropDownItems("mage:box-3d-notification-fill", "German") },
    ]
    const messagesItems = [
        { id: 1, item: renderDropDownItems("iconoir:message-solid", "Your password has ben changed") },
        { id: 2, item: renderDropDownItems("iconoir:message-solid", "Message have ben received from sadking.") },
        { id: 3, item: renderDropDownItems("iconoir:message-solid", "Lorem ipsum dolor sit amet consectetur adipisicing elit.") },
    ]
    const profileItems = [
        { id: 1, item: renderDropDownItems("", "Profile") },
        { id: 2, item: renderDropDownItems("", "LogOut") },
    ]

    return (<ul className="nav-menu">
        <li className="nav-menu__item-1">
            <form className="search-form" action="#">
                <button type="submit">
                    <Icon icon="si:search-duotone" width={24} color="var(--color-subtitle)" />
                </button>
                <input className="search-input" name="search" id="search" type="text" placeholder={"Search..."}>

                </input>
            </form>
        </li>
        <div className="nav-menu__group">
            <li className="nav-menu__item">
                <DropMenu
                    menuIcon={"emojione:flag-for-united-kingdom"}
                    dropMenuItems={langItems}
                    height={"90%"}
                />
            </li>
            <li className="nav-menu__item">
                <DropMenu
                    title={"Notifications"}
                    menuIcon={"solar:bell-bold-duotone"}
                    dropMenuItems={notificationsItems}
                    height={"85%"}
                />
            </li>
            <li className="nav-menu__item">
                <DropMenu
                    title={"Messages"}
                    menuIcon={"lets-icons:message-alt-duotone"}
                    dropMenuItems={messagesItems}
                    height={"85%"}
                />
            </li>
            <div className="profile-menu">
                <li className="nav-menu__item nav-menu__profile-pic">
                    <DropMenu
                    menuIcon={"fluent-emoji-flat:man-mage"}
                    dropMenuItems={profileItems}
                    height={"100%"}
                />
                </li>
                <li className="nav-menu__item profile-name-role">
                    <p className="profile-name-role__name">Austin Robertson</p>
                    <p className="profile-name-role__role">Marketing Administrator</p>
                </li>
            </div>
        </div>
    </ul>)
}

const renderDropDownItems = function (icon, text) {
    return (<>
        <Icon height={30} icon={icon} />
        <span>{text}</span>
    </>)
}
