import styled from "styled-components";

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 2rem;
`;
export const ListItems = styled.li`
  border-bottom: 1px solid #000;
  color: #000;
  padding: 1rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Typography = styled.h4`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`;
export const HeadTitle = styled.h6`
  color: #4a4a4a;
  font-size: 1.1rem;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
`;
export const HeadWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
