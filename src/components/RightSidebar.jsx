import styled from "styled-components";
import { IoHomeOutline } from "react-icons/io5";
import { RiShoppingBagLine } from "react-icons/ri";
import { LuBoxes } from "react-icons/lu";
import { IoDocumentAttachOutline } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-scroll";

const Container = styled.div`
  max-width: 80px;
  height: 400px;
  border-radius: 40px;
  border: 1px solid #cfd0c9;
  position: fixed;
  right: 70px;
  top: 50%;
  transform: translate(0%, -50%);
  z-index: 10;
  padding: 18px;
  /* background-color: #58585849; */
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.497);
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  font-size: 21px;
  color: #fff;

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
