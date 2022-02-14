import styled from 'styled-components';
import { StyledComponentParamsProps } from './types';

export const AppContainer = styled.div`
  @media (min-width: 548px) {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(10px, auto) 2fr;
    grid-template-rows: 90px 1fr;
    gap: 10px;
    grid-template-areas: 'header header' 'messages details';
  }
  @media (max-width: 548px) {
    height: 100%;
    width: 100%;
    display: block;
    grid-template-rows: 90px 1fr;
    gap: 10px;
    grid-template-areas: 'header' 'messages';
  }
`;

export const MessagesListContainer = styled.div<StyledComponentParamsProps>`
  @media (min-width: 1150px) {
    gridarea: messages;
    maxwidth: 100vw;
    display: ${({ params }) => params?.messageId && 'block'};
  }
  @media (max-width: 1150px) {
    gridarea: messages;
    maxwidth: 100vw;
    display: ${({ params }) => params?.messageId && 'none'};
  }
`;
