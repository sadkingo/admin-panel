import './settingsSideBar.style.css'
import React, { useState } from 'react'
import exitX from '@images/icons/exit--x.svg'
import LightningIcon from '@images/icons/lightning.svg?react';
import MoonIcon from '@images/icons/moon.svg?react'
import SettingsIcon from '@images/icons/setting.svg?react'
import RtlImg from '@images/RTL.png'
import LtrImg from '@images/LTR.png'
import Mini from '@images/mini.png'
import HoverMini from '@images/hover-mini.png'
import BoxedSidebar from '@images/boxed-sidebar.png'
import RoundOneSide from '@images/round-one-side.png'
import RoundedAllSide from '@images/rounded-all-side.png'
import pillOneSide from '@images/pill-one-side.png'
import pillAllSide from '@images/pill-all-side.png'
import HeaderGlass from '@images/header-glass.png'
import HeaderColor from '@images/header-color.png'
import HeaderSticky from '@images/header-sticky.png'
import HeaderTransparent from '@images/header-transparent.png'


export default function SettingsSideBar() {
    const [isActiveSidebar, setIsActiveSidebar] = useState(false);

    function handleClose() {
        setIsActiveSidebar(false)
    }
    function handleOpen() {
        setIsActiveSidebar(true)
    }
    return (<>
        <button className="open-setting-gear"
            onClick={() => handleOpen()}
            style={{ display: isActiveSidebar ? "none" : "block" }}>
            <SettingsIcon />
        </button>
        <aside className={"sidebar-menu" + (isActiveSidebar ? "" : " sidebar-menu--disabled")}>
            <section className="sidebar-menu__head section">
                <h1 className='head__title'>Settings</h1>
                <button onClick={() => handleClose()} type='button' className="head__close">
                    <img width={24} height={24} src={exitX} alt="exit" />
                </button>
            </section>
            <hr />
            <div className='sidebar-menu__content content'>
                <section className="content__scheme section">
                    <h2 className="section__title">Scheme</h2>
                    <div className="section__btn-group">
                        <button type='button'><LightningIcon />Auto</button>
                        <button type='button'><MoonIcon />Dark</button>
                        <button type='button'><SettingsIcon />Light</button>
                    </div>
                </section>
                <hr />
                <section className="content__scheme-direction section">
                    <h2 className="section__title">Scheme Direction</h2>
                    <div className="scheme-direction">
                        <div className="content__scheme-direction--ltr" id="ltr">
                            <img src={LtrImg} alt="LTR" />
                            <label htmlFor="ltr">LTR</label>
                        </div>
                        <div className="content__scheme-direction--rtl" id="rtl">
                            <img src={RtlImg} alt="RTL" />
                            <label htmlFor="rtl">RTL</label>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="content__sidebar-color section">
                    <h2 className="section__title">Sidebar Color</h2>
                    <div className="section__btn-group btn-group">
                        <button type='button' className='btn-group__dark'>
                            <div className="circle-color circle-color--dark" />
                            Dark
                        </button>
                        <button type='button' className='btn-group__color'>
                            <div className="circle-color circle-color--color" />
                            Color
                        </button>
                        <button type='button' className='btn-group__white'>
                            <div className="circle-color circle-color--white" />
                            White
                        </button>
                        <button type='button' className='btn-group__transparent'>
                            <div className="circle-color circle-color--transparent" />
                            Transparent
                        </button>
                    </div>
                </section>
                <hr />
                <section className="content__sidebar-types section">
                    <h2 className="section__title">Sidebar Types</h2>
                    <div className="sidebar-types">
                        <div className="sidebar-types__style--mini" id="mini">
                            <img src={Mini} alt="mini" />
                            <label htmlFor="mini">Mini</label>
                        </div>
                        <div className="sidebar-types__style--hover" id="hover">
                            <img src={HoverMini} alt="hover" />
                            <label htmlFor="hover">Hover</label>
                        </div>
                        <div className="sidebar-types__style--boxed" id="boxed">
                            <img src={BoxedSidebar} alt="boxed" />
                            <label htmlFor="boxed">Boxed</label>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="content__sidebar-active-style section">
                    <h2 className="section__title">Sidebar Active Style</h2>
                    <div className="sidebar-active-style">
                        <div className="sidebar-active-style--rounded-one" id="roundedOne">
                            <img src={RoundOneSide} alt="roundedOne" />
                            <label htmlFor="roundedOne">Rounded One Side</label>
                        </div>
                        <div className="sidebar-active-style--rounded-all" id="roundedAll">
                            <img src={RoundedAllSide} alt="roundedAll" />
                            <label htmlFor="roundedAll">Rounded All Side</label>
                        </div>
                        <div className="sidebar-active-style--pill-one" id="pillOne">
                            <img src={pillOneSide} alt="pillOne" />
                            <label htmlFor="pillOne">Pill One Side</label>
                        </div>
                        <div className="sidebar-active-style--pill-all" id="pillAll">
                            <img src={pillAllSide} alt="pillAll" />
                            <label htmlFor="pillAll">Pill All Side</label>
                        </div>
                    </div>
                </section>
                <hr />
                <section className="content__navbar-style section">
                    <h2 className="section__title">Sidebar Active Style</h2>
                    <div className="navbar-style">
                        <div className="content__navbar-style--glass" id="glass">
                            <img src={HeaderGlass} alt="glass" />
                            <label htmlFor="glass">Glass</label>
                        </div>
                        <div className="content__navbar-style--color" id="color">
                            <img src={HeaderColor} alt="color" />
                            <label htmlFor="color">Color</label>
                        </div>
                        <div className="content__navbar-style--sticky" id="sticky">
                            <img src={HeaderSticky} alt="sticky" />
                            <label htmlFor="sticky">Sticky</label>
                        </div>
                        <div className="content__navbar-style--transparent" id="transparent">
                            <img src={HeaderTransparent} alt="transparent" />
                            <label htmlFor="transparent">Transparent</label>
                        </div>
                    </div>
                </section>
                <hr />
                <button className='sidebar-menu__reset-btn' type="button">Rest Default Settings</button>
            </div>
        </aside>
    </>)
}
