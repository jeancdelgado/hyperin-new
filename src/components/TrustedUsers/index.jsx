import brand1 from "../../assets/brands/brand1.png"
import brand2 from "../../assets/brands/brand2.png"
import brand3 from "../../assets/brands/brand3.png"
import brand4 from "../../assets/brands/brand4.png"
import brand5 from "../../assets/brands/brand5.png"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"

const brandList = [brand1, brand2, brand3, brand4, brand5, brand1, brand2, brand3, brand4, brand5]

function Carousel() {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={2500}
        className="mySwiper"
      >
        {brandList.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <CarouselItem brand={brand} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ brand }) => {
  return (
    <div key={brand} className="trustedUsers__brands-brand">
      <img src={brand} />
    </div>
  )
}


export const TrustedUsers = () => {
  return (
    <section id="trustedUsers">
      <div className="container trustedUsers">
        <h2 className="trustedUsers__title">Trusted by industry leaders</h2>
        <div className="trustedUsers__brands">
          <Carousel/>
        </div>
      </div>
    </section>
  )
}
