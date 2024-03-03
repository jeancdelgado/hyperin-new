import "./App.scss"
import {
  Achievements,
  // Announcements,
  CallToAction,
  DemoRequest,
  Footer,
  Hero,
  Navbar,
  PowerTool,
  PowerTools,
  Reviews,
  TrustedUsers,
  WhyHyperIn,
} from "./components"

import shoppingImage from "./assets/HyperIn_Shopping.jpg"
import Reservation_Calendar from "./assets/Reservation_Calendar.webp"
import hyperin_Connect from "./assets/hyperin_Connect.webp"
import { useEffect, useState } from "react"

const powerToolsList = [
  {
    title: "Manage",
    description:
      "An integrated tool to administrate all your tenants and consumer information and communication as well as sales reporting, contracts, marketing, footfall and all other key numbers and statistics in just one place.",
    link: "",
    image: shoppingImage,
  },
  {
    title: "Monetize",
    description:
      "Sell all the advertising and promotional spaces of your shopping mall online. Whether on your digital screens, speciality leasing places, voice commercials or websites, you will generate more revenue.",
    link: "",
    image: Reservation_Calendar,
  },
  {
    title: "Connect",
    description:
      "Targeting the right consumer traffic with the right type of message on the web, on the location wayfinding and, on mobile loyalty app gives you a competitive advantage across your retail real estate.",
    link: "",
    image: hyperin_Connect,
  },
]

function App() {
  const [isVisible, setIsVisible] = useState(true)
  const [showMenu, setShowMenu] = useState(false)
  
  let lastScrollY = window.scrollY

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false) // Scroll down, hide the header
      } else {
        setIsVisible(true) // Scroll up, show the header
      }
      lastScrollY = window.scrollY
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  

  return (
    <div id="bodyClone">
      <header className={`${isVisible || showMenu? 'visible': 'hidden'}`}>
        {/* <Announcements /> */}
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
      </header>
      <main>
        <Hero />
        <TrustedUsers />
        <Achievements />
        <PowerTools />
        {powerToolsList.map(tool => (
          <PowerTool key={tool.title} {...tool} />
        ))}
        <CallToAction />
        <Reviews />
        <WhyHyperIn />
        <DemoRequest />
      </main>
      <Footer />
    </div>
  )
}

export default App
