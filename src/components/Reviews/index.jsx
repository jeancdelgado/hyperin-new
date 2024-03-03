import { Swiper, SwiperSlide } from "swiper/react"
import QuoteLeft from "../../assets/svgs/quote-left.svg"
import brandLogo from "../../assets/review-brandlogo.png"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper/modules"

const dummyCarouselData = [
  {
    content: `Nisi vivamus neque elementum, at pharetra. Cras gravida congue in tincidunt neque, ipsum
        egestas. Duis risus ipsum dis commodo. Enim euismod velit amet volutpat egestas urna in eget
        pellentesque.... Nisi vivamus neque elementum,`,
    logo: brandLogo,
    name: "Sasha Perry",
    designation: "3D Artist",
  },
  {
    content: `Nisi vivamus neque elementum, at pharetra. Cras gravida congue in tincidunt neque, ipsum
        egestas. Duis risus ipsum dis commodo. Enim euismod velit amet volutpat egestas urna in eget
        pellentesque.... Nisi vivamus neque elementum,`,
    logo: brandLogo,
    name: "Sasha Perry",
    designation: "3D Artist",
  },
  {
    content: `Nisi vivamus neque elementum, at pharetra. Cras gravida congue in tincidunt neque, ipsum
        egestas. Duis risus ipsum dis commodo. Enim euismod velit amet volutpat egestas urna in eget
        pellentesque.... Nisi vivamus neque elementum,`,
    logo: brandLogo,
    name: "Sasha Perry",
    designation: "3D Artist",
  },
  {
    content: `Nisi vivamus neque elementum, at pharetra. Cras gravida congue in tincidunt neque, ipsum
        egestas. Duis risus ipsum dis commodo. Enim euismod velit amet volutpat egestas urna in eget
        pellentesque.... Nisi vivamus neque elementum,`,
    logo: brandLogo,
    name: "Sasha Perry",
    designation: "3D Artist",
  },
]

export function Carousel() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        autoplay={{
          delay: 5000
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.3,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        }}
        keyboard={false}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
        loop={false}
      >
        {dummyCarouselData.map((carousel, idx) => (
          <SwiperSlide key={idx}>
            <CarouselItem {...carousel} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ content, logo, name, designation }) => {
  return (
    <div className="carouselItem">
      <img src={QuoteLeft} className="carouselItem__quoteIcon" alt="quote left" />
      <p>{content}</p>
      <div className="carouselItem__divider"></div>
      <div className="carouselItem__brandInfo">
        <img src={logo} alt="brand logo" />
        <div className="carouselItem__brandInfo-text">
          <h3>{name}</h3>
          <h4>{designation}</h4>
        </div>
      </div>
    </div>
  )
}

export const Reviews = () => {
  return (
    <section id="reviews">
      <div className="container reviews">
        <div className="reviews__text">
          <h2>What Our Clients Say About Us</h2>
          <p>
            Introducing our next-gen solution for shopping mall management: seamlessly integrated
            AI-driven analytics and Introducing our next-gen solution for shopping mall management:
            seamlessly integrated AI-driven analytics and
          </p>
        </div>
        <div className="reviews__carousel">
          {/* <CarouselItem/> */}
          <Carousel />
        </div>
      </div>
    </section>
  )
}
