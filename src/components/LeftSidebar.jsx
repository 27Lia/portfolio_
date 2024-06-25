import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si";
import { Button } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";
import { SiNotion } from "react-icons/si";
import { AiFillProject } from "react-icons/ai";
// import AIIcon from "./AiIcon";

const Container = styled.div`
  max-width: 400px;
  min-width: 216px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #cfd0c94f;
  height: 600px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  color: #fff;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.497);

  @media (max-width: 1400px) {
    max-width: 500px;
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
  justify-content: space-between;
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
  padding: 12px;
  border-radius: 30px;
  background-color: #07a94c;
  border: 1px solid #07a94c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
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

const NameBox = styled.div`
  display: flex;
  flex-direction: column;
`;
function LeftSidebar() {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:tjs4114@gmail.com?subject=문의사항&body=메시지 내용을 여기에 작성하세요.";
  };

  return (
    <Container>
      <Header>
        <NameBox>
          <Name>Lia</Name>
          <Span>Front-end development</Span>
        </NameBox>
        {/* <AIIcon /> */}
      </Header>

      <Img src="./profile2.png"></Img>

      <BtnBox>
        <Button>
          <a
            href="https://ksm-resume.notion.site/ca9fdc2b6d2d4528adbfc24215584854?pvs=4"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillProject />
          </a>
        </Button>
        <Button>
          <a
            href="https://ksm-resume.notion.site/0f2cb139cd02405abd16843d15f7a4cc?pvs=4"
            target="_blank"
            rel="noreferrer"
          >
            <SiNotion />
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
