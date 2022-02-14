import styled from 'styled-components';
import { StyledHeaderPartProps } from './types';

export const RightPartHeader = styled.div`
  @media (max-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 58px;
    background: ${({ count }: StyledHeaderPartProps) =>
      count === 0 ? '#AAAAAA' : '#0000ff'};
    padding: 8px;
    border-radius: 10px;
  }

  @media (min-width: 575px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 58px;
    margin: 0px 30px;
    background: ${({ count }: StyledHeaderPartProps) =>
      count === 0 ? '#AAAAAA' : '#0000ff'};
    padding: 8px;
    border-radius: 10px;
  }
`;
