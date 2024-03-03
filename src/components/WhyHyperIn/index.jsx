import { useState } from "react"
import shareTeamInboxes from "../../assets/share-team-inboxes.png"
import arrowActive from "../../assets/svgs/arrow-right-active.svg"
import arrow from "../../assets/svgs/arrow-right.svg"

export const WhyHyperIn = () => {
  const [activeTab, setActiveTab] = useState(1)

  return (
    <section id="whyHyperIn">
      <div className="container whyHyperIn">
        <h2 className="whyHyperIn__heading">Why HyperIn?</h2>
        <p className="whyHyperIn__description">
          Get a deposit account, credit card, and spend management software—in one refreshingly easy
          solution. No fees or minimums.
        </p>
        <div className="whyHyperIn__flexBox">
          <div className="whyHyperIn__flexBox-tabs">
            <div
              className={`whyHyperIn__tab ${activeTab === 1 ? "active" : ""}`}
              onClick={() => setActiveTab(1)}
            >
              <h4>Share team inboxes</h4>
              <p>
                Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the
                same page and in the loop.
              </p>
              <a href="#">
                <button>
                  <span>Learn more</span>
                  <img src={arrow} className="inactive" alt="inactive arrow" />
                  <img src={arrowActive} className="active" alt="active arrow" />
                </button>
              </a>
            </div>
            <div
              className={`whyHyperIn__tab ${activeTab === 2 ? "active" : ""}`}
              onClick={() => setActiveTab(2)}
            >
              <h4>Deliver instant answers</h4>
              <p>
                An all-in-one customer service platform that helps you balance everything your
                customers need to be happy.
              </p>
              <a href="#">
                <button>
                  <span>Learn more</span>
                  <img src={arrow} className="inactive" alt="inactive arrow" />
                  <img src={arrowActive} className="active" alt="active arrow" />
                </button>
              </a>
            </div>
            <div
              className={`whyHyperIn__tab ${activeTab === 3 ? "active" : ""}`}
              onClick={() => setActiveTab(3)}
            >
              <h4>Manage your team with reports</h4>
              <p>
                Measure what matters with Untitled’s easy-to-use reports. You can filter, export,
                and drilldown on the data in a couple clicks.
              </p>
              <a href="#">
                <button>
                  <span>Learn more</span>
                  <img src={arrow} className="inactive" alt="inactive arrow" />
                  <img src={arrowActive} className="active" alt="active arrow" />
                </button>
              </a>
            </div>
          </div>
          <div className="whyHyperIn__flexBox-dynamicImage">
            <img className={`${activeTab === 1 ? 'active': 'hidden'}`} src={shareTeamInboxes} alt="share team inboxes" />
            <img className={`${activeTab === 2 ? 'active': 'hidden'}`} src={shareTeamInboxes} alt="Deliver instant answers" />
            <img className={`${activeTab === 3 ? 'active': 'hidden'}`} src={shareTeamInboxes} alt="Manage your team with reports" />
          </div>
        </div>
      </div>
    </section>
  )
}
