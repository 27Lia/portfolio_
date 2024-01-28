import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
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
  border: 2px solid #ddd;
  padding: 18px;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  color: #fff;
`;

function RightSidebar() {
  return (
    <Container>
      <BtnBox>
        <IoHomeOutline />
        <RiShoppingBagLine />
        <LuBoxes />
        <IoDocumentAttachOutline />
        <MdOutlineEmail />
      </BtnBox>
    </Container>
  );
}

export default RightSidebar;
