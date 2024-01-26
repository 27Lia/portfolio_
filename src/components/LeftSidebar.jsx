import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegFilePdf, FaGithub } from "react-icons/fa6";
import { SiVelog } from "react-icons/si"; // Simple Icons

const Container = styled.div`
  max-width: 400px;
  height: 660px;
  width: 100%;
  border-radius: 30px;
  border: 1px solid #565656;
  position: fixed;
  left: 20px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  padding: 50px;
  border: 2px solid blue;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 300px;
  height: 250px;
  border-radius: 30px;
`;
const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #ddd;
  background-color: transparent;
`;

const EmailBtn = styled.button`
  width: 100%;
  padding: 18px;
  border-radius: 30px;
`;

function LeftSidebar() {
  return (
    <Container>
      <Header>
        <h1>이름</h1>
        <span>설명</span>
      </Header>
      <Img src="./profile2.png" alt="프로필사진"></Img>
      <h2>이메일</h2>
      <h2>주소</h2>
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
      <EmailBtn>이메일버튼</EmailBtn>
    </Container>
  );
}

export default LeftSidebar;
