import styled, { keyframes } from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { HighlightText, Icon, Title } from "../styles/share";
import { Link } from "react-scroll";
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
  position: relative;
  max-width: 700px;
  width: 100%;
  margin: auto;
  padding: 90px 0px 90px 0px;

  @media (max-width: 1400px) {
    /* margin: 0; */
  }
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
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin-left: auto;
  background-color: #07a94c;
  margin-right: 30px;
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
  z-index: 1000;
`;

function Introduce() {
  return (
    <>
      <Container data-aos="fade-up" data-aos-duration="900">
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
        <Link to="Portfolio" smooth={true} duration={500}>
          <Circle>
            <Img src="../images/font.png" alt="dd" />
            <Arrow>↓</Arrow>
          </Circle>
        </Link>
      </Container>
    </>
  );
}

export default Introduce;
