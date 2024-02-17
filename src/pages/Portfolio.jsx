import { IoDocumentAttachOutline } from "react-icons/io5";
import {
  Container,
  HighlightText,
  Icon,
  MainTitle,
  Title,
} from "../styles/share";
import styled from "styled-components";
import { FaLink } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
function Portfolio() {
  const ProjectItem = styled.li`
    list-style: none;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
      font-weight: 300;
    }

    a {
      color: #fff;
      text-decoration: underline;
      font-weight: 300;
    }

    @media (max-width: 700px) {
      h3 {
        font-size: 20px;
      }
    }
  `;

  const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 700px) {
    }
  `;

  const Div = styled.div`
    height: 400px;
    background-color: #e6e4de;
    border-radius: 18px;
    width: 100%;
    padding: 50px 30px;

    @media (max-width: 700px) {
      padding: 20px;
      height: auto;
    }
  `;

  const Div2 = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 18px;
    background-color: #e9e9e9;
    padding: 50px 30px;

    @media (max-width: 700px) {
      height: auto;
      padding: 20px;
    }
  `;

  const Div22 = styled.div`
    position: relative;
    width: 100%;
    height: 350px;
    border-radius: 18px;
    background-color: #e9e9e9;
    padding: 50px 30px;
    @media (max-width: 700px) {
      height: auto;
      padding: 20px;
    }
  `;

  const Div3 = styled.div`
    position: relative;
    height: 400px;
    background-color: #f5da97;
    border-radius: 18px;
    width: 100%;

    padding: 50px 30px;
    @media (max-width: 700px) {
      height: auto;
      padding: 20px;
    }
  `;

  const Div4 = styled.div`
    position: relative;
    border-radius: 18px;
    height: 400px;
    width: 100%;
    background-color: #b9b9b9;
    border-radius: 18px;
    padding: 50px 30px;
    @media (max-width: 700px) {
      height: auto;
      padding: 20px;
    }
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 18px;
    object-fit: cover;
  `;

  const SecondBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 25px;
    @media (max-width: 700px) {
      flex-wrap: wrap;
    }
  `;

  const Button = styled.a`
    background-color: transparent;
  `;

  const Text = styled.div`
    font-size: 21px;
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `;

  const PortfolioHeader = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  `;

  const ProjectText = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const LinkBox = styled.div`
    display: flex;
    align-items: center;
    font-size: 21px;
    gap: 8px;
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
      <DataContainer>
        <Div data-aos="fade-right" data-aos-duration="1000">
          <Img src="../images/1.png" alt="포트폴리오 이미지" />
        </Div>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>NCT MBTI TEST</h3>
              <p>2024.01.18~ 2023.01.24</p>
            </PortfolioHeader>
            <p>
              사용자와 같은 유형인 멤버와 궁합멤버를 추천해주는
              MBTI사이트입니다.
            </p>

            <ProjectText>
              <p>- 서비스 7일차 사용자 1만명 이상 누적 </p>
              <p>
                - MBTI 타입 데이터 암호화 및 복호화, SNS공유기능, 결과추출기능
              </p>
            </ProjectText>
            <LinkBox>
              <Button href="https://github.com/27Lia/mbti" target="_blank">
                <FaGithub />
              </Button>
              <a href="https://nctmbti.vercel.app/" target="blank">
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>

        <SecondBox>
          <Div2 data-aos="fade-right" data-aos-duration="1000">
            <Img src="../images/3.png" alt="포트폴리오 이미지"></Img>
          </Div2>

          <Div22 data-aos="fade-left" data-aos-duration="1000">
            <Img src="../images/4.png" alt="포트폴리오 이미지"></Img>
          </Div22>
        </SecondBox>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>하루모임 사이트</h3>
              <p>2023.08.24 ~ 2023.09.22</p>
            </PortfolioHeader>
            <p>카드 형태로 모임을 만들고 참여하는 플랫폼입니다.</p>
            <ProjectText>
              <p>- 카드작성페이지, 카드조회페이지, 카드참여, 찜기능 등 구현</p>
              <p>
                - 카카오맵 API를 활용한 키워드검색,마크표시 등 다양한 지도
                서비스 기능 구현
              </p>
              <p>
                - 전반적인 서비스 기획 및 UI/UX 디자인 구현, React-hook-form을
                이용한 폼 유효성 검사
              </p>
              <p>
                - Keyframes를 이용한 반응형웹 구현, React Hook Form의 도입으로
                사용자 경험 개선, 중단 시간 50% 감소
              </p>
            </ProjectText>
            <LinkBox>
              <Button href="https://github.com/27Lia/celebee" target="_blank">
                <FaGithub />
              </Button>
              <a href="https://celebee-three.vercel.app/" target="black">
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>
        <Div3 data-aos="fade-up" data-aos-duration="1000">
          <Img src="../images/2.png" alt="포트폴리오 이미지"></Img>
        </Div3>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>여주 고철 웹페이지</h3>
              <p>2023.09.30 ~ 2023.10.18</p>
            </PortfolioHeader>
            <p>회사소개 웹페이지 외주제작 프로젝트입니다.</p>
            <ProjectText>
              <p>- SEO 최적화</p>
              <p>- 디자인 기획 및 반응형웹 구현, 슬라이드 구현</p>
            </ProjectText>
            <LinkBox>
              <Button href="https://github.com/27Lia/junkshop" target="_blank">
                <FaGithub />
              </Button>
              <a href="https://junkshop.vercel.app/" target="blank">
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>
        <Div4 data-aos="fade-down" data-aos-duration="1000">
          <Img src="../images/5.png" alt="포트폴리오 이미지"></Img>
        </Div4>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>쇼핑몰</h3>
              <p>2023.07 ~ 2023.08</p>
            </PortfolioHeader>
            <p>Firebase를 사용한 간단한 쇼핑몰 웹 사이트입니다.</p>
            <ProjectText>
              <p>- Firebase를 활용한 로그인, 회원가입, 문의게시판 구현</p>
              <p>- 필터링, 무한 스크롤, 북마크, toast message 알림 기능 구현</p>
              <p>
                - Stylecomponent를 활용하여 디자인 구현, S3 버킷으로 웹사이트
                배포
              </p>
              <p>
                - 리덕스를 활용한 상태관리, 무한 스크롤 기능 도입으로 초기 로딩
                시 데이터 양 10% 감소
              </p>
            </ProjectText>
            <LinkBox>
              <Button
                href="https://github.com/27Lia/fe-sprint-coz-shopping"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <a
                href="https://27lia.github.io/fe-sprint-coz-shopping/"
                target="blank"
              >
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>
      </DataContainer>
    </Container>
  );
}

export default Portfolio;
