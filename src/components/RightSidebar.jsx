import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll";

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
  font-size: 21px;

  &:hover {
    color: #07a94c;
  }
`;

function RightSidebar() {
  return (
    <Container>
      <BtnBox>
        <Link to="App" smooth={true} duration={500}>
          <Button>
            <IoHomeOutline />
          </Button>
        </Link>

        <Link to="Skills" smooth={true} duration={500}>
          <Button>
            <LuBoxes />
          </Button>
        </Link>

        <Link to="Portfolio" smooth={true} duration={500}>
          <Button>
            <IoDocumentAttachOutline />
          </Button>
        </Link>

        <Link to="Resume" smooth={true} duration={500}>
          <Button>
            <RiShoppingBagLine />
          </Button>
        </Link>

        {/* <Button>
          <MdOutlineEmail />
        </Button> */}
      </BtnBox>
    </Container>
  );
}

export default RightSidebar;
