import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  max-width: 80px;
  height: 450px;
  border-radius: 40px;
  border: 1px solid #cfd0c9;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  padding: 18px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: #cfd0c9;
  font-size: 18px;

  &:hover {
    color: #07a94c;
  }
`;

function RightSidebar() {
  return (
    <Container>
      <BtnBox>
        <Button>
          <IoHomeOutline />
        </Button>
        <Button>
          <RiShoppingBagLine />
        </Button>
        <Button>
          <LuBoxes />
        </Button>
        <Button>
          <IoDocumentAttachOutline />
        </Button>
        <Button>
          <MdOutlineEmail />
        </Button>
      </BtnBox>
    </Container>
  );
}

export default RightSidebar;
