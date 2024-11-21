import "./navBar.style.css";
import React from 'react';
import { Icon } from "@iconify/react";
export default function NavBar() {

    console.log(Icon.render({ icon: "fluent-emoji-flat:man-mage" }).props)
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
            <li className="nav-menu__item nav-menu__lang">
                <button type="button">
                    <Icon icon="emojione:flag-for-united-kingdom" height={"90%"} />
                </button>
            </li>
            <li className="nav-menu__item">
                <button type="button">
                <Icon icon="solar:bell-bold-duotone" height={"85%"} />
                </button>
            </li>
            <li className="nav-menu__item">
                <button type="button">
                <Icon icon="lets-icons:message-alt-duotone" height={"85%"} />
                </button>
            </li>
            <li className="nav-menu__item nav-menu__profile-pic">
                <button type="button">
                <Icon icon="fluent-emoji-flat:man-mage" height={"100%"} />
                </button>
            </li>
        </div>
    </ul>)
}
