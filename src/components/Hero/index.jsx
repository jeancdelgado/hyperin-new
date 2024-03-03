import { HeroAnimatedSvg } from '../HeroSvgAnimatedComponent'


export const Hero = () => {
  return (
    <section id="hero">
      <div className="container hero">
        <div className="hero__text">
          <h2 className="hero__text-title">Shopping mall management made easy</h2>
          <p
            className="hero__text-subtitle"
            title="The all-in-one platform for retail real estate, delivering best-in-class shopping mall management and monetisation, tenant engagement, and seamless digital-physical consumer experiences."
          >
            The all-in-one platform for retail real estate, delivering best-in-class shopping mall
            management and monetisation, tenant engagement, and seamless digital-physical consumer
            experiences.
          </p>
          <button className="hero__text-button">
            Request A Demo
          </button>
        </div>
        <div className="hero__animated">
          <HeroAnimatedSvg />
        </div>
      </div>
    </section>
  )
}
