import styles from "./HowToReceive.module.css";
import Button from "../Button/Button";
import img_1 from "../../assets/Therapist/Carousel/img_1.png";
import img_2 from "../../assets/Therapist/Carousel/img_2.png";
import img_3 from "../../assets/Therapist/Carousel/img_3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const imgs = [img_1, img_2, img_3];


const HowToReceive = () => {


  return (
    <div className={styles.container}>
      <h1>Como Usar a Pack:</h1>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{
        delay: 2500, 
        disableOnInteraction: false, 
      }}
      loop={true}
      navigation
      spaceBetween={50}
      slidesPerView={1}
    >
      {imgs.map((item, index) => (
        <SwiperSlide key={index}>
          <img className={styles.img_slide} src={item} />
        </SwiperSlide>
      ))}
    </Swiper>
      
      <Button>
        Sim, eu quero garantir meu pack agora mesmo!
      </Button>
    </div>
  );
};

export default HowToReceive;