import styled from 'styled-components';

export const TitleWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #121417;
`;

export const Title = styled.h2`
  margin-right: auto;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Model = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;
