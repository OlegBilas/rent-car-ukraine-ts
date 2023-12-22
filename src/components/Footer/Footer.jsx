import React from 'react';
import { FooterWrapper, GithubIcon, GithubLink } from './Footer.styled';

const Footer = () => {
  return (
    <FooterWrapper>
      <GithubLink
        href="https://github.com/OlegBilas"
        target="_blank"
        rel="noopener noreferrer"
        className="active-burron"
      >
        <GithubIcon />
        Designed by Oleg Bilas
      </GithubLink>
    </FooterWrapper>
  );
};

export default Footer;
