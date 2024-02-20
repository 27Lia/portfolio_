import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFilePdf, FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si"; // Simple Icons
import { Button } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  max-width: 400px;
  min-width: 216px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #cfd0c94f;
  height: 750px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.497);

  @media (max-width: 1400px) {
    max-width: 700px;
    padding: 30px;
    transform: none;
    top: auto;
    left: auto;
    position: static;
    height: 700px;
    align-items: center;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1400px) {
    width: 100%;
  }
`;

const Name = styled.div`
  font-size: 40px;
  font-weight: 400;
`;

const Img = styled.img`
  border-radius: 30px;
  max-width: 320px;
  width: 100%;
  object-fit: contain;
`;

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 35px;
  width: 100%;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #cfd0c9;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
    gap: 36px;
    flex-wrap: wrap;
  }
  @media (max-width: 700px) {
    width: 100%;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
  }
`;

const EmailBtn = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  background-color: #07a94c;
  border: 1px solid #07a94c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  font-weight: 300;

  &:hover {
    background-color: transparent;
    border: 1px solid #07a94c;
  }
`;

const Icon = styled(MdOutlineEmail)`
  margin: 2px 10px 0px 0px;
`;

function LeftSidebar() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:tjs4114@gmail.com?subject=문의사항&body=메시지 내용을 여기에 작성하세요.";
  };

  return (
    <Container>
      <Header>
        <Name>Lia</Name>
        <Span>Front-end development</Span>
      </Header>
      <Img src="./profile2.png"></Img>
      <EmailBox>
        <Span>tjs4114@gmail.com</Span>
        <Span>서울시 송파구 문정동</Span>
      </EmailBox>
      <BtnBox>
        <Button>
          <a
            href="https://lia-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoHomeOutline />
          </a>
        </Button>
        <Button>
          <a href="/이력서_김선미.pdf" download="public/[프론트엔드]이력서 및 포트폴리오-김선미.pdf">
            <FaRegFilePdf />
          </a>
        </Button>
        <Button>
          <a
            href="https://velog.io/@rlatjsal010/posts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiVelog />
          </a>
        </Button>
        <Button>
          {" "}
          <a
            href="https://github.com/27Lia"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />{" "}
          </a>
        </Button>
      </BtnBox>
      <EmailBtn onClick={handleEmailClick}>
        <Icon>
          <MdOutlineEmail />
        </Icon>
        Email
      </EmailBtn>
    </Container>
  );
}

export default LeftSidebar;
