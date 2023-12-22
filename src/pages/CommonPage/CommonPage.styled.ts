import styled from 'styled-components';
import { calcFontSize } from 'utils';

export const LoadMoreBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;

  color: #3470ff;
  background-color: inherit;
  border: none;

  font-size: ${({ theme }) => calcFontSize('16px', theme.width)};
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus,
  &:hover {
    background-color: inherit;
    color: rgba(11, 68, 205, 1);
    transform: scale(1.1);
  }
`;
