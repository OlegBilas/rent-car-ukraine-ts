import { useEffect, useState } from 'react';

import {
  Info,
  ListItem,
  StyledLabel,
  StyledNumber,
  Title,
  TitleWrapper,
} from 'components/Description/Description.styled';

const Description = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Title>Get your car now!</Title>
      <ul>
        <ListItem className={loaded ? 'loaded' : undefined}>
          <TitleWrapper>
            <StyledNumber>1.</StyledNumber>
            <StyledLabel>Dream Car</StyledLabel>
          </TitleWrapper>
          <Info>
            Get your car now. With us, everyone will be able to choose a car
            that suits their taste and wallet
          </Info>
        </ListItem>
        <ListItem className={loaded ? 'loaded' : undefined}>
          <TitleWrapper>
            <StyledNumber>2.</StyledNumber>
            <StyledLabel>Processing Speed</StyledLabel>
          </TitleWrapper>
          <Info>
            We have no bureaucracy. Formalities take a minimum of time and all
            so that after 30 minutes you can enjoy a trip in a comfortable car
          </Info>
        </ListItem>
        <ListItem className={loaded ? 'loaded' : undefined}>
          <TitleWrapper>
            <StyledNumber>3.</StyledNumber>
            <StyledLabel>Safety</StyledLabel>
          </TitleWrapper>
          <Info>
            For your safety, our cars undergo regular technical inspection.
            Plus, all cars are insured. All this cases are for aid of nothing
            upsets you during the trip!
          </Info>
        </ListItem>
      </ul>
    </>
  );
};

export default Description;
