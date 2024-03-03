import { useState } from "react"
import whitepaper from "../../assets/hyperin_whitepaper.webp"

export const Announcements = () => {
  const [show, setShow] = useState(true)
  if(!show) return <></>
  return (
   <div id="announcements">
      <section className="header-section">
        <div className="container">
          <div className="top-header">
            <div className="hyperin_whitepaper_img">
              <img src={whitepaper} />
            </div>
            <div>
              <p className="title_p">Unlock Mall Management&apos;s Future!</p>
              <p className="descript_p">
                Download our whitepaper and stay ahead in commercial management!
              </p>
            </div>
            <div className="download_btn">
              <a
                href="https://www.hyperin.com/download-whitepaper.html"
                title="Learn more about our whitepaper"
                className="announcement-cta"
              >
                Download now!
              </a>
              <button className="cross-button" onClick={() => setShow(false)}>X</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}