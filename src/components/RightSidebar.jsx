import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Button } from "../styles/share";
import { MdOutlineEmail } from "react-icons/md";

const Container = styled.div`
  max-width: 80px;
  height: 500px;
  border-radius: 40px;
  border: 1px solid #565656;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  border: 2px solid yellow;
  padding: 18px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
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
