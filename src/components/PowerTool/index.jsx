/* eslint-disable react/prop-types */
import shoppingImage from "../../assets/HyperIn_Shopping.jpg";
import Reservation_Calendar from "../../assets/Reservation_Calendar.webp";
import hyperin_Connect from "../../assets/hyperin_Connect.webp";
import manage from "../../assets/HyperIn_Manage.svg";
import monetize from "../../assets/HyperIn_Monetize.svg";
import connect from "../../assets/HyperIn_Connect.svg";

import { Link, Element } from 'react-scroll';

export const PowerTool = ({title, description, link, image}) => {

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

	return (
		<div className="d-flex flex-column">
			<div id="powerTools">
				<section className="service_section">
					<div className="container">
						<h2 className="alone-heading">Powerful alone. And even better together.</h2>
						<div className="main-services">
							<Link className="services-card-1" to="Manage" smooth={true} duration={500} spy={false}>
								<div className="Manage_img">
									<img alt="Manage" src={manage} />
								</div>
								<span>Manage</span>
								<p>Increase efficiency. Reduce manual work. </p>
							</Link>
							{/* 2 */}
							<Link className="services-card-1" to="Monetize" smooth={true} duration={500} spy={false}>
								<div className="Manage_img">
									<img alt="Monetize" src={monetize} />
								</div>
								<span>Monetize</span>
								<p>Increase profits. Create new advertisement sales. </p>
							</Link>
							{/* 3 */}
							<Link className="services-card-1" to="Connect" smooth={true} duration={500} spy={false}>
								<div className="Manage_img">
									<img alt={`Connect`} src={connect} />
								</div>
								<span>Connect</span>
								<p>Increase footfall. Multi-channel communications. </p>
							</Link>
						</div>
					</div>
				</section>
				<div className="border-botom"></div>
			</div>
			<div className={`d-flex flex-column`}>
				{powerToolsList.map(item => (
					<div id="powerTool">
						<Element name={item.title}>
							<section id={item.title} className="powertool-section">
								<div className="container">
									<div className="main_mange">
										<div className="mange_text">
											<h2 className="green">{item.title}</h2>
											<p>{item.description}</p>
											<a href={item.link} className="readmore" >Read more</a>
										</div>
										<div className="mange_img">
											<img alt={item.title} src={item.image} />
										</div>
									</div>
								</div>
							</section>
							<div className="border-botom"></div>
						</Element>
					</div>
				))}
			</div>
		</div>
	)
}