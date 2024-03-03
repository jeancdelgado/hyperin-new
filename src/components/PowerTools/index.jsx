import manage from "../../assets/HyperIn_Manage.svg"
import monetize from "../../assets/HyperIn_Monetize.svg"
import connect from "../../assets/HyperIn_Connect.svg"

export const PowerTools = () => {
  return (
    <div id="powerTools">
      <section className="service_section">
        <div className="container">
          <h2 className="alone-heading">Powerful alone. And even better together.</h2>
          <div className="main-services">
            <a className="services-card-1" href="#Manage">
              <div className="Manage_img">
                <img src={manage} />
              </div>
              <span>Manage</span>
              <p>Increase efficiency. Reduce manual work. </p>
            </a>
            {/* 2 */}
            <a className="services-card-1" href="#Monetize">
              <div className="Manage_img">
                <img src={monetize} />
              </div>
              <span>Monetize</span>
              <p>Increase profits. Create new advertisement sales. </p>
            </a>
            {/* 3 */}
            <a className="services-card-1" href="#Connect">
              <div className="Manage_img">
                <img src={connect} />
              </div>
              <span>Connect</span>
              <p>Increase footfall. Multi-channel communications. </p>
            </a>
          </div>
        </div>
      </section>
      <div className="border-botom"></div>
    </div>
  )
}
