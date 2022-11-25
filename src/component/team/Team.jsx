import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/core";

import mansourKoura from "../../assest/winners/mansourKoura.jpg";
import YousefMohamed from "../../assest/winners/YousefMohamed.jpg";
import hassan from "../../assest/team/hassan.jpg";
import ahmedBahaa from "../../assest/team/ahmedBahaa.jpg";
import sahlSaad from "../../assest/team/sahlSaad.jpg";
import ahmedFathi from "../../assest/team/ahmedFathi.jpg";
import CardWinners from "../../tools/cardWinners/CardWinners";
import "./team.css";
//
// SwiperCore.use([EffectCoverflow, Pagination, Navigation]);
const Team = () => {
  return (
    <section className="team">
      <h1> فريق كالبنيان المرصوص</h1>

      <Swiper
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 500 ? 2 : 4}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <CardWinners
            image={ahmedFathi}
            name="أحمد فتحي"
            linkedInLink="https://www.linkedin.com/in/ahmedfathykhalid/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardWinners
            image={YousefMohamed}
            name="يوسف محمد"
            linkedInLink="https://www.linkedin.com/in/yousefdergham/"
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardWinners
            image={hassan}
            name="حسن محمود"
            linkedInLink="https://www.linkedin.com/in/hassan-mahmoud-0b8695173/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardWinners
            image={ahmedBahaa}
            name="أحمد بهاء"
            linkedInLink="https://www.linkedin.com/in/ahmed-bahaa-031929147/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardWinners
            image={sahlSaad}
            name="سهل سعد"
            linkedInLink="https://www.linkedin.com/in/sahl-saad/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardWinners
            image={mansourKoura}
            name="منصور قورة"
            linkedInLink="https://www.linkedin.com/in/manssorr/"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Team;
