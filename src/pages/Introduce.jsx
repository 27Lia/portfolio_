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
  padding-top: 90px;
`;

const MainTitle = styled.h1`
  font-size: 70px;
  /* font-size: 3.7vw; */
  font-weight: 300;

  @media (max-width: 700px) {
    font-size: 37px;
  }
`;

const Subtitle = styled.p`
  font-size: 19px;
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
  cursor: pointer;
`;

const Arrow = styled.button`
  font-size: 32px;
  background-color: transparent;
  border: none;
  color: #fff;
  z-index: 1000;
  cursor: pointer;
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
          <HighlightText>사용자 참여 1만 명</HighlightText>이 넘는 서비스를
          성공적으로 기획하고 개발한 프론트엔드 개발자로서, 효율적인 개발
          프로세스와 사용자 경험 최적화에 중점을 두고 개발합니다.
        </Subtitle>
        <Link to="Portfolio" smooth={true} duration={500}>
          <Circle>
            <Img src="../images/font.png" alt="projetcbutton" />
            <Arrow>↓</Arrow>
          </Circle>
        </Link>
      </Container>
    </>
  );
}

export default Introduce;
