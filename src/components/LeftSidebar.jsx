import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFilePdf, FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si"; // Simple Icons
import { Button } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #cfd0c94f;
  height: 100%;
  // 미디어 쿼리 삭제
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  // 미디어 쿼리 삭제

  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;

  @media (max-width: 1400px) {
    max-width: 350px;
    padding: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 38px;
  font-weight: 500;
`;

const Img = styled.img`
  border-radius: 30px;
  // 미디어쿼리추가
  /* height: 200px;
  width: 200px; */
`;

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 35px;
`;

const Span = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #cfd0c9;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmailBtn = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  background-color: transparent;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  font-weight: 300;

  &:hover {
    background-color: transparent;
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.12);
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
      <Img src="./profile3.png"></Img>
      <EmailBox>
        <Span>tjs4114@gmail.com</Span>
        <Span>서울시 송파구 문정동</Span>
      </EmailBox>
      <BtnBox>
        <Button>
          <IoHomeOutline />
        </Button>
        <Button>
          <FaRegFilePdf />
        </Button>
        <Button>
          <SiVelog />
        </Button>
        <Button>
          <FaGithub />
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
