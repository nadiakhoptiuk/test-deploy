import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// import './styles.css';

import { EffectFade, Pagination, Autoplay } from 'swiper';
import Image from 'next/image';

export default function Slider({ images }) {
  return (
    <div>
      <Swiper
        className=""
        modules={[EffectFade, Pagination, Autoplay]}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {images.map(image => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                alt={image.title}
                src={image.image}
                width={image.width}
                height={image.height}
                className="md: h-[420px] object-cover sm:h-[380px] xl:h-[656px]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
