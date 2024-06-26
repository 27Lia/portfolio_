import styled from "styled-components";

export const Container = styled.div`
  overflow: auto;
  padding: 90px 0px;
  max-width: 700px;
  margin: auto;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 12px;
  }
`;
export const Button = styled.button`
  width: 50px;
  height: 50px;
  font-size: 16px;
  border-radius: 50%;
  border: 2px solid #cfd0c9;
  background-color: transparent;
  color: #cfd0c9;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100%;
  }
  &:hover,
  &:hover a {
    border-color: #07a94c;
    color: #07a94c;
  }
`;

export const Title = styled.h5`
  border-radius: 30px;
  padding: 9px 20px;
  border: 1px solid #fff;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 50px;
`;

export const Icon = styled.h4`
  margin-right: 8px;
`;
export const MainTitle = styled.div`
  font-size: 42px;
  font-weight: 300;
  margin-bottom: 30px;
  color: #fff;
`;

export const HighlightText = styled.span`
  color: #07a94c;
`;
