import styled from 'styled-components';
import { StyledComponentParamsProps } from '../App/types';

export const MessageDetailedContainer = styled.div<StyledComponentParamsProps>`
  @media (min-width: 1119px) {
    display: block;
    height: calc(100vh - 90px);
    position: sticky;
    top: 30px;
  }
  @media (min-width: 0px) {
    display: ${({ params }) => (params.messageId ? 'block' : 'none')};
  }
`;

export const MessageDetailedPartOne = styled.div`
  @media (min-width: 575px) {
    padding: 20px 15px 25px 15px;
    display: grid;
    grid-template-columns: 40px 250px 1fr;
    grid-template-rows: 30px 1fr 1fr;
    gap: 10px;
    background: white;
    margin: 30px;
    margin-bottom: 0px;
  }
  @media (max-width: 575px) {
    padding: 20px 15px 25px 15px;
    display: grid;
    grid-template-columns: 40px minmax(150px, auto) 1fr;
    grid-template-rows: 30px 1fr 1fr;
    gap: 10px;
    background: white;
    margin: 30px;
    margin-bottom: 0px;
  }
`;
