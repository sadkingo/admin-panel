import "./dashboard.style.css"
import SideMenu from "@components/side-menu/SideMenu"
import SettingsSideBar from "@components/settings-side-bar/SettingsSideBar"

export default function Dashboard() {

    return (<main className="dashboard">
        <SettingsSideBar />
        <SideMenu />
    </main>)
}

