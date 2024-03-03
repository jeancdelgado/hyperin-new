
import { useEffect } from "react"
import logo from "../../assets/svgs/logo.svg"
import menu from "../../assets/svgs/navbar-menu.svg"

// eslint-disable-next-line react/prop-types
export const Navbar = ({showMenu, setShowMenu}) => {


  const handleShowMenu = () => {
    setShowMenu(prev => !prev)
  }

  useEffect(() => {
    function handleCloseMenu() {
      if(window.innerWidth > 800) {
        setShowMenu(false)
      }
    }
  
    window.addEventListener('resize', handleCloseMenu)
    
    return () => {
      window.removeEventListener('resize', handleCloseMenu)
    }
  }, [])
  

  return (
    <section id="navbar">
      <div className="container">
        <img src={logo} id="logo" alt="logo" />
        <nav>
          <ul className={`navbar_menu ${showMenu ? "show" : ""}`}>
            <li className="active">
              <a href="#">Platform</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li className="secondary-button">
              <a href="#">Contact Us</a>
            </li>
          </ul>

          <img src={menu} onClick={handleShowMenu} id="menu" alt="menu" className="mobile-menu" />
          <button className="secondary-button mobile-menu">
            <a href="#">Contact Us</a>
          </button>
        </nav>
      </div>
    </section>
  )
}
