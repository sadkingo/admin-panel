import "./dashboard.style.css"
import SideMenu from "@components/side-menu/SideMenu"
import SettingsSideBar from "@components/settings-side-bar/SettingsSideBar"
import NavBar from "@components/nav-bar/NavBar"

export default function Dashboard() {

    return (<main className="dashboard">
        <SettingsSideBar />
        <SideMenu />
        <div className="dashboard-content">
            <NavBar />
        </div>
    </main>)
}

