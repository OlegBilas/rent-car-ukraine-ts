import styled from 'styled-components';

export const LineList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  justify-content: start;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;

  & > li {
    padding-left: 6px;
    padding-right: 6px;
    white-space: nowrap;
    border-right: 1px solid rgba(18, 20, 23, 0.1);
  }
  & > li:first-child {
    padding-left: 0px;
  }
  & > li:last-child {
    padding-right: 0px;
    border-right: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
