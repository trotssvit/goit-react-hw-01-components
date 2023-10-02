import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  list-style: none;
  background-color: pink;
  justify-content: space-around;
  padding: 8px;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  width: 100%;
  text-align: center;
`;
