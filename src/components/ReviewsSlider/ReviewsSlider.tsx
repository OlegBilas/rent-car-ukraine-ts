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

import { selectCars } from 'rdx/cars/selectors';
import { Car } from 'types/types';
import { useAppSelector } from 'hooks';
import { substitudeImages } from 'utils';
import { useTheme } from 'styled-components';

const ReviewsSlider = () => {
  let cars: Car[] = useAppSelector(selectCars);
  const theme = useTheme();
  cars = substitudeImages(cars, 274, theme.width);

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
                    height={204}
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
