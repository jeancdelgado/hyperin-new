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
				{/*<PowerTools />*/}
				{/*{powerToolsList.map(tool => (*/}
				{/*	<PowerTool key={tool.title} {...tool} />*/}
				{/*))}*/}
				<PowerTool />
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
