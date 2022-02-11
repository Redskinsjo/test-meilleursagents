import styled from 'styled-components';

interface IMessageProps {
  read: boolean;
}

export const MessageContainer = styled.div<IMessageProps>`
  display: grid;
  grid-template-columns: 29px 1fr 100px;
  grid-template-rows: minmax(10px, auto) 1em minmax(10px, 1.9em);
  gap: 11px;
  width: 550px;
  padding: 20px 5px;
  border-right: 2px solid #c7c7c7;
  border-bottom: 2px solid #c7c7c7;
  color: ${({ read }) => read && '#979797'};
`;

export const MessageDate = styled.div<IMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${({ read }) => !read && '#0000ff'};
`;

export const MessageIcon = styled.div<IMessageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: ${({ read }) => !read && '#0000ff'};
`;
