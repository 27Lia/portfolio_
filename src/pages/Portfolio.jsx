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
    height: 450px;
    background-color: #fff;
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
    background-color: #fff;
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
    background-color: #fff;
    padding: 50px 30px;
    @media (max-width: 700px) {
      height: auto;
      padding: 20px;
    }
  `;

  const Img = styled.img`
    width: 100%;
    height: 100%;
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
        <Div data-aos="fade-up" data-aos-duration="1000">
          <Img src="../images/6.png" alt="포트폴리오 이미지"></Img>
        </Div>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>readme-decorate</h3>
              <p>2024.05.18~ 05.28</p>
            </PortfolioHeader>
            <p>
              사용자가 입력한 다양한 파라미터를 기반으로 커스터마이즈된 SVG
              이미지를 생성해주는 웹서비스입니다.
            </p>
            <ProjectText>
              <p>
                - SVG 이미지 생성: 텍스트, 글꼴 색상, 배경 색상, 글꼴 크기 등
                다양한 커스터마이징 옵션 제공
              </p>

              <p>
                - URL 생성 및 공유: 생성된 SVG 이미지의 URL을 생성하여 공유할 수
                있는 기능
              </p>
              <p>
                - Next.js 서버사이드 렌더링 및 API 개발: GET, POST 요청을
                처리하는 API 엔드포인트 구현
              </p>
            </ProjectText>
            <LinkBox>
              <Button
                href="https://github.com/27Lia/readme-decorate"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <a href="https://readme-decorate.vercel.app/" target="blank">
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>

        <Div data-aos="fade-right" data-aos-duration="1000">
          <Img src="../images/1.png" alt="포트폴리오 이미지" />
        </Div>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>NCT MBTI TEST</h3>
              <p>2024.01.18~ 2024.01.24</p>
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
              <a href="https://27lia.github.io/mbti/" target="blank">
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
              <h4>하루모임 사이트</h4>
              <p>2023.08.24 ~ 2023.09.22</p>
            </PortfolioHeader>
            <h5>카드 형태로 모임을 만들고 참여하는 플랫폼입니다.</h5>
            <ProjectText>
              <p>- 서비스 기획 및 UI/UX 디자인 구현</p>
              <p>- 반응형웹 구현</p>
              <p>
                - React Hook Form의 도입으로 사용자 경험 개선, 중단 시간 50%
                감소
              </p>
              <p>- 카드작성, 카드조회, 참여, 찜기능 등 구현</p>
              <p>
                - 카카오맵 API를 활용한 키워드검색, 마크표시 등 다양한 지도
                서비스 기능 구현
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

        <Div data-aos="fade-down" data-aos-duration="1000">
          <Img src="../images/5.png" alt="포트폴리오 이미지"></Img>
        </Div>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>쇼핑몰</h3>
              <p>2023.07 ~ 2024.03 (중간에 develop)</p>
            </PortfolioHeader>
            <p>Firebase를 사용한 간단한 쇼핑몰 웹 사이트입니다.</p>
            <ProjectText>
              <p>
                - 로그인, 회원가입, 문의게시판, 장바구니, 필터링, 무한 스크롤,
                toast message 알림 구현
              </p>
              <p>- Stylecomponent를 활용하여 스타일 구현</p>
              <p>- 리덕스를 활용한 상태관리</p>
              <p>- 무한 스크롤 기능 도입으로 초기 로딩 시 데이터 양 10% 감소</p>
            </ProjectText>
            <LinkBox>
              <Button
                href="https://github.com/27Lia/fe-sprint-coz-shopping"
                target="_blank"
              >
                <FaGithub />
              </Button>
              <a
                href="https://fe-sprint-coz-shopping-git-main-27lias-projects.vercel.app/"
                target="blank"
              >
                <FaLink />
              </a>
            </LinkBox>
          </Text>
        </ProjectItem>

        <Div data-aos="fade-up" data-aos-duration="1000">
          <Img src="../images/2.png" alt="포트폴리오 이미지"></Img>
        </Div>
        <ProjectItem>
          <Text>
            <PortfolioHeader>
              <h3>여주 고철 웹페이지</h3>
              <p>2023.09.30 ~ 2023.10.18</p>
            </PortfolioHeader>
            <p>회사소개 웹페이지 외주제작 프로젝트입니다.</p>
            <ProjectText>
              <p>- SEO 최적화 / 구글페이지 검색 시 1페이지 노출</p>
              <p>- 디자인 기획</p>
              <p>- 반응형웹 구현</p>
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
      </DataContainer>
    </Container>
  );
}

export default Portfolio;
