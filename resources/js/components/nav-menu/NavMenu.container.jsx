import NavMenu from "./NavMenu.component";

function NavMenuContainer({ isMenuActive, setIsMenuActive }) {
    return (
        <NavMenu
            isMenuActive={isMenuActive}
            setIsMenuActive={setIsMenuActive}
        />
    )
}

export default NavMenuContainer;
