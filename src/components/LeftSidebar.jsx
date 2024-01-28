import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFilePdf, FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si"; // Simple Icons
import { Button } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  max-width: 400px;
  height: 750px;
  width: 100%;
  border-radius: 30px;
  /* border: 1px solid #cfd0c9; */
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #fff;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.2);
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 300px;
  height: 260px;
  border-radius: 30px;
`;

const EmailBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 35px;
`;

const Span = styled.div`
  font-weight: 400;
  font-size: 21px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const EmailBtn = styled.button`
  width: 100%;
  padding: 14px;
  border-radius: 30px;
  background-color: #07a94c;
  border: none;
  border: 2px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #fff;
  font-weight: 300;

  &:hover {
    background-color: transparent;
    border: 2px solid #07a94c;
  }
`;

const Icon = styled(MdOutlineEmail)`
  margin: 2px 10px 0px 0px;
`;

function LeftSidebar() {
  return (
    <Container>
      <Header>
        <h1>Lia</h1>
        <span>Front-end development</span>
      </Header>
      <Img src="./profile2.png"></Img>
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
      <EmailBtn>
        <Icon>
          <MdOutlineEmail />
        </Icon>
        Email
      </EmailBtn>
    </Container>
  );
}

export default LeftSidebar;
