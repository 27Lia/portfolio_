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
    height: 300px;
    background-color: #e6e4de;
    border-radius: 18px;
    width: 100%;
    padding: 40px;
    @media (max-width: 700px) {
      padding: 0px;
      height: auto;
    }
  `;

  const Div2 = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 18px;
    background-color: #e9e9e9;
    padding: 40px;
    @media (max-width: 700px) {
      height: auto;
      padding: 0px;
    }
  `;

  const Div22 = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    border-radius: 18px;
    background-color: #e9e9e9;
    padding: 40px;
    @media (max-width: 700px) {
      height: auto;
      padding: 0px;
    }
  `;

  const Div3 = styled.div`
    position: relative;
    height: 300px;
    background-color: #f5da97;
    border-radius: 18px;
    width: 100%;
    padding: 40px;
    @media (max-width: 700px) {
      height: auto;
      padding: 0px;
    }
  `;

  const Div4 = styled.div`
    position: relative;
    border-radius: 18px;
    height: 300px;
    width: 100%;
    background-color: #b9b9b9;
    border-radius: 18px;
    padding: 40px;
    @media (max-width: 700px) {
      height: auto;
      padding: 0px;
    }
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: contain;
  `;

  const SecondBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 40px;

    @media (max-width: 700px) {
      flex-wrap: wrap;
      gap: 50px;
    }
  `;

  const Button = styled.a`
    background-color: transparent;
    border: none;
    font-size: 14px;
    font-weight: 400;
    background-color: #fff;
    border-radius: 17px;
    padding: 5px 18px;
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.239);
  `;

  const BtnBox = styled.a`
    bottom: 15px;
    left: 10px;
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    height: auto;
    gap: 10px;
  `;

  const Text = styled.div`
    font-size: 21px;
    color: #fff;
    margin: 10px 0;
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
        <BtnBox>
          <Button href="https://nctmbti.vercel.app/" target="_blank">
            Site
          </Button>
          <Button target="_blank" href="https://github.com/27Lia/mbti">
            Repo
          </Button>
        </BtnBox>
      </Div>
      <Text>NCT MBTI TEST</Text>

      <SecondBox>
        <Div2 data-aos="fade-right" data-aos-duration="1000">
          <Img src="../images/3.png" alt="포트폴리오 이미지"></Img>
          <BtnBox>
            <Button href="https://celebee-three.vercel.app/" target="_blank">
              Site
            </Button>
            <Button target="_blank" href="https://github.com/27Lia/celebee">
              Repo
            </Button>
          </BtnBox>
        </Div2>

        <Div22 data-aos="fade-left" data-aos-duration="1000">
          <Img src="../images/4.png" alt="포트폴리오 이미지"></Img>
        </Div22>
      </SecondBox>
      <Text>하루모임 사이트</Text>

      <Div3 data-aos="fade-up" data-aos-duration="1000">
        <Img src="../images/2.png" alt="포트폴리오 이미지"></Img>
        <BtnBox>
          <Button href="https://junkshop.vercel.app/" target="_blank">
            Site
          </Button>
          <Button target="_blank" href="https://github.com/27Lia/junkshop">
            Repo
          </Button>
        </BtnBox>
      </Div3>
      <Text>여주 고철 웹페이지</Text>

      <Div4 data-aos="fade-down" data-aos-duration="1000">
        <Img src="../images/5.png" alt="포트폴리오 이미지"></Img>
        <BtnBox>
          <Button
            href="https://fe-sprint-coz-shopping-eta.vercel.app/"
            target="_blank"
          >
            Site
          </Button>
          <Button
            target="_blank"
            href="https://github.com/27Lia/fe-sprint-coz-shopping"
          >
            Repo
          </Button>
        </BtnBox>
      </Div4>
      <Text>쇼핑몰</Text>
    </Container>
  );
}

export default Portfolio;
