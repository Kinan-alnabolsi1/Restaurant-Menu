import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Updated import
import 'swiper/css';
import 'swiper/css/autoplay';
import image1 from "../assets/CreamSoup.jpg";
import image2 from "../assets/KababChicken.jpg";
import image3 from "../assets/Chickensliceswithsauce.jpg";
import image4 from "../assets/yalanje.jpg";

const Swipe = () => {
  return (
    <div className="">
      <div className=" flex justify-center items-center ">
        <Swiper
          className="mySwiper"
          spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="w-screen flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "95%",
                  height: "100%",
                  minHeight: "300px",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-screen flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${image2})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "95%",
                  height: "100%",
                  minHeight: "300px",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" w-screen flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${image3})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "95%",
                  height: "100%",
                  minHeight: "300px",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-screen flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${image4})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "95%",
                  height: "100%",
                  minHeight: "300px",
                  borderRadius: "10px",
                }}
              ></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Swipe;