import styles from './Feedback.module.css';

import img_1 from '../../assets/feedback/feedback_1.png';
import img_2 from '../../assets/feedback/feedback_2.png';
import img_3 from '../../assets/feedback/feedback_3.png';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa os estilos básicos do Swiper
import "swiper/css/navigation"; // Importa os estilos de navegação
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

const Feedback = () => {

  const data = [
    { id: "1", image: img_1 },
    { id: "2", image: img_2 },
    { id: "3", image: img_3 },
  ];


  return (
    <div className={styles.container}>
        <h1>Veja o que outros mecânicos estão falando:</h1>
        <Swiper
        modules={[Navigation, Pagination, Autoplay]} 
        autoplay={{delay: 4000, disableOnInteraction: false, reverseDirection: false}}
        navigation
        loop={true} 
        spaceBetween={30} 
        slidesPerView={1} 
      >
        {data.map(({ id, image }) => (
          <SwiperSlide key={id}>
            {<div className={styles.images}>
              <img src={image} />
            </div>}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Feedback;