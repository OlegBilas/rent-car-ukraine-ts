
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/navigation';

import {
  Container,
  Title,
  Name,
  SliderCard,
  ReviewContainer,
  CarInfo,
  Image,
} from './ReviewsSlider.styled';

import { useSelector } from 'react-redux';
import { selectCars } from 'redux/cars/selectors';
import { Car } from 'types/types.typed';



const ReviewsSlider = () => {
  const cars:Car[] = useSelector(selectCars);

  SwiperCore.use([Autoplay]);

  return (
    <Container>
      <Title>Our adverts</Title>
      <div>
        <Swiper
          initialSlide={1}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          direction={'horizontal'}
          autoHeight={true}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            1440: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
          }}
        >
          {cars.map(car => (
            <SwiperSlide key={car.id}>
              <SliderCard>
                <ReviewContainer>
                  <Image
                    src={car.img}
                    alt={`${car.make} ${car.model}, ${car.year}`}
                  />
                  <CarInfo>
                    <Name>{`${car.make} ${car.model}, ${car.year}`}</Name>
                  </CarInfo>
                </ReviewContainer>
              </SliderCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};
export default ReviewsSlider;
