import styled from 'styled-components';
import img from 'images/HomePage/parking-825371_1280.jpg';

export const Section = styled.section`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: linear-gradient(
      to left,
      rgba(47, 48, 58, 0.1),
      rgba(47, 48, 58, 0.5)
    ),
    url(${img});
`;
