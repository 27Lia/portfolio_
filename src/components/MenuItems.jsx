import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { Link } from "react-scroll";

const ButtonText = styled.span`
  @media (min-width: 1100px) {
    display: none;
  }
  margin-left: 8px;
  font-size: 15px;
  font-weight: 300;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;
  font-size: 21px;
  color: #fff;

  &:hover {
    color: #07a94c;
  }
`;

function MenuItems() {
  return (
    <>
      <BtnBox>
        <Link to="App" smooth={true} duration={500}>
          <Button>
            <IoHomeOutline />
            <ButtonText>Introduce</ButtonText>
          </Button>
        </Link>
        <Link to="Skills" smooth={true} duration={500}>
          <Button>
            <LuBoxes />
            <ButtonText>Skills</ButtonText>
          </Button>
        </Link>
        <Link to="Portfolio" smooth={true} duration={500}>
          <Button>
            <IoDocumentAttachOutline /> <ButtonText>Portfolio</ButtonText>
          </Button>
        </Link>
        <Link to="Resume" smooth={true} duration={500}>
          <Button>
            <RiShoppingBagLine /> <ButtonText>Resume</ButtonText>
          </Button>
        </Link>
      </BtnBox>
    </>
  );
}
export default MenuItems;
