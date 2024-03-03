/* eslint-disable react/prop-types */
export const PowerTool = ({title, description, link, image}) => {
  return (
    <div id="powerTool" >
      <section id={title} className="powertool-section">
        <div className="container">
          <div className="main_mange">
            <div className="mange_text">
            <h2 className="green">{title}</h2>
            <p>{description}</p>
            <a href={link} className="readmore" >Read more</a>
            </div>
            <div className="mange_img">
              <img src={image} />
            </div>
          </div>
        </div>
      </section>
      <div className="border-botom"></div>
    </div>
  )
}