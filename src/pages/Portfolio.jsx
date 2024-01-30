import { IoDocumentAttachOutline } from "react-icons/io5";
import {
  Container,
  HighlightText,
  Icon,
  MainTitle,
  Title,
} from "../styles/share";
import styled from "styled-components";

function Portfolio() {
  const Div = styled.div`
    position: relative;
    margin-bottom: 30px;
    height: 400px;
    background-color: #f4f4f4;
    border-radius: 18px;
    width: 100%;
  `;

  const Div3 = styled.div`
    margin-bottom: 30px;
    width: 100%;
    background-color: #bdb7e9;
    border-radius: 18px;
  `;

  const Div4 = styled.div`
    border-radius: 18px;
    margin-bottom: 30px;
    height: 400px;
    width: 100%;
    background-color: #c63838;
    border-radius: 18px;
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%; // 맥북에선 있어야함.
    border-radius: 18px;
  `;

  const SecondBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
  `;

  const Button = styled.a`
    background-color: transparent;
    border: none;
    font-size: 16px;
    font-weight: 400;
    background-color: #fff;
    border-radius: 17px;
    padding: 5px 18px;
    position: absolute;
    bottom: 6%;
    left: 3%;
  `;

  return (
    <Container id="Portfolio" data-aos="fade-up" data-aos-duration="1000">
      <Title>
        <Icon>
          <IoDocumentAttachOutline />
        </Icon>
        <>Portfolio</>
      </Title>
      <MainTitle>
        My <HighlightText>Projects</HighlightText>
      </MainTitle>

      <Div data-aos="fade-right" data-aos-duration="1000">
        <Img src="../images/1.png" alt="포트폴리오 이미지"></Img>
        <Button href="https://nctmbti.vercel.app/" target="_blank">
          Site
        </Button>
      </Div>
      <Div data-aos="fade-up" data-aos-duration="1000">
        <Img src="../images/2.png" alt="포트폴리오 이미지"></Img>
        <Button href="https://junkshop.vercel.app/" target="_blank">
          Site
        </Button>
      </Div>
      <SecondBox>
        <Div3 data-aos="fade-right" data-aos-duration="1000">
          <Img src="../images/003.png" alt="포트폴리오 이미지"></Img>
          <Button href="https://celebee-three.vercel.app/" target="_blank">
            Site
          </Button>
        </Div3>

        <Div3 data-aos="fade-left" data-aos-duration="1000">
          <Img src="../images/4.png" alt="포트폴리오 이미지"></Img>
        </Div3>
      </SecondBox>
      <Div4 data-aos="fade-down" data-aos-duration="1000">
        <Img src="../images/5.png" alt="포트폴리오 이미지"></Img>
        <Button
          href="https://fe-sprint-coz-shopping-eta.vercel.app/"
          target="_blank"
        >
          Site
        </Button>
      </Div4>
    </Container>
  );
}

export default Portfolio;
