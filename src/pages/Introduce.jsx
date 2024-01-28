import styled, { keyframes } from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { Icon, Title } from "../styles/share";
// #CFD0C9 #07A94C #628dc2

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  color: #fff;
  height: 100%;
  position: relative;
`;

const HighlightText = styled.span`
  color: #07a94c;
`;

const MainTitle = styled.h1`
  font-size: 70px;
  font-weight: 300;
`;

const Subtitle = styled.p`
  font-size: 21px;
  margin: 25px 0;
  color: #cfd0c9;
`;

const Circle = styled.div`
  width: 180px;
  height: 180px;
  border: 1px solid #a0a0a0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 100px;
  right: 0px;
`;

const Img = styled.img`
  width: 230px;
  height: auto;
  animation: ${rotate} 8s linear infinite;
  position: absolute;
`;

const Arrow = styled.button`
  font-size: 32px;
  background-color: transparent;
  border: none;
  color: #fff;
  z-index: 1;
`;

function Introduce() {
  return (
    <>
      <Container data-aos="fade-up" data-aos-duration="700">
        <Title>
          <Icon>
            <IoHomeOutline />
          </Icon>
          Introduce
        </Title>
        <MainTitle>
          안녕하세요. <br /> 프론트엔드 개발자,
          <br /> <HighlightText>김선미</HighlightText>입니다.
        </MainTitle>
        <Subtitle>
          아이디어를 현실로 만들고, 사용자의 경험을 향상시키는것에 집중합니다.
          <br />
          반복작업을 지양하고, 적극적인 소통을 지향합니다.
        </Subtitle>
        <Circle>
          <Img src="../images/font.png" alt="dd" />
          <Arrow>↓</Arrow>
        </Circle>
      </Container>
    </>
  );
}

export default Introduce;
