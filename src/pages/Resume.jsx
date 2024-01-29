import styled from "styled-components";
import { Icon, MainTitle, Title } from "../styles/share";
import { RiShoppingBagLine } from "react-icons/ri";

const Container = styled.div`
  color: #fff;
  position: relative;
  padding: 90px 0px;
`;

const ExperienceBlock = styled.div`
  position: relative;
  padding-left: 60px;
  border-left: 1px solid;

  &:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 15px;
    width: 15px;
    background-color: #07a94c; // 타임라인 점 색상
    border-radius: 50%;
    transform: translate(-50%, 0);
  }
`;

const Year = styled.div`
  font-size: 18px;
  font-weight: 200;
  color: #cfd0c9;
  margin-bottom: 10px;
`;

const SubTitle = styled.h3`
  font-size: 21px;
  font-weight: 400;
  color: #fff;
  margin-bottom: 5px;
`;

const Role = styled.div`
  color: #cfd0c9;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Description = styled.div`
  color: #cfd0c9;
  font-size: 14px;
`;

const Br = styled.div`
  height: 30px;
`;
function Resume() {
  return (
    <>
      <Container>
        <div data-aos="fade-up" data-aos-duration="300">
          <Title>
            <Icon>
              <RiShoppingBagLine />
            </Icon>
            Resume
          </Title>
          <MainTitle>Career </MainTitle>
        </div>
        <div data-aos="fade-left" data-aos-duration="800">
          <ExperienceBlock>
            <Year>2022.01 - 2023.02</Year>
            <SubTitle>컨텐츠 운영팀 / 사원</SubTitle>
            <Role>콘샐러드</Role>
            <Description>
              <div>
                - apple music, youtube, spotify 외 해외 및 국내 파트너사
                음악유통 업무
              </div>
              <div>- 데이터 관리 및 모니터링</div>
              <Br />
            </Description>
          </ExperienceBlock>
          <ExperienceBlock>
            <Year> 2021.03 - 2021.12</Year>
            <SubTitle>회원관리팀 / 인턴</SubTitle>
            <Role>한국음악실연자연합회</Role>
            <Description>
              <div>- CMS를 통한 음악 사용 로그 데이터 분석</div>
              <div>- 뮤지션 지원 업무</div>
              <div>- 인공지능 학습용 데이터 구축사업 참여</div>
            </Description>
          </ExperienceBlock>
          <Br />
        </div>
        <div data-aos="fade-left" data-aos-duration="800">
          <MainTitle>Education</MainTitle>
          <ExperienceBlock>
            <Year>2022.03 -</Year>
            <SubTitle> 방송통신대학교 (휴학)</SubTitle>
            <Role>컴퓨터 과학과 </Role>
            <Br />
          </ExperienceBlock>
          <ExperienceBlock>
            <Year>2018.03 - 2020.02</Year>
            <SubTitle>백석예술대학교 (졸업)</SubTitle>
            <Role> 음악학부</Role>
          </ExperienceBlock>
        </div>
        <Br />
        <div data-aos="fade-left" data-aos-duration="800">
          <MainTitle> Experience & Awards</MainTitle>
          <ExperienceBlock>
            <Year>2023.04.11 - 2023.10.05</Year>
            <SubTitle>Front-end Software Education</SubTitle>
            <Role>코드스테이츠 </Role> <Br />
          </ExperienceBlock>
          <ExperienceBlock>
            <Year>2021.12</Year>
            <SubTitle>
              다음색 보컬데이터를 활용한 Ai 아이디어 해커톤 2위
            </SubTitle>
            <Role>
              다음색 보컬데이터를 활용한 Ai 아이디어 해커톤 2위 소상공인
              로고송을 만들어주는 AI 서비스를 기획하여. 메타버스의 AI 로고송
              메이커 '로고봇' 통해 음악장르, 보컬톤, 상점종류 등을 선택하는
              기획으로 해커톤에 참가하였습니다.
            </Role>
          </ExperienceBlock>
        </div>
      </Container>
    </>
  );
}

export default Resume;
