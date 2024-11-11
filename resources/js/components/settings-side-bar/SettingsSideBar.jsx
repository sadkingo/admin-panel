import './settingsSideBar.style.css'
import React from 'react'

export default function SettingsSideBar() {
    return (
        <aside className='sidebar-menu'>
            <section className="sidebar-menu__head">
                <h1 className='head__title'>Settings</h1>
                <button type='button' className="head__close">X</button>
            </section>
            <section className="sidebar-menu__scheme section">
                <h2 className="section__title">Scheme</h2>
                <div className="section__btn-group">
                    <button type='button'>Auto</button>
                    <button type='button'>Dark</button>
                    <button type='button'>Light</button>
                </div>
            </section>
            <section className="sidebar-menu__scheme-direction section">
                <h2 className="section__title">Scheme Direction</h2>
                <div className="sidebar-menu__scheme-direction--ltr" id="ltr">
                    <label htmlFor="ltr">LTR</label>
                </div>
                <div className="sidebar-menu__scheme-direction--rtl" id="rtl">
                    <label htmlFor="rtl">RTL</label>
                </div>
            </section>
            <section className="sidebar-menu__sidebar-color section">
                <h2 className="section__title">Sidebar Color</h2>
                <div className="section__btn-group">
                    <button type='button'>Dark</button>
                    <button type='button'>Color</button>
                    <button type='button'>White</button>
                    <button type='button'>Transparent</button>
                </div>
            </section>
            <section className="sidebar-menu__sidebar-types section">
                <h2 className="section__title">Sidebar Types</h2>
                <div className="sidebar-menu__sidebar-types--mini" id="mini">
                    <label htmlFor="mini">Mini</label>
                </div>
                <div className="sidebar-menu__sidebar-types--hover" id="hover">
                    <label htmlFor="hover">Hover</label>
                </div>
                <div className="sidebar-menu__sidebar-types--boxed" id="boxed">
                    <label htmlFor="boxed">Boxed</label>
                </div>
            </section>
            <section className="sidebar-menu__sidebar-active-style section">
                <h2 className="section__title">Sidebar Active Style</h2>
                <div className="sidebar-menu__sidebar-active-style--rounded-one" id="roundedOne">
                    <label htmlFor="roundedOne">Rounded One Side</label>
                </div>
                <div className="sidebar-menu__sidebar-active-style--rounded-all" id="roundedAll">
                    <label htmlFor="roundedAll">Rounded All Side</label>
                </div>
                <div className="sidebar-menu__sidebar-active-style--pill-one" id="pillOne">
                    <label htmlFor="pillOne">Pill One Side</label>
                </div>
                <div className="sidebar-menu__sidebar-active-style--pill-all" id="pillAll">
                    <label htmlFor="pillAll">Pill All Side</label>
                </div>
            </section>
            <section className="sidebar-menu__navbar-style section">
                <h2 className="section__title">Sidebar Active Style</h2>
                <div className="sidebar-menu__navbar-style--glass" id="glass">
                    <label htmlFor="glass">Glass</label>
                </div>
                <div className="sidebar-menu__navbar-style--color" id="color">
                    <label htmlFor="color">Color</label>
                </div>
                <div className="sidebar-menu__navbar-style--sticky" id="sticky">
                    <label htmlFor="sticky">Sticky</label>
                </div>
                <div className="sidebar-menu__navbar-style--transparent" id="transparent">
                    <label htmlFor="transparent">Transparent</label>
                </div>
            </section>
            <button type="button">Rest Default Settings</button>
        </aside>
    )
}
