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
  height: 750px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  // 미디어 쿼리 삭제
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  // 미디어 쿼리 삭제
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.497);

  @media (max-width: 1400px) {
    max-width: 700px;
    /* width: 100%; */
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

  @media (max-width: 1400px) {
    // 미디어쿼리추가
    height: 280px;
    width: 310px;
  }
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
  @media (max-width: 1400px) {
    width: 100%;
    justify-content: center;
    gap: 36px;
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
